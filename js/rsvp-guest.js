// rsvp-guest.js — Sistema RSVP Profesional (lado del invitado)
// Lee ?inv=TOKEN, carga datos desde Supabase, maneja confirmacion
(function () {
    const SB_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
    const SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
    const SB_H = { 'apikey': SB_ANON, 'Authorization': 'Bearer ' + SB_ANON, 'Content-Type': 'application/json' };

    const token = new URLSearchParams(window.location.search).get('inv');
    if (!token) return; // No hay token — invitacion generica, nada que hacer

    let guestData = null;

    // ── Cargar invitado por token ────────────────────────────────────────────
    async function loadGuest() {
        try {
            const r = await fetch(
                `${SB_URL}/rest/v1/invitados?token=eq.${encodeURIComponent(token)}&select=id,nombre,pases_asignados,status,asiste,confirmacion_nombre,pases_confirmados,mensaje,nombres_acompanantes`,
                { headers: SB_H }
            );
            const rows = await r.json();
            if (!rows.length) { showNotFound(); return; }
            guestData = rows[0];
            renderGuestExperience();
        } catch (e) {
            console.warn('RSVP: error cargando invitado', e);
        }
    }

    // ── Marcar como vista ────────────────────────────────────────────────────
    async function markAsViewed(id) {
        try {
            await fetch(`${SB_URL}/rest/v1/invitados?id=eq.${id}`, {
                method: 'PATCH',
                headers: Object.assign({}, SB_H, { 'Prefer': 'return=minimal' }),
                body: JSON.stringify({ status: 'vista', fecha_vista: new Date().toISOString() })
            });
        } catch (e) {}
    }

    // ── Enviar confirmacion ──────────────────────────────────────────────────
    async function submitRSVP(asiste, pases, nombre, mensaje, nombres) {
        const body = {
            status:              asiste ? 'confirmada' : 'declinada',
            asiste:              asiste,
            confirmacion_nombre: nombre,
            pases_confirmados:   pases,
            nombres_acompanantes: nombres || [],
            mensaje:             mensaje || null,
            fecha_confirmacion:  new Date().toISOString()
        };
        const r = await fetch(`${SB_URL}/rest/v1/invitados?id=eq.${guestData.id}`, {
            method: 'PATCH',
            headers: Object.assign({}, SB_H, { 'Prefer': 'return=minimal' }),
            body: JSON.stringify(body)
        });
        return r.ok;
    }

    // ── Generar inputs de nombres ────────────────────────────────────────────
    function buildNombreInputs(count) {
        const container = document.getElementById('nombresContainer');
        const group = document.getElementById('nombresGroup');
        if (!container || !group) return;
        container.innerHTML = '';
        if (count < 1) count = 1;
        group.style.display = count >= 1 ? 'block' : 'none';
        for (let i = 0; i < count; i++) {
            const inp = document.createElement('input');
            inp.type = 'text';
            inp.className = 'nombre-asistente';
            inp.placeholder = 'Nombre persona ' + (i + 1);
            inp.style.cssText = 'width:100%;padding:10px;margin-bottom:6px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.08);color:inherit;font-size:.95rem;';
            container.appendChild(inp);
        }
    }

    // ── Renderizar experiencia personalizada ─────────────────────────────────
    function renderGuestExperience() {
        const g = guestData;

        // Personalizar seccion de bienvenida
        const section  = document.getElementById('personalizedWelcome');
        const textEl   = document.getElementById('guestWelcomeText');
        const pasesEl  = document.getElementById('guestPassesText');
        if (section && textEl && pasesEl) {
            textEl.textContent = `${g.nombre}, estas cordialmente invitado(a)`;
            pasesEl.innerHTML  = `🎟 ${g.pases_asignados} ${g.pases_asignados === 1 ? 'pase asignado' : 'pases asignados'}`;
            section.style.display = 'block';
        }

        // Pre-llenar formulario
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.value = g.nombre;

        // Limitar select/input de pases al numero asignado
        const guestsInput = document.getElementById('guests');
        if (guestsInput) {
            if (guestsInput.tagName === 'SELECT') {
                guestsInput.innerHTML = '<option value="">Selecciona...</option>';
                for (let i = 1; i <= g.pases_asignados; i++) {
                    const opt = document.createElement('option');
                    opt.value = i;
                    opt.textContent = i === 1 ? '1 persona' : `${i} personas`;
                    guestsInput.appendChild(opt);
                }
                if (g.pases_asignados >= 1) guestsInput.value = g.pases_asignados;
            } else {
                guestsInput.max = g.pases_asignados;
                guestsInput.value = g.pases_asignados;
            }
            // Generar campos de nombres
            guestsInput.addEventListener('change', function(){ buildNombreInputs(parseInt(this.value)||1); });
            guestsInput.addEventListener('input', function(){ buildNombreInputs(parseInt(this.value)||1); });
            buildNombreInputs(g.pases_asignados);
        }

        // Si ya confirmo → mostrar estado, ocultar form
        if (g.status === 'confirmada' || g.status === 'declinada') {
            showAlreadyConfirmed();
            return;
        }

        // Marcar como vista si estaba pendiente o enviada
        if (g.status === 'pendiente' || g.status === 'enviada') {
            markAsViewed(g.id);
        }

        // Enganchar el submit del formulario
        attachFormSubmit();
    }

    // ── Ya confirmo anteriormente ────────────────────────────────────────────
    function showAlreadyConfirmed() {
        const rsvpSection = document.getElementById('rsvp');
        if (!rsvpSection) return;
        const g = guestData;
        const asiste = g.asiste;
        const nombres = g.nombres_acompanantes || [];
        const nombresHtml = nombres.length
            ? `<p style="color:#aaa;font-size:.9rem;margin-top:8px;">Asistentes: ${nombres.join(', ')}</p>`
            : '';
        rsvpSection.innerHTML = `
            <div style="text-align:center;padding:40px 20px;background:rgba(255,255,255,0.05);border-radius:20px;border:2px solid var(--gold,#d4af37);">
                <div style="font-size:3rem;margin-bottom:16px;">${asiste ? '🎉' : '💌'}</div>
                <h2 style="color:var(--gold,#d4af37);font-family:'Dancing Script',cursive;margin-bottom:12px;">
                    ${asiste ? 'Ya confirmaste tu asistencia!' : 'Gracias por avisarnos'}
                </h2>
                <p style="color:var(--cream,#eee);font-size:1.1rem;margin-bottom:8px;">
                    ${asiste
                        ? `Te esperamos con ${g.pases_confirmados} ${g.pases_confirmados === 1 ? 'lugar' : 'lugares'} reservados.`
                        : 'Lamentamos que no puedas acompanarnos en este dia tan especial.'}
                </p>
                ${nombresHtml}
                ${g.mensaje ? `<p style="color:#aaa;font-style:italic;margin-top:12px;">"${g.mensaje}"</p>` : ''}
            </div>`;
    }

    // ── No encontrado ────────────────────────────────────────────────────────
    function showNotFound() {
        const section = document.getElementById('personalizedWelcome');
        if (section) {
            section.style.display = 'block';
            section.innerHTML = `
                <div style="font-size:2rem;margin-bottom:12px;">❓</div>
                <h2 style="color:var(--gold,#d4af37);">Enlace no valido</h2>
                <p style="color:var(--cream,#eee);">Este enlace de invitacion no es valido o ha expirado.</p>`;
        }
    }

    // ── Enganchar submit del form ────────────────────────────────────────────
    function attachFormSubmit() {
        const form = document.getElementById('rsvpForm');
        if (!form) return;

        form.onsubmit = null;
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const nombre    = (document.getElementById('name')?.value || '').trim();
            const pases     = parseInt(document.getElementById('guests')?.value || '1');
            const asisteSel = document.getElementById('attendance')?.value;
            const mensaje   = document.getElementById('message')?.value || '';
            const nombres   = Array.from(document.querySelectorAll('.nombre-asistente'))
                .map(inp => inp.value.trim()).filter(Boolean);

            if (!nombre || !asisteSel) return;
            const asiste = asisteSel === 'si';

            const btn = form.querySelector('button[type="submit"]');
            if (btn) { btn.disabled = true; btn.innerHTML = 'Enviando...'; }

            const ok = await submitRSVP(asiste, pases, nombre, mensaje, nombres);

            if (ok) {
                const successEl = document.getElementById('successMessage');
                form.style.display = 'none';
                if (successEl) {
                    const nombresStr = nombres.length ? `<br><small style="opacity:.8">Asistentes: ${nombres.join(', ')}</small>` : '';
                    successEl.style.display = 'block';
                    successEl.innerHTML = `
                        ✓ ${asiste
                            ? `Gracias ${nombre}! Tu asistencia con ${pases} ${pases === 1 ? 'persona' : 'personas'} ha sido confirmada.${nombresStr}`
                            : `Gracias ${nombre} por avisarnos. Te extranaremos!`}`;
                }
                guestData.status              = asiste ? 'confirmada' : 'declinada';
                guestData.asiste              = asiste;
                guestData.pases_confirmados   = pases;
                guestData.confirmacion_nombre = nombre;
                guestData.mensaje             = mensaje;
                guestData.nombres_acompanantes = nombres;
            } else {
                if (btn) { btn.disabled = false; btn.innerHTML = 'Enviar Confirmacion'; }
                alert('Hubo un error al enviar. Intenta de nuevo.');
            }
        });
    }

    // ── Init cuando el DOM este listo ────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGuest);
    } else {
        loadGuest();
    }

    window._rsvpGuestLoaded = true;
})();
