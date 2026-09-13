const cars = [
  { id: '01', name: 'M3 E30', year: 1986, category: 'sport', tag: 'Icône', power: '195 ch', topSpeed: '235 km/h', weight: '1 200 kg', price: '45K — 180K €', production: '17 970 exemplaires', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85', description: "La M3 originelle. Née pour l'homologation, devenue une religion. Ses ailes gonflées et son quatre-cylindres S14 ont redéfini le plaisir de conduire.", featured: true },
  { id: '02', name: '507 Roadster', year: 1956, category: 'collector', tag: 'Rare', power: '150 ch', topSpeed: '200 km/h', weight: '1 330 kg', price: '1.2M — 2.8M €', production: '252 exemplaires', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85', description: 'Un dessin d’Albrecht von Goertz, un V8 tout en aluminium et une production minuscule : le 507 est le rêve californien de BMW.' },
  { id: '03', name: 'i8 Coupé', year: 2014, category: 'electrique', tag: 'Visionnaire', power: '374 ch', topSpeed: '250 km/h', weight: '1 485 kg', price: '55K — 100K €', production: '20 465 exemplaires', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85', description: 'Une supercar plug-in hybride à structure carbone. Le futur, dessiné comme une sculpture et propulsé par un trois-cylindres et un moteur électrique.' },
  { id: '04', name: 'M5 E39', year: 1998, category: 'sport', tag: 'Référence', power: '400 ch', topSpeed: '250 km/h', weight: '1 795 kg', price: '28K — 75K €', production: '20 482 exemplaires', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85', description: 'Le compromis parfait : un V8 atmosphérique de 4,9 litres dans une berline discrète. La dernière M5 à boîte manuelle en Europe.' },
  { id: '05', name: 'E9 3.0 CSL', year: 1972, category: 'collector', tag: 'Batmobile', power: '206 ch', topSpeed: '220 km/h', weight: '1 270 kg', price: '600K — 1.8M €', production: '1 265 exemplaires', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85', description: 'La voiture de course devenue icône. Aluminium, plexiglas et aérodynamique spectaculaire : le CSL a posé les fondations de BMW Motorsport.' },
  { id: '06', name: 'Z8 Roadster', year: 2000, category: 'luxe', tag: 'Intemporel', power: '400 ch', topSpeed: '250 km/h', weight: '1 585 kg', price: '120K — 260K €', production: '5 703 exemplaires', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=85', description: 'Le passé réinventé. Un long capot, un V8 de M5 et des compteurs centrés : le Z8 est l’un des roadsters les plus désirables de son époque.' },
  { id: '07', name: 'M1 Procar', year: 1979, category: 'collector', tag: 'Compétition', power: '470 ch', topSpeed: '310 km/h', weight: '1 020 kg', price: '700K — 1.5M €', production: '54 exemplaires', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85', description: 'La seule BMW conçue comme une supercar à moteur central. Une silhouette signée Giugiaro et un championnat monotype mythique.' },
  { id: '08', name: 'i5 M60', year: 2023, category: 'electrique', tag: 'Nouveau', power: '601 ch', topSpeed: '230 km/h', weight: '2 305 kg', price: '105K — 145K €', production: 'Série actuelle', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85', description: 'La berline business entre dans une nouvelle ère : deux moteurs électriques, une transmission intégrale et une technologie embarquée totale.' },
  { id: '09', name: '2002 tii', year: 1971, category: 'sport', tag: 'Fondateur', power: '130 ch', topSpeed: '190 km/h', weight: '1 020 kg', price: '35K — 90K €', production: '38 703 exemplaires', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85', description: 'Compacte, légère et vive : la 2002 tii a inventé le concept de la berline sportive compacte qui deviendra la Série 3.' },
  { id: '10', name: 'X5 4.6is', year: 2002, category: 'luxe', tag: 'Pionnier', power: '347 ch', topSpeed: '240 km/h', weight: '2 180 kg', price: '18K — 45K €', production: '12 000 exemplaires', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85', description: 'Le SUV premium qui ne voulait pas choisir entre confort et sport. Le 4.6is a offert au X5 une vraie personnalité de M.' },
  { id: '11', name: 'M4 CSL', year: 2022, category: 'sport', tag: 'Ultime', power: '550 ch', topSpeed: '307 km/h', weight: '1 625 kg', price: '140K — 220K €', production: '1 000 exemplaires', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=85', description: 'Carbone à profusion, deux places et 100 kg de moins : la M4 CSL est un hommage moderne aux trois lettres les plus sacrées.' },
  { id: '12', name: 'i7 xDrive60', year: 2022, category: 'electrique', tag: 'Luxe futur', power: '544 ch', topSpeed: '240 km/h', weight: '2 640 kg', price: '140K — 190K €', production: 'Série actuelle', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=900&q=85', description: 'Une limousine électrique pensée comme un salon roulant : écran panoramique, sièges lounge et silence absolu.' }
];

const eraData = {
  '1930s': { period: '1936 — 1939', title: 'La naissance<br>du plaisir.', text: "La 328 n'est pas seulement une voiture. C'est la première déclaration d'intention de BMW : légèreté, équilibre et victoire. Avec son six-cylindres en ligne et ses 80 chevaux, elle domine les routes et gagne la Mille Miglia.", facts: [['80 ch', 'Puissance'], ['830 kg', 'Poids'], ['464', 'Exemplaires']], image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=85', model: '328' },
  '1970s': { period: '1972 — 1975', title: "L'audace<br>aérodynamique.", text: 'Avec la 3.0 CSL, BMW transforme la compétition en laboratoire. La carrosserie allégée et les appendices spectaculaires donnent naissance à la légendaire Batmobile.', facts: [['206 ch', 'Puissance'], ['1 270 kg', 'Poids'], ['1 265', 'Exemplaires']], image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85', model: '3.0 CSL' },
  '1980s': { period: '1986 — 1991', title: 'La légende<br>homologuée.', text: "Pour courir en Groupe A, BMW doit construire une voiture de route. La M3 E30 devient alors bien plus qu'une obligation administrative : elle devient l'étalon de toute une génération.", facts: [['195 ch', 'Puissance'], ['1 200 kg', 'Poids'], ['17 970', 'Exemplaires']], image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85', model: 'M3 E30' },
  '1990s': { period: '1999 — 2003', title: "L'élégance<br>sans compromis.", text: "Le Z8 assume son héritage sans nostalgie. Son châssis moderne accueille le V8 de la M5 E39 dans un écrin de roadster dessiné pour traverser les décennies.", facts: [['400 ch', 'Puissance'], ['1 585 kg', 'Poids'], ['5 703', 'Exemplaires']], image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85', model: 'Z8' },
  '2000s': { period: '2004 — 2011', title: 'La compacte<br>qui mord.', text: "La 1M Coupé arrive presque par surprise. Courte, large et turbo, elle rassemble la recette BMW dans son format le plus joueur.", facts: [['340 ch', 'Puissance'], ['1 495 kg', 'Poids'], ['6 309', 'Exemplaires']], image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85', model: '1M Coupé' },
  '2020s': { period: '2022 — aujourd’hui', title: 'Le plaisir<br>se réinvente.', text: "L'électrification ne gomme pas le caractère. Avec l'i7 et les nouvelles M, BMW cherche un nouvel équilibre entre puissance instantanée, confort et responsabilité.", facts: [['544 ch', 'Puissance'], ['2 640 kg', 'Poids'], ['Série', 'Production']], image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=85', model: 'i7' }
};

const state = { category: 'all', query: '', visible: 12, sort: 'popular' };
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function renderCars() {
  const grid = $('#carGrid');
  const query = state.query.trim().toLowerCase();
  let filtered = cars.filter(car => {
    const matchesCategory = state.category === 'all' || car.category === state.category;
    const matchesQuery = !query || [car.name, car.year, car.tag, car.category, car.description].join(' ').toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
  if (state.sort === 'year') filtered.sort((a, b) => b.year - a.year);
  if (state.sort === 'power') filtered.sort((a, b) => parseInt(b.power) - parseInt(a.power));
  const shown = filtered.slice(0, state.visible);
  $('#resultCount').textContent = filtered.length;
  $('#loadMore').style.display = filtered.length > shown.length ? 'inline-flex' : 'none';
  grid.innerHTML = shown.length ? shown.map((car, index) => `
    <article class="car-card" data-car-id="${car.id}" style="animation-delay:${Math.min(index * .04, .4)}s">
      <div class="car-card-image"><img src="${car.image}" alt="BMW ${car.name}" loading="lazy"><span class="card-badge">${car.tag}</span><span class="card-number">${car.id} / 96</span></div>
      <div class="car-card-content"><h3>${car.name}</h3><p>${car.year} · ${categoryLabel(car.category)}</p><div class="card-bottom"><span>${car.power}</span><strong>→ Détails</strong></div></div>
    </article>`).join('') : `<div class="empty-state">Aucune BMW ne correspond à cette recherche.</div>`;
  $$('.car-card', grid).forEach(card => card.addEventListener('click', () => openModal(cars.find(car => car.id === card.dataset.carId))));
}

function categoryLabel(category) { return ({ sport: 'Sport', luxe: 'Luxe', electrique: 'Électrique', collector: 'Collector' })[category] || category; }
function openModal(car) {
  if (!car) return;
  $('#modalImage').src = car.image; $('#modalImage').alt = `BMW ${car.name}`; $('#modalBadge').textContent = car.tag;
  $('#modalEyebrow').textContent = `${car.year} · ${categoryLabel(car.category)}`; $('#modalTitle').textContent = car.name; $('#modalDescription').textContent = car.description; $('#modalPrice').textContent = car.price;
  $('#modalSpecs').innerHTML = [['Puissance', car.power], ['Vitesse max', car.topSpeed], ['Production', car.production]].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join('');
  $('#carModal').classList.add('open'); $('#carModal').setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); $('#modalClose').focus();
}
function closeModal() { $('#carModal').classList.remove('open'); $('#carModal').setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600); }
function updateEra(era) {
  const data = eraData[era]; if (!data) return;
  const detail = $('#eraDetail'); detail.animate([{ opacity: .35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, easing: 'ease-out' });
  $('.era-image img', detail).src = data.image; $('.era-image img', detail).alt = `BMW ${data.model}`; $('.era-copy .eyebrow', detail).textContent = data.period; $('.era-copy h3', detail).innerHTML = data.title; $('.era-copy > p:not(.eyebrow)', detail).textContent = data.text; $('.era-facts', detail).innerHTML = data.facts.map(([value, label]) => `<span><b>${value}</b>${label}</span>`).join(''); $('.era-copy .text-link', detail).innerHTML = `Découvrir la ${data.model} <span>→</span>`;
}

$$('.filter-pill').forEach(button => button.addEventListener('click', () => { $$('.filter-pill').forEach(item => item.classList.remove('active')); button.classList.add('active'); state.category = button.dataset.category; state.visible = 12; renderCars(); }));
$('#searchInput').addEventListener('input', event => { state.query = event.target.value; state.visible = 12; renderCars(); });
$('#loadMore').addEventListener('click', () => { state.visible += 4; renderCars(); showToast('La suite du garage est chargée.'); });
$('#sortSelect').addEventListener('click', () => { state.sort = state.sort === 'popular' ? 'year' : state.sort === 'year' ? 'power' : 'popular'; const labels = { popular: 'Popularité', year: 'Plus récent', power: 'Puissance' }; $('#sortSelect').innerHTML = `Trier : <strong>${labels[state.sort]}</strong> <span>⌄</span>`; renderCars(); });
$$('.timeline-node').forEach(node => node.addEventListener('click', () => { $$('.timeline-node').forEach(item => item.classList.remove('active')); node.classList.add('active'); updateEra(node.dataset.era); const progress = [...$$('.timeline-node')].indexOf(node) / 5 * 100; $('.timeline-progress').style.background = `linear-gradient(90deg, var(--blue) 0 ${progress}%, #42464c ${progress}% 100%)`; }));
$('#modalClose').addEventListener('click', closeModal); $('#carModal').addEventListener('click', event => { if (event.target === $('#carModal')) closeModal(); });
function randomDiscovery() { const car = cars[Math.floor(Math.random() * cars.length)]; openModal(car); showToast(`Découverte : ${car.name}`); }
$('#randomCar').addEventListener('click', randomDiscovery); $('#modalRandom').addEventListener('click', randomDiscovery);
$('#compareButton').addEventListener('click', () => showToast('Comparateur détaillé bientôt disponible — gardez l’œil sur le garage.'));
$('#themeToggle').addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem('bmw-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); showToast(document.body.classList.contains('dark') ? 'Mode nuit activé.' : 'Mode clair activé.'); });
if (localStorage.getItem('bmw-theme') === 'dark') document.body.classList.add('dark');
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#searchInput').focus(); } if (event.key === 'Escape') closeModal(); });

renderCars();
