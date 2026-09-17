// ===== PROPERTY DATA (India) =====
const properties = [
  { id:1, title:"The Grand Business Tower", city:"Chennai", locality:"Tamil Nadu", type:"office", purpose:"sale", price:1250, priceLabel:"₹12.5 Cr", sqft:25000, baths:8, parking:60, badge:"Premium", emoji:"🏢", image:"images/The Grand Business Tower.webp", description:"Landmark commercial tower in Chennai with panoramic bay views, modern infrastructure, and proximity to major transit hubs.", features:["Smart Building","24/7 Security","Conference Center","Rooftop Terrace"] },
  { id:2, title:"Metro Business Center", city:"Bengaluru", locality:"Karnataka", type:"office", purpose:"sale", price:820, priceLabel:"₹8.2 Cr", sqft:18500, baths:6, parking:45, badge:"Hot Deal", emoji:"💼", image:"images/Metro Business Center.webp", description:"Grade-A office center in Bengaluru's core business district with flexible layouts and excellent connectivity.", features:["Open Plan","Fiber Internet","Meeting Rooms","Cafeteria"] },
  { id:3, title:"Urban Retail Plaza", city:"Hyderabad", locality:"Telangana", type:"retail", purpose:"lease", price:5.8, priceLabel:"₹5.8 L / Month", sqft:12000, baths:4, parking:30, badge:"Lease", emoji:"🛍️", image:"images/Urban Retail Plaza.webp", description:"High-visibility retail plaza in Hyderabad with strong footfall, wide storefronts, and premium signage exposure.", features:["High Footfall","Wide Storefronts","Signage Rights","Escalators"] },
  { id:4, title:"Skyline Corporate Park", city:"Mumbai", locality:"Maharashtra", type:"office", purpose:"sale", price:2400, priceLabel:"₹24 Cr", sqft:42000, baths:12, parking:100, badge:"Signature", emoji:"🏙️", image:"images/Skyline Corporate Park.webp", description:"Multi-floor corporate park in Mumbai with sea-link views, grand lobby, and world-class business amenities.", features:["Sea-link Views","Grand Lobby","Multi-Floor","Business Lounge"] },
  { id:5, title:"Harbor Logistics Warehouse", city:"Chennai", locality:"Tamil Nadu", type:"warehouse", purpose:"sale", price:900, priceLabel:"₹9 Cr", sqft:60000, baths:4, parking:80, badge:"Port Access", emoji:"📦", image:"images/Harbor Logistics Warehouse.webp", description:"Large warehouse near Chennai port with dock-high doors, staging yard, and direct freight connectivity.", features:["Dock-High Doors","Staging Yard","High Ceilings","CCTV Coverage"] },
  { id:6, title:"Tech Valley Office Hub", city:"Pune", locality:"Maharashtra", type:"office", purpose:"lease", price:7.2, priceLabel:"₹7.2 L / Month", sqft:15000, baths:5, parking:35, badge:"Tech Park", emoji:"🖥️", image:"images/Tech Valley Office Hub.webp", description:"IT-ready office hub in Pune's tech corridor with dedicated server rooms and gigabit fiber backbone.", features:["Server Rooms","Gigabit Fiber","Open Floor","Cafeteria"] },
  { id:7, title:"Central Retail Galleria", city:"Delhi", locality:"Delhi NCR", type:"retail", purpose:"rent", price:4.2, priceLabel:"₹4.2 L / Month", sqft:8000, baths:3, parking:20, badge:"Rent", emoji:"🏬", image:"images/Central Retail Galleria.webp", description:"Central Delhi retail galleria in a prime commercial arcade with constant footfall and metro access.", features:["Metro Access","Prime Arcade","Display Windows","HVAC Included"] },
  { id:8, title:"Industrial Estate Unit", city:"Coimbatore", locality:"Tamil Nadu", type:"industrial", purpose:"sale", price:650, priceLabel:"₹6.5 Cr", sqft:30000, baths:3, parking:40, badge:"Turnkey", emoji:"🏭", image:"images/Industrial Estate Unit.webp", description:"Production-ready industrial unit with heavy power supply, high ceilings, and multiple loading bays.", features:["Heavy Power","High Ceilings","Loading Bays","Machine Shop"] },
  { id:9, title:"Marina Retail Promenade", city:"Kochi", locality:"Kerala", type:"retail", purpose:"lease", price:2.8, priceLabel:"₹2.8 L / Month", sqft:6500, baths:3, parking:18, badge:"Promenade", emoji:"🌊", image:"images/Marina Retail Promenade.webp", description:"Waterfront retail promenade in Kochi with coastal views, outdoor terraces, and tourism-driven footfall.", features:["Waterfront Views","Outdoor Terraces","Tourist Footfall","Night Lighting"] },
  { id:10, title:"Business Bay Towers", city:"Bengaluru", locality:"Karnataka", type:"office", purpose:"sale", price:2800, priceLabel:"₹28 Cr", sqft:55000, baths:15, parking:130, badge:"Flagship", emoji:"🏛️", image:"images/Business Bay Towers.webp", description:"Flagship office towers in Bengaluru's business bay with corporate-grade specifications and green certification.", features:["Green Certified","Corporate Grade","Sky Lobby","2.4M Carpet"] },
  { id:11, title:"Automation Park Warehouse", city:"Hyderabad", locality:"Telangana", type:"warehouse", purpose:"sale", price:560, priceLabel:"₹5.6 Cr", sqft:40000, baths:3, parking:60, badge:"Automated", emoji:"🏗️", image:"images/Automation Park Warehouse.webp", description:"Automation-ready warehouse near Hyderabad's pharma corridor with robotic-ready racking and clean rooms.", features:["Robotic Racking","Clean Rooms","Drive-In Doors","LED Lighting"] },
  { id:12, title:"Riverside Business Centre", city:"Pune", locality:"Maharashtra", type:"office", purpose:"lease", price:3.5, priceLabel:"₹3.5 L / Month", sqft:9500, baths:4, parking:25, badge:"Riverside", emoji:"🌆", image:"images/Riverside Business Centre.webp", description:"Riverside office centre in Pune with scenic views, landscaped environs, and executive amenities.", features:["Riverside Views","Landscaped Campus","Executive Suites","Valet Parking"] }
];

// ===== CATEGORIES =====
const categories = [
  { type:"office",      name:"Office Spaces",     desc:"Modern offices for startups, companies, and enterprises.", image:"images/office-spaces.webp" },
  { type:"retail",      name:"Retail Spaces",     desc:"High-visibility locations for shops, brands, and businesses.", image:"images/retail-spaces.webp" },
  { type:"warehouse",   name:"Warehouses",        desc:"Efficient storage and distribution spaces.", image:"images/warehouses.webp" },
  { type:"industrial",  name:"Industrial Properties", desc:"Strategic properties for manufacturing and industrial operations.", image:"images/industrial-properties.webp" },
  { type:"business-park", name:"Business Parks",  desc:"Professional environments designed for growing companies.", image:"images/business-parks.webp" },
  { type:"land",        name:"Land & Development", desc:"Commercial land for future development and investment.", image:"images/land&development.webp" }
];

// ===== WHY FEATURES =====
const whyFeatures = [
  { icon:"✅", title:"Verified Properties", desc:"Explore reliable and carefully selected commercial listings." },
  { icon:"📍", title:"Prime Locations",     desc:"Discover properties in strategic business locations." },
  { icon:"🎯", title:"Expert Guidance",     desc:"Connect with experienced commercial real-estate professionals." },
  { icon:"📈", title:"Smart Investment",    desc:"Make better property decisions with detailed information." }
];

// ===== LOCATIONS =====
const locations = ["Chennai","Bengaluru","Hyderabad","Mumbai","Pune","Delhi","Coimbatore","Kochi"];

// ===== HOW STEPS =====
const steps = [
  { num:"01", title:"Search", desc:"Search commercial properties based on location, type, budget, and purpose." },
  { num:"02", title:"Explore", desc:"View property details, images, amenities, location, and 3D experiences." },
  { num:"03", title:"Connect", desc:"Connect directly with the property agent or Stackly consultant." },
  { num:"04", title:"Make Your Move", desc:"Choose the right property for your business or investment." }
];

// ===== TESTIMONIALS =====
const testimonials = [
  { initials:"AK", name:"Arun Kumar", role:"Business Owner", text:"Stackly made it easy to find a professional office space in the right business location. The property information was clear and useful." },
  { initials:"PS", name:"Priya S.", role:"Investor", text:"The 3D property experience gave us a much better understanding of the building before scheduling a visit." },
  { initials:"RM", name:"Rahul Mehta", role:"Entrepreneur", text:"A clean and professional platform for discovering commercial properties." }
];

// ===== INSIGHTS =====
const insights = [
  { image:"images/Skyline Corporate Park.webp", tag:"Locations", title:"Top Business Locations for Commercial Investment", desc:"Discover what makes a location attractive for business and investment." },
  { image:"images/office-spaces.webp", tag:"Guide", title:"How to Choose the Right Office Space", desc:"Important factors businesses should consider before selecting an office." },
  { image:"images/business-parks.webp", tag:"Investment", title:"Commercial Property Investment Guide", desc:"Understand the basics of evaluating commercial real-estate opportunities." }
];

// ===== PURPOSE LABELS =====
const purposeLabel = { sale:"For Sale", lease:"For Lease", rent:"For Rent" };
const typeLabel = { office:"Office", retail:"Retail", warehouse:"Warehouse", industrial:"Industrial", "business-park":"Business Park", land:"Land" };

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const listingsGrid = document.getElementById('listingsGrid');
const noResults = document.getElementById('noResults');
const searchLocation = document.getElementById('searchLocation');
const searchType = document.getElementById('searchType');
const searchPurpose = document.getElementById('searchPurpose');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const searchBtn = document.getElementById('searchBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const notifBtn = document.getElementById('notifBtn');
const notifDropdown = document.getElementById('notifDropdown');

// ===== NAVBAR =====
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.pageYOffset > 50);
  if (notifDropdown) notifDropdown.classList.remove('open');
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const pos = window.pageYOffset + 200;
  sections.forEach(s => {
    const id = s.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight);
  });
});

// ===== NOTIFICATION BELL =====
if (notifBtn && notifDropdown) {
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('open');
    const dot = document.getElementById('notifDot');
    if (dot) dot.style.display = 'none';
  });
  document.addEventListener('click', (e) => {
    const w = document.getElementById('notifWrap');
    if (w && !w.contains(e.target)) notifDropdown.classList.remove('open');
  });
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map((c, i) => `
    <div class="category-card fade-in" data-type="${c.type}" style="animation-delay:${i * 0.08}s">
      <div class="category-img"><img src="${c.image}" alt="${c.name}" loading="lazy"></div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="category-link">Explore →</span>
    </div>`).join('');
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const t = card.dataset.type;
      if (['office','retail','warehouse','industrial'].includes(t)) {
        searchType.value = t;
        renderProperties(getFilteredProperties());
        document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
      } else {
        searchType.value = 'all';
        renderProperties(properties);
        document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
        showToast(card.textContent.includes('Business') ? 'Browse business park options in all locations.' : 'Land & development enquiries — contact an expert.');
      }
    });
  });
}

// ===== RENDER WHY =====
function renderWhy() {
  document.getElementById('whyGrid').innerHTML = whyFeatures.map((f, i) => `
    <div class="why-card fade-in" style="animation-delay:${i * 0.1}s">
      <div class="why-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`).join('');
}

// ===== RENDER LOCATIONS =====
function renderLocations() {
  document.getElementById('locationsGrid').innerHTML = locations.map((city, i) => {
    const count = properties.filter(p => p.city === city).length;
    const image = properties.find(p => p.city === city);
    return `
      <div class="location-card fade-in" data-city="${city}" style="animation-delay:${i * 0.06}s">
        <div class="location-img" style="background-image:url('${image ? image.image : ''}')"></div>
        <div class="location-body">
          <h3>${city}</h3>
          <span>${count} Properties</span>
        </div>
      </div>`;
  }).join('');
  document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', () => {
      searchLocation.value = card.dataset.city;
      renderProperties(getFilteredProperties());
      document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ===== RENDER STEPS =====
function renderSteps() {
  document.getElementById('howGrid').innerHTML = steps.map((s, i) => `
    <div class="how-card fade-in" style="animation-delay:${i * 0.1}s">
      <span class="how-num">${s.num}</span>
      <span class="how-connector"></span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  document.getElementById('testimonialTrack').innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p>"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.initials}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join('');
}

// ===== RENDER INSIGHTS =====
function renderInsights() {
  document.getElementById('insightsGrid').innerHTML = insights.map((b, i) => `
    <div class="insight-card fade-in" style="animation-delay:${i * 0.1}s">
      <div class="insight-img"><img src="${b.image}" alt="${b.title}" loading="lazy"><span class="insight-tag">${b.tag}</span></div>
      <div class="insight-body">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <a href="404.html" class="insight-link">Read More →</a>
      </div>
    </div>`).join('');
}

// ===== RENDER PROPERTY CARDS =====
function renderProperties(filtered) {
  listingsGrid.innerHTML = '';
  if (!filtered.length) { noResults.style.display = 'block'; return; }
  noResults.style.display = 'none';
  filtered.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'property-card fade-in';
    card.style.animationDelay = `${index * 0.07}s`;
    card.innerHTML = `
      <div class="property-image">
        <img class="property-img" src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="property-tag">${typeLabel[p.type] || p.type}</span>
        <span class="property-purpose ${p.purpose}">${purposeLabel[p.purpose]}</span>
      </div>
      <div class="property-body">
        <h3 class="property-title">${p.title}</h3>
        <p class="property-location">📍 ${p.city}, ${p.locality}</p>
        <div class="property-features">
          <span class="property-feature">◫ ${p.sqft.toLocaleString()} Sq Ft</span>
          <span class="property-feature">🚻 ${p.baths} Baths</span>
          <span class="property-feature">🅿️ ${p.parking} Parking</span>
        </div>
        <div class="property-bottom">
          <div class="property-price">${p.priceLabel}</div>
          <span class="property-view">View Property →</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(p));
    listingsGrid.appendChild(card);
  });
  requestAnimationFrame(() => {
    listingsGrid.querySelectorAll('.property-card.fade-in').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 70));
  });
}

// ===== FILTER LOGIC =====
function getFilteredProperties() {
  const location = searchLocation.value;
  const type = searchType.value;
  const purpose = searchPurpose.value;
  const min = parseFloat(priceMin.value);
  const max = parseFloat(priceMax.value);

  return properties.filter(p => {
    if (location !== 'all' && p.city !== location) return false;
    if (type !== 'all' && p.type !== type) return false;
    if (purpose !== 'all' && p.purpose !== purpose) return false;
    if (!isNaN(min) && p.price < min) return false;
    if (!isNaN(max) && p.price > max) return false;
    return true;
  });
}

function applyFilters() { renderProperties(getFilteredProperties()); }
if (searchBtn) {
  searchBtn.addEventListener('click', applyFilters);
  searchLocation.addEventListener('change', applyFilters);
  searchType.addEventListener('change', applyFilters);
  searchPurpose.addEventListener('change', applyFilters);
  [priceMin, priceMax].forEach(el => el.addEventListener('input', applyFilters));
}

if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    searchLocation.value = 'all';
    searchType.value = 'all';
    searchPurpose.value = 'all';
    priceMin.value = '';
    priceMax.value = '';
    renderProperties(properties);
  });
}

// ===== MODAL =====
function openModal(property) {
  const mi = document.getElementById('modalImage');
  mi.style.background = 'rgba(15,98,254,.15)';
  mi.innerHTML = `<img class="modal-img" src="${property.image}" alt="${property.title}">`;
  document.getElementById('modalTag').textContent = `${typeLabel[property.type] || property.type} • ${purposeLabel[property.purpose]}`;
  document.getElementById('modalTitle').textContent = property.title;
  document.getElementById('modalLocation').textContent = `📍 ${property.city}, ${property.locality}`;
  document.getElementById('modalDetails').innerHTML = `
    <span class="detail-item"><strong>${property.sqft.toLocaleString()}</strong> Sq Ft</span>
    <span class="detail-item"><strong>${property.baths}</strong> Bathrooms</span>
    <span class="detail-item"><strong>${property.parking}</strong> Parking</span>`;
  document.getElementById('modalDescription').textContent = property.description;
  document.getElementById('modalFeatures').innerHTML = property.features.slice(0, 4).map(f => `<span class="feature-chip">${f}</span>`).join('');
  document.getElementById('modalPrice').textContent = property.priceLabel;
  const inquire = document.getElementById('modalInquiry');
  inquire.onclick = () => {
    const session = getSession();
    if (!session) {
      showToast('Please sign in to contact an agent.');
      setTimeout(() => { window.location.href = 'login.html'; }, 1200);
    } else {
      showToast(`Enquiry sent for ${property.title}. Our agent will contact you.`);
    }
  };
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== SHOWCASE CUBE =====
(function initShowcaseCube() {
  const cube = document.getElementById('showcaseCube');
  if (!cube) return;
  let rotY = 0;
  function loop() {
    rotY += 0.5;
    cube.style.transform = `rotateX(-8deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

// ===== COUNTERS =====
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const p = Math.min((now - start) / duration, 1);
      counter.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ===== FADE-IN OBSERVER =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });

function setupFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

// ===== CONTACT FORM =====
if (contactForm) {
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const subjectInput = document.getElementById('formSubject');
  const msgInput = document.getElementById('formMessage');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const isEmailValid = (em) => /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z]/.test(em);
  const updateSubmitState = () => {
    const nameOk = !!nameInput && /^[A-Za-z]+$/.test(nameInput.value);
    const emailOk = !!emailInput && isEmailValid(emailInput.value);
    const msgOk = !!msgInput && msgInput.value.trim().length > 0;
    submitBtn.disabled = !(nameOk && emailOk && msgOk);
  };
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.replace(/[^A-Za-z]/g, '').slice(0, 16);
      updateSubmitState();
    });
  }
  if (emailInput) emailInput.addEventListener('input', updateSubmitState);
  if (msgInput) msgInput.addEventListener('input', updateSubmitState);
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput ? nameInput.value : '';
    const email = emailInput ? emailInput.value : '';
    const msg = msgInput ? msgInput.value : '';
    if (!isEmailValid(email)) {
      showToast('Invalid email! Use a valid ID like sun@gmail.com or sun123@yahoo.com (domain must start with a letter).');
      return;
    }
    if (name && email && msg) {
      showToast('Message sent successfully! We\'ll get back to you soon.');
      contactForm.reset();
      updateSubmitState();
    }
  });
}

// ===== NEWSLETTER =====
const newsletterBtn = document.getElementById('newsletterBtn');
if (newsletterBtn) {
  newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    if (input.value && input.value.includes('@')) {
      showToast('Subscribed successfully! Welcome aboard.');
      input.value = '';
    } else {
      showToast('Please enter a valid email address.');
    }
  });
}

// ===== INSIGHTS BUTTON =====
const insightsBtn = document.getElementById('insightsBtn');
if (insightsBtn) insightsBtn.addEventListener('click', () => showToast('Browse more insights coming soon.'));

// ===== FOOTER NEWSLETTER =====
function subscribeFooter() {
  const input = document.getElementById('footerNLInput');
  if (!input) return;
  const email = (input.value || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.'); return; }
  input.value = '';
  showToast('Subscribed! You will hear from us soon.');
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:linear-gradient(135deg,#0f62fe,#00d4aa);color:#fff;padding:16px 28px;border-radius:10px;font-size:.95rem;font-weight:600;z-index:3000;box-shadow:0 8px 32px rgba(15,98,254,.4);animation:slideIn .3s ease;max-width:360px;';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== SESSION =====
function getSession() {
  try { return JSON.parse(localStorage.getItem('st_session') || 'null'); } catch (e) { return null; }
}

function initSession() {
  const session = getSession();
  if (!session) return;
  const listBtn = document.querySelector('.btn-list');
  if (listBtn) {
    listBtn.textContent = 'List Property';
    listBtn.href = '#contact';
  }
}

// ===== INIT =====
function renderAll() {
  if (document.getElementById('categoriesGrid')) renderCategories();
  if (document.getElementById('whyGrid')) renderWhy();
  if (document.getElementById('locationsGrid')) renderLocations();
  if (document.getElementById('howGrid')) renderSteps();
  if (document.getElementById('testimonialTrack')) renderTestimonials();
  if (document.getElementById('insightsGrid')) renderInsights();
  if (document.getElementById('listingsGrid')) renderProperties(properties);
  setupFadeIn();
  initSession();
  setTimeout(animateCounters, 800);
}
document.addEventListener('DOMContentLoaded', renderAll);

const style = document.createElement('style');
style.textContent = `@keyframes slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(style);