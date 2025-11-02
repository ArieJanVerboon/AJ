// Plant data from JSON
const plantsData = [
  { naam: 'Afrikaantjes', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Mei-Augustus', hoogteBereik: '20-30', gemiddeldeHoogte: 25, hoogtecategorie: 'Laag', hoofdkleur: 'Oranje/Geel', kleurvarianten: ['Geel', 'Oranje', 'Rood'] },
  { naam: 'Aster', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juli-September', hoogteBereik: '40-80', gemiddeldeHoogte: 60, hoogtecategorie: 'Middel', hoofdkleur: 'Paars/Blauw', kleurvarianten: ['Paars', 'Blauw', 'Wit', 'Roze'] },
  { naam: 'Begonia', categorie: 'Eenjarig', plantmoment: 'Februari-Mei', zonSchaduw: 'Halfschaduw', bloeitijd: 'Mei-Oktober', hoogteBereik: '20-40', gemiddeldeHoogte: 30, hoogtecategorie: 'Laag', hoofdkleur: 'Roze/Rood', kleurvarianten: ['Roze', 'Rood', 'Wit', 'Oranje'] },
  { naam: 'Cosmea', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juni-Oktober', hoogteBereik: '60-120', gemiddeldeHoogte: 90, hoogtecategorie: 'Hoog', hoofdkleur: 'Wit/Roze', kleurvarianten: ['Wit', 'Roze', 'Rood'] },
  { naam: 'Goudsbloem', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juni-Oktober', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Oranje/Geel', kleurvarianten: ['Geel', 'Oranje'] },
  { naam: 'Korenbloem', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Mei-September', hoogteBereik: '40-80', gemiddeldeHoogte: 60, hoogtecategorie: 'Middel', hoofdkleur: 'Blauw', kleurvarianten: ['Blauw', 'Wit', 'Roze'] },
  { naam: 'Klaproos', categorie: 'Eenjarig', plantmoment: 'Februari-Maart', zonSchaduw: 'Zon', bloeitijd: 'Juni-Augustus', hoogteBereik: '40-80', gemiddeldeHoogte: 60, hoogtecategorie: 'Middel', hoofdkleur: 'Rood', kleurvarianten: ['Rood', 'Roze', 'Wit'] },
  { naam: 'Lavatera', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juli-September', hoogteBereik: '60-120', gemiddeldeHoogte: 90, hoogtecategorie: 'Hoog', hoofdkleur: 'Roze/Wit', kleurvarianten: ['Roze', 'Wit', 'Paars'] },
  { naam: 'Oost-Indische Kers', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Halfschaduw', bloeitijd: 'Juni-Oktober', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Oranje/Geel', kleurvarianten: ['Oranje', 'Geel', 'Rood'] },
  { naam: 'Petunia', categorie: 'Eenjarig', plantmoment: 'Februari-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juni-Oktober', hoogteBereik: '20-40', gemiddeldeHoogte: 30, hoogtecategorie: 'Laag', hoofdkleur: 'Paars/Roze', kleurvarianten: ['Paars', 'Roze', 'Wit', 'Rood'] },
  { naam: 'Ridderspoor', categorie: 'Meerjarig', plantmoment: 'Maart-Juli', zonSchaduw: 'Zon', bloeitijd: 'Juli-Augustus', hoogteBereik: '80-150', gemiddeldeHoogte: 115, hoogtecategorie: 'Zeer Hoog', hoofdkleur: 'Blauw/Paars', kleurvarianten: ['Blauw', 'Paars', 'Roze', 'Wit'] },
  { naam: 'Salvia', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juni-September', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Rood/Paars', kleurvarianten: ['Rood', 'Paars', 'Blauw'] },
  { naam: 'Siererwt', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon/Halfschaduw', bloeitijd: 'Juni-September', hoogteBereik: '150-200', gemiddeldeHoogte: 175, hoogtecategorie: 'Zeer Hoog', hoofdkleur: 'Paars/Roze', kleurvarianten: ['Paars', 'Roze', 'Wit'] },
  { naam: 'Slangenkruid', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juli-Oktober', hoogteBereik: '30-80', gemiddeldeHoogte: 55, hoogtecategorie: 'Middel', hoofdkleur: 'Wit/Roze', kleurvarianten: ['Wit', 'Roze'] },
  { naam: 'Vlijtig Liesje', categorie: 'Eenjarig', plantmoment: 'Februari-Mei', zonSchaduw: 'Halfschaduw', bloeitijd: 'Mei-Oktober', hoogteBereik: '20-40', gemiddeldeHoogte: 30, hoogtecategorie: 'Laag', hoofdkleur: 'Roze/Rood', kleurvarianten: ['Roze', 'Rood', 'Wit', 'Paars'] },
  { naam: 'Zinnia', categorie: 'Eenjarig', plantmoment: 'Maart-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juni-September', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Gemengd', kleurvarianten: ['Alle kleuren'] },
  { naam: 'Zonnebloem', categorie: 'Eenjarig', plantmoment: 'Mei-Juli', zonSchaduw: 'Zon', bloeitijd: 'Juni-Augustus', hoogteBereik: '150-300', gemiddeldeHoogte: 225, hoogtecategorie: 'Zeer Hoog', hoofdkleur: 'Geel', kleurvarianten: ['Geel', 'Oranje', 'Rood'] },
  { naam: 'Duizendschoon', categorie: 'Meerjarig', plantmoment: 'Maart-Juli', zonSchaduw: 'Halfschaduw', bloeitijd: 'Mei-Sept (+1j)', hoogteBereik: '30-50', gemiddeldeHoogte: 40, hoogtecategorie: 'Middel', hoofdkleur: 'Wit/Roze', kleurvarianten: ['Wit', 'Roze'] },
  { naam: 'Lupine', categorie: 'Meerjarig', plantmoment: 'Maart-Juli', zonSchaduw: 'Zon', bloeitijd: 'Juli-Augustus', hoogteBereik: '80-120', gemiddeldeHoogte: 100, hoogtecategorie: 'Hoog', hoofdkleur: 'Blauw/Paars', kleurvarianten: ['Blauw', 'Paars', 'Roze', 'Wit'] },
  { naam: 'Stokroos', categorie: 'Meerjarig', plantmoment: 'Mei-Juli', zonSchaduw: 'Zon', bloeitijd: 'Juni-Sept (+1j)', hoogteBereik: '150-200', gemiddeldeHoogte: 175, hoogtecategorie: 'Zeer Hoog', hoofdkleur: 'Gemengd', kleurvarianten: ['Alle kleuren'] },
  { naam: 'Margriet', categorie: 'Meerjarig', plantmoment: 'Mei-Juni', zonSchaduw: 'Zon/Halfschaduw', bloeitijd: 'Juni-Sept (+1j)', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Wit', kleurvarianten: ['Wit', 'Geel'] },
  { naam: 'Akelei', categorie: 'Meerjarig', plantmoment: 'Mei-Juni', zonSchaduw: 'Halfschaduw', bloeitijd: 'Mei-Juni (+1j)', hoogteBereik: '60-100', gemiddeldeHoogte: 80, hoogtecategorie: 'Hoog', hoofdkleur: 'Blauw/Paars', kleurvarianten: ['Blauw', 'Paars', 'Roze', 'Wit'] },
  { naam: 'Vergeet-me-niet', categorie: 'Meerjarig', plantmoment: 'Mei-Augustus', zonSchaduw: 'Halfschaduw', bloeitijd: 'April-Juli (+1j)', hoogteBereik: '15-30', gemiddeldeHoogte: 22, hoogtecategorie: 'Laag', hoofdkleur: 'Blauw', kleurvarianten: ['Blauw', 'Roze'] },
  { naam: 'Vingerhoedskruid', categorie: 'Meerjarig', plantmoment: 'Juni-Augustus', zonSchaduw: 'Halfschaduw', bloeitijd: 'April-Juni (+1j)', hoogteBereik: '100-180', gemiddeldeHoogte: 140, hoogtecategorie: 'Zeer Hoog', hoofdkleur: 'Paars/Roze', kleurvarianten: ['Paars', 'Roze', 'Wit'] },
  { naam: 'Zeepkruid', categorie: 'Meerjarig', plantmoment: 'Mei-Juni', zonSchaduw: 'Zon', bloeitijd: 'Mei-Sept (+1j)', hoogteBereik: '30-60', gemiddeldeHoogte: 45, hoogtecategorie: 'Middel', hoofdkleur: 'Roze/Wit', kleurvarianten: ['Roze', 'Wit'] },
  { naam: 'IJzerhard', categorie: 'Eenjarig', plantmoment: 'Februari-Mei', zonSchaduw: 'Zon', bloeitijd: 'Juli-Oktober', hoogteBereik: '40-80', gemiddeldeHoogte: 60, hoogtecategorie: 'Middel', hoofdkleur: 'Blauw/Paars', kleurvarianten: ['Blauw', 'Paars'] },
  { naam: 'Violen', categorie: 'Meerjarig', plantmoment: 'Februari-Augustus', zonSchaduw: 'Halfschaduw', bloeitijd: 'April-Juni (+1j)', hoogteBereik: '10-20', gemiddeldeHoogte: 15, hoogtecategorie: 'Laag', hoofdkleur: 'Paars/Geel', kleurvarianten: ['Paars', 'Geel', 'Wit', 'Blauw'] },
  { naam: 'Aubrieta', categorie: 'Meerjarig', plantmoment: 'Mei-Juli', zonSchaduw: 'Zon', bloeitijd: 'Mei-Juli (+1j)', hoogteBereik: '10-20', gemiddeldeHoogte: 15, hoogtecategorie: 'Laag', hoofdkleur: 'Blauw/Paars', kleurvarianten: ['Blauw', 'Paars', 'Roze'] },
  { naam: 'Wildemanskruid', categorie: 'Meerjarig', plantmoment: 'Mei-Juli', zonSchaduw: 'Zon', bloeitijd: 'Maart-April (+1j)', hoogteBereik: '15-30', gemiddeldeHoogte: 22, hoogtecategorie: 'Laag', hoofdkleur: 'Geel', kleurvarianten: ['Geel'] },
  { naam: 'Lampionplant', categorie: 'Meerjarig', plantmoment: 'Mei-Augustus', zonSchaduw: 'Zon', bloeitijd: 'Juni-Aug (+1j)', hoogteBereik: '60-120', gemiddeldeHoogte: 90, hoogtecategorie: 'Hoog', hoofdkleur: 'Oranje', kleurvarianten: ['Oranje', 'Rood'] }
];

// Color mapping for visual consistency
const colorMap = {
  'Rood': '#FF6B6B',
  'Roze': '#FF69B4',
  'Roze/Rood': '#FF69B4',
  'Roze/Wit': '#FFB3D9',
  'Oranje': '#FFB347',
  'Oranje/Geel': '#FFB347',
  'Geel': '#FFD93D',
  'Paars': '#B8A9E8',
  'Paars/Roze': '#B8A9E8',
  'Paars/Blauw': '#9B7FE8',
  'Paars/Geel': '#B8A9E8',
  'Blauw': '#4ECDC4',
  'Blauw/Paars': '#6B5FFF',
  'Wit': '#E8E8E8',
  'Wit/Roze': '#F5E6F0',
  'Wit/Blauw': '#E3F2FD',
  'Gemengd': '#A8E6CF',
  'Rood/Paars': '#C44569'
};

// State management
let currentFilter = { category: 'all', height: null, light: null };
let currentSearch = '';

// Initialize app
function init() {
  renderPlants(plantsData);
  setupEventListeners();
  updateHeightVisualization();
  renderColorPalette();
  renderTimeline();
}

// Setup event listeners
function setupEventListeners() {
  // Category filters
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter.category = e.target.dataset.filter;
      applyFilters();
    });
  });

  // Height filters
  document.querySelectorAll('[data-height]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const wasActive = e.target.classList.contains('active');
      document.querySelectorAll('[data-height]').forEach(b => b.classList.remove('active'));
      
      if (!wasActive) {
        e.target.classList.add('active');
        currentFilter.height = e.target.dataset.height;
      } else {
        currentFilter.height = null;
      }
      applyFilters();
    });
  });

  // Light filters
  document.querySelectorAll('[data-light]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const wasActive = e.target.classList.contains('active');
      document.querySelectorAll('[data-light]').forEach(b => b.classList.remove('active'));
      
      if (!wasActive) {
        e.target.classList.add('active');
        currentFilter.light = e.target.dataset.light;
      } else {
        currentFilter.light = null;
      }
      applyFilters();
    });
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    applyFilters();
  });
}

// Apply all active filters
function applyFilters() {
  let filtered = plantsData;

  // Category filter
  if (currentFilter.category !== 'all') {
    filtered = filtered.filter(p => p.categorie === currentFilter.category);
  }

  // Height filter
  if (currentFilter.height) {
    filtered = filtered.filter(p => p.hoogtecategorie === currentFilter.height);
  }

  // Light filter
  if (currentFilter.light) {
    filtered = filtered.filter(p => p.zonSchaduw.includes(currentFilter.light));
  }

  // Search filter
  if (currentSearch) {
    filtered = filtered.filter(p => p.naam.toLowerCase().includes(currentSearch));
  }

  renderPlants(filtered);
  updateResultsCount(filtered.length);
}

// Render plant cards
function renderPlants(plants) {
  const grid = document.getElementById('plantsGrid');
  
  if (plants.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-secondary);">Geen planten gevonden met deze filters.</div>';
    return;
  }

  grid.innerHTML = plants.map(plant => {
    const color = colorMap[plant.hoofdkleur] || '#A8E6CF';
    const heightPercent = (plant.gemiddeldeHoogte / 300) * 100;
    
    return `
      <div class="plant-card" style="--card-color: ${color};" data-plant="${plant.naam}">
        <div class="plant-header">
          <div>
            <h3 class="plant-name">${plant.naam}</h3>
            <span class="category-badge ${plant.categorie.toLowerCase()}">${plant.categorie}</span>
          </div>
        </div>
        
        <div class="plant-info">
          <div class="info-row">
            <span class="info-icon">📏</span>
            <span class="info-label">Hoogte:</span>
            <span class="info-value">${plant.hoogteBereik} cm</span>
          </div>
          <div class="height-bar-container">
            <div class="height-bar-fill" style="width: ${heightPercent}%;"></div>
          </div>
          
          <div class="info-row">
            <span class="info-icon">${plant.zonSchaduw.includes('Halfschaduw') ? '🌤️' : '☀️'}</span>
            <span class="info-label">Licht:</span>
            <span class="info-value">${plant.zonSchaduw}</span>
          </div>
          
          <div class="info-row">
            <span class="info-icon">🎨</span>
            <span class="info-label">Kleur:</span>
            <div class="color-badge">
              <div class="color-indicator" style="background: ${color};"></div>
              <span class="info-value">${plant.hoofdkleur}</span>
            </div>
          </div>
          
          <div class="info-row">
            <span class="info-icon">🌱</span>
            <span class="info-label">Planten:</span>
            <span class="info-value">${plant.plantmoment}</span>
          </div>
          
          <div class="info-row">
            <span class="info-icon">🌸</span>
            <span class="info-label">Bloei:</span>
            <span class="info-value">${plant.bloeitijd}</span>
          </div>
        </div>
        
        <div class="expanded-details">
          <strong>Kleurvarianten:</strong>
          <div class="color-variants">
            ${plant.kleurvarianten.map(v => `<span class="variant-tag">${v}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers for expand
  document.querySelectorAll('.plant-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });
}

// Update results count
function updateResultsCount(count) {
  document.getElementById('resultsCount').textContent = `${count} planten gevonden`;
}

// Update height visualization
function updateHeightVisualization() {
  const counts = {
    'Laag': plantsData.filter(p => p.hoogtecategorie === 'Laag').length,
    'Middel': plantsData.filter(p => p.hoogtecategorie === 'Middel').length,
    'Hoog': plantsData.filter(p => p.hoogtecategorie === 'Hoog').length,
    'Zeer Hoog': plantsData.filter(p => p.hoogtecategorie === 'Zeer Hoog').length
  };

  document.getElementById('countLaag').textContent = counts['Laag'];
  document.getElementById('countMiddel').textContent = counts['Middel'];
  document.getElementById('countHoog').textContent = counts['Hoog'];
  document.getElementById('countZeerHoog').textContent = counts['Zeer Hoog'];
}

// Render color palette
function renderColorPalette() {
  const colorCounts = {};
  
  plantsData.forEach(plant => {
    const mainColor = plant.hoofdkleur;
    colorCounts[mainColor] = (colorCounts[mainColor] || 0) + 1;
  });

  const sortedColors = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const palette = document.getElementById('colorPalette');
  palette.innerHTML = sortedColors.map(([color, count]) => {
    const hexColor = colorMap[color] || '#A8E6CF';
    return `
      <div class="color-swatch">
        <div class="swatch-circle" style="background: ${hexColor};"></div>
        <div class="swatch-name">${color}</div>
        <div class="swatch-count">${count} planten</div>
      </div>
    `;
  }).join('');
}

// Render timeline
function renderTimeline() {
  const monthMapping = {
    'Februari': 'Feb',
    'Maart': 'Mar',
    'April': 'Apr',
    'Mei': 'May',
    'Juni': 'Jun',
    'Juli': 'Jul',
    'Augustus': 'Aug'
  };

  const monthData = {};
  
  plantsData.forEach(plant => {
    const plantPeriod = plant.plantmoment;
    const months = plantPeriod.split('-');
    
    if (months.length === 2) {
      const startMonth = months[0];
      const endMonth = months[1];
      const monthsInRange = getMonthsInRange(startMonth, endMonth);
      
      monthsInRange.forEach(month => {
        if (!monthData[month]) monthData[month] = [];
        monthData[month].push(plant.naam);
      });
    }
  });

  Object.entries(monthMapping).forEach(([fullName, shortName]) => {
    const monthEl = document.getElementById(`month${shortName}`);
    if (monthData[fullName]) {
      monthEl.innerHTML = monthData[fullName]
        .slice(0, 5)
        .map(name => `<div class="month-plant-tag">${name}</div>`)
        .join('');
      
      if (monthData[fullName].length > 5) {
        monthEl.innerHTML += `<div class="month-plant-tag">+${monthData[fullName].length - 5} meer</div>`;
      }
    }
  });
}

// Helper function to get months in range
function getMonthsInRange(start, end) {
  const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
  const startIdx = months.indexOf(start);
  const endIdx = months.indexOf(end);
  
  if (startIdx === -1 || endIdx === -1) return [];
  
  const result = [];
  for (let i = startIdx; i <= endIdx; i++) {
    result.push(months[i]);
  }
  return result;
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}