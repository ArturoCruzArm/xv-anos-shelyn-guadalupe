// ========================================
// GLOBAL VARIABLES - XV Años Sheilyn Guadalupe
// ========================================
// Total: 183 fotos
const photos = [
    "img/2026-03-31-17-28-52-312.webp","img/2026-03-31-17-28-55-708.webp","img/2026-03-31-17-28-57-750.webp","img/2026-03-31-17-29-07-289.webp","img/2026-03-31-17-30-53-700.webp",
    "img/2026-03-31-17-31-09-321.webp","img/2026-03-31-17-31-12-022.webp","img/DJI_20260331_174156_089.webp","img/DJI_20260331_174207_436.webp","img/DJI_20260331_174214_316.webp",
    "img/DJI_20260331_174215_457.webp","img/DJI_20260331_174216_729.webp","img/DJI_20260331_174219_209.webp","img/DJI_20260331_174230_126.webp","img/DJI_20260331_174231_809.webp",
    "img/DJI_20260331_174234_058.webp","img/DJI_20260331_174235_709.webp","img/DJI_20260331_174237_315.webp","img/DJI_20260331_174247_440.webp","img/DJI_20260331_174249_626.webp",
    "img/DJI_20260331_174251_396.webp","img/DJI_20260331_174253_676.webp","img/DJI_20260331_174258_596.webp","img/DJI_20260331_174305_963.webp","img/DJI_20260331_174314_602.webp",
    "img/DJI_20260331_174316_280.webp","img/DSC_4919.webp","img/DSC_4920.webp","img/DSC_4924.webp","img/DSC_4925.webp",
    "img/DSC_4926.webp","img/DSC_4927.webp","img/DSC_4928.webp","img/DSC_4929.webp","img/DSC_4930.webp",
    "img/DSC_4931.webp","img/DSC_4932.webp","img/DSC_4933.webp","img/DSC_4934.webp","img/DSC_4935.webp",
    "img/DSC_4936.webp","img/DSC_4937.webp","img/DSC_4938.webp","img/DSC_4939.webp","img/DSC_4940.webp",
    "img/DSC_4941.webp","img/DSC_4942.webp","img/DSC_4943.webp","img/DSC_4944.webp","img/DSC_4945.webp",
    "img/DSC_4946.webp","img/DSC_4947.webp","img/DSC_4948.webp","img/DSC_4949.webp","img/DSC_4950.webp",
    "img/DSC_4951.webp","img/DSC_4952.webp","img/DSC_4953.webp","img/DSC_4954.webp","img/DSC_4955.webp",
    "img/DSC_4956.webp","img/DSC_4957.webp","img/DSC_4958.webp","img/DSC_4959.webp","img/DSC_4960.webp",
    "img/DSC_4961.webp","img/DSC_4962.webp","img/DSC_4963.webp","img/DSC_4964.webp","img/DSC_4965.webp",
    "img/DSC_4966.webp","img/DSC_4967.webp","img/DSC_4968.webp","img/DSC_4969.webp","img/DSC_4970.webp",
    "img/DSC_4971.webp","img/DSC_4972.webp","img/DSC_4973.webp","img/DSC_4974.webp","img/DSC_4975.webp",
    "img/DSC_4976.webp","img/DSC_4977.webp","img/DSC_4978.webp","img/DSC_4979.webp","img/DSC_4980.webp",
    "img/DSC_4981.webp","img/DSC_4982.webp","img/DSC_4983.webp","img/DSC_4984.webp","img/DSC_4985.webp",
    "img/DSC_4986.webp","img/DSC_4987.webp","img/DSC_4988.webp","img/DSC_4989.webp","img/DSC_4990.webp",
    "img/DSC_4991.webp","img/DSC_4992.webp","img/DSC_4993.webp","img/DSC_4994.webp","img/DSC_4995.webp",
    "img/DSC_4996.webp","img/DSC_4997.webp","img/DSC_4998.webp","img/DSC_4999.webp","img/DSC_5000.webp",
    "img/DSC_5001.webp","img/DSC_5003.webp","img/DSC_5004.webp","img/DSC_5005.webp","img/DSC_5006.webp",
    "img/DSC_5007.webp","img/DSC_5008.webp","img/DSC_5009.webp","img/DSC_5010.webp","img/DSC_5011.webp",
    "img/DSC_5012.webp","img/DSC_5013.webp","img/DSC_5014.webp","img/DSC_5015.webp","img/DSC_5016.webp",
    "img/DSC_5017.webp","img/DSC_5018.webp","img/DSC_5019.webp","img/DSC_5020.webp","img/DSC_5021.webp",
    "img/DSC_5023.webp","img/DSC_5024.webp","img/DSC_5025.webp","img/DSC_5026.webp","img/DSC_5027.webp",
    "img/DSC_5029.webp","img/DSC_5030.webp","img/DSC_5031.webp","img/DSC_5032.webp","img/DSC_5033.webp",
    "img/DSC_5034.webp","img/DSC_5035.webp","img/DSC_5036.webp","img/DSC_5037.webp","img/DSC_5038.webp",
    "img/DSC_5039.webp","img/DSC_5040.webp","img/DSC_5041.webp","img/DSC_5042.webp","img/DSC_5043.webp",
    "img/DSC_5045.webp","img/DSC_5046.webp","img/DSC_5047.webp","img/DSC_5048.webp","img/DSC_5049.webp",
    "img/DSC_5050.webp","img/DSC_5051.webp","img/DSC_5052.webp","img/DSC_5053.webp","img/DSC_5054.webp",
    "img/DSC_5055.webp","img/DSC_5056.webp","img/DSC_5057.webp","img/DSC_5058.webp","img/DSC_5059.webp",
    "img/DSC_5060.webp","img/DSC_5061.webp","img/DSC_5062.webp","img/DSC_5063.webp","img/DSC_5064.webp",
    "img/DSC_5065.webp","img/DSC_5066.webp","img/DSC_5067.webp","img/DSC_5068.webp","img/DSC_5069.webp",
    "img/DSC_5070.webp","img/DSC_5071.webp","img/DSC_5072.webp","img/DSC_5073.webp","img/DSC_5074.webp",
    "img/DSC_5075.webp","img/DSC_5076.webp","img/DSC_5077.webp","img/DSC_5078.webp","img/DSC_5079.webp",
    "img/DSC_5080.webp","img/DSC_5081.webp","img/DSC_5082.webp","img/DSC_5083.webp","img/DSC_5084.webp",
    "img/DSC_5085.webp","img/DSC_5086.webp","img/DSC_5087.webp","img/DSC_5088.webp","img/DSC_5089.webp",
    "img/DSC_5090.webp","img/DSC_5091.webp","img/DSC_5092.webp","img/DSC_5093.webp","img/DSC_5094.webp",
    "img/DSC_5095.webp","img/DSC_5096.webp","img/DSC_5097.webp","img/DSC_5098.webp","img/DSC_5099.webp",
    "img/DSC_5101.webp","img/img 2.webp","img/img1.webp"
];

const STORAGE_KEY = 'xv_anos_sheilyn_guadalupe_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: 200,
    invitacion: null
};
const COSTO_FOTO_ADICIONAL = (window.EVENT_CONFIG && window.EVENT_CONFIG.costoFotoAdicional) || 15;
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada),
        caja_fotos: !!(selection && selection.caja_fotos),
        caja_usb: !!(selection && selection.caja_usb)
    };
}

function hasAnySelection(selection) {
    const n = normalizeSelection(selection);
    return n.ampliacion || n.impresion || n.invitacion || n.descartada || n.caja_fotos || n.caja_usb;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada
        && left.caja_fotos === right.caja_fotos
        && left.caja_usb === right.caja_usb;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        caja_fotos: null,
        caja_usb: null,
        sinClasificar: photos.length
    };

    Object.entries(photoSelections).forEach(([idx, selection]) => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
        if (selection.caja_fotos) stats.caja_fotos = parseInt(idx);
        if (selection.caja_usb) stats.caja_usb = parseInt(idx);
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();
    const limite = LIMITES.impresion;

    document.getElementById('countImpresion').textContent = limite ? stats.impresion + '/' + limite : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;

    var elCajaFotos = document.getElementById('countCajaFotos');
    var elCajaUsb = document.getElementById('countCajaUsb');
    if (elCajaFotos) elCajaFotos.textContent = stats.caja_fotos !== null ? 'Foto ' + (stats.caja_fotos + 1) : '—';
    if (elCajaUsb) elCajaUsb.textContent = stats.caja_usb !== null ? 'Foto ' + (stats.caja_usb + 1) : '—';

    // Extra cost display
    var extraDisplay = document.getElementById('extraCostDisplay');
    if (extraDisplay && limite && stats.impresion > limite) {
        var extra = stats.impresion - limite;
        var costo = extra * COSTO_FOTO_ADICIONAL;
        document.getElementById('extraCostDetail').textContent = extra + ' foto' + (extra > 1 ? 's' : '');
        document.getElementById('extraCostAmount').textContent = '$' + costo;
        extraDisplay.style.display = 'block';
    } else if (extraDisplay) {
        extraDisplay.style.display = 'none';
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada || selection.caja_fotos || selection.caja_usb;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');
            if (selection.caja_fotos) categories.push('caja_fotos');
            if (selection.caja_usb) categories.push('caja_usb');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add('has-' + categories[0]);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌</span>';
            if (selection.caja_fotos) badgesHTML += '<span class="badge badge-caja_fotos">📦</span>';
            if (selection.caja_usb) badgesHTML += '<span class="badge badge-caja_usb">💾</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = 'Foto ' + (index + 1);
        card.innerHTML = '<div class="photo-image-container"><img src="' + photo + '" alt="' + displayNumber + '" loading="lazy"></div><div class="photo-number">' + displayNumber + '</div>' + badgesHTML;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'caja_fotos':
                show = selection.caja_fotos === true;
                break;
            case 'caja_usb':
                show = selection.caja_usb === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada && !selection.caja_fotos && !selection.caja_usb;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector('[data-filter="' + filter + '"]');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = 'Todas (' + photos.length + ')';
    document.getElementById('btnFilterImpresion').textContent = 'Impresión (' + stats.impresion + ')';
    document.getElementById('btnFilterInvitacion').textContent = 'Invitación (' + stats.invitacion + ')';
    document.getElementById('btnFilterDescartada').textContent = 'Descartadas (' + stats.descartada + ')';
    document.getElementById('btnFilterSinClasificar').textContent = 'Sin Clasificar (' + stats.sinClasificar + ')';

    var btnAmp = document.getElementById('btnFilterAmpliacion');
    if (btnAmp) btnAmp.textContent = '🖼️ Ampliación (' + stats.ampliacion + ')';
    var btnCF = document.getElementById('btnFilterCajaFotos');
    if (btnCF) btnCF.textContent = '📦 Caja Fotos' + (stats.caja_fotos !== null ? ' ✓' : '');
    var btnCU = document.getElementById('btnFilterCajaUsb');
    if (btnCU) btnCU.textContent = '💾 Caja USB' + (stats.caja_usb !== null ? ' ✓' : '');
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');

    const photo = photos[index];
    const displayNumber = 'Foto ' + (index + 1);

    modalImageContainer.innerHTML = '<img id="modalImage" src="' + photo + '" alt="' + displayNumber + '"><div class="modal-photo-number" id="modalPhotoNumber">' + displayNumber + '</div>';

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === 'next') {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) newIndex = 0;
    } else {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) newIndex = photos.length - 1;
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    // Exclusive categories: caja_fotos and caja_usb (only 1 photo each)
    ['caja_fotos', 'caja_usb'].forEach(excl => {
        if (normalized[excl]) {
            Object.keys(photoSelections).forEach(idx => {
                if (parseInt(idx) !== index && photoSelections[idx] && photoSelections[idx][excl]) {
                    photoSelections[idx][excl] = false;
                    if (!hasAnySelection(photoSelections[idx])) {
                        delete photoSelections[idx];
                        if (typeof sbDeleteSelection === 'function') {
                            sbDeleteSelection(parseInt(idx)).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
                        }
                    } else {
                        if (typeof sbSaveSelection === 'function') {
                            sbSaveSelection(parseInt(idx), photoSelections[idx]).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
                        }
                    }
                }
            });
        }
    });

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');
    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '? Esta acción se sincronizará con todos los dispositivos.')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años Sheilyn Guadalupe',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && hasAnySelection(selection)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false,
                caja_fotos: selection.caja_fotos || false,
                caja_usb: selection.caja_usb || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seleccion-fotos-xv-sheilyn-guadalupe-' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS SHEILYN GUADALUPE\n';
    summary += '═══════════════════════════════════════════\n\n';
    summary += '📊 RESUMEN:\n';
    summary += '   Total de fotos: ' + photos.length + '\n';
    summary += '   🖼️  Para ampliación: ' + stats.ampliacion + '\n';
    summary += '   📸 Para impresión: ' + stats.impresion + (LIMITES.impresion ? '/' + LIMITES.impresion : '') + '\n';
    summary += '   💌 Para invitación: ' + stats.invitacion + '\n';
    summary += '   ❌ Descartadas: ' + stats.descartada + '\n';
    summary += '   📦 Caja Fotos: ' + (stats.caja_fotos !== null ? 'Foto ' + (stats.caja_fotos + 1) : 'Sin asignar') + '\n';
    summary += '   💾 Caja USB: ' + (stats.caja_usb !== null ? 'Foto ' + (stats.caja_usb + 1) : 'Sin asignar') + '\n';
    summary += '   ⭕ Sin clasificar: ' + stats.sinClasificar + '\n\n';

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += categoryNames[category] + ':\n';
            summary += '   Fotos: ' + photosInCategory.join(', ') + '\n';
            summary += '   Total: ' + photosInCategory.length + '\n\n';
        }
    });

    summary += '\n📅 Generado el: ' + new Date().toLocaleString('es-MX') + '\n';
    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();
    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type) {
    type = type || 'success';
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    setTimeout(() => { toast.classList.add('show'); }, 100);
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterCajaFotos').addEventListener('click', () => setFilter('caja_fotos'));
    document.getElementById('btnFilterCajaUsb').addEventListener('click', () => setFilter('caja_usb'));

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    var btnDelete = document.getElementById('btnDeleteSelection');
    if (btnDelete) btnDelete.addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') closeModal();
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => navigatePhoto('prev'));
    document.getElementById('btnNextPhoto').addEventListener('click', () => navigatePhoto('next'));

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') navigatePhoto('prev');
            else if (e.key === 'ArrowRight') navigatePhoto('next');
        }
    });
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        if (typeof sbRegistrarVisita === 'function') sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
