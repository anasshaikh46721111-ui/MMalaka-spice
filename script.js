// ----------------------
// Page Content
// ----------------------
const pages = {
  home: `
    <header>
      <div class="logo">Malaka Spice</div>
      <nav id="nav">
        <a href="#home" onclick="navigate('home')">Home</a>
        <a href="#story" onclick="navigate('story')">Our Story</a>
        <a href="#menu" onclick="navigate('menu')">Menu</a>
        <a href="#experiences" onclick="navigate('experiences')">Experiences</a>
        <a href="#locations" onclick="navigate('locations')">Locations</a>
        <a href="#contact" onclick="navigate('contact')">Contact</a>
      </nav>
      <div class="menu-btn" onclick="toggleMenu()">☰</div>
    </header>
    <section class="hero">
      <h1>Malaka Spice</h1>
      <p>Authentic Southeast Asian Fine Dining</p>
      <button onclick="navigate('menu')">Explore Menu</button>
    </section>
  `,
  story: `
    <section class="section">
      <h2>Our Story</h2>
      <p>Founded in 1997 by Praful & Cheeru, Malaka Spice brings authentic Southeast Asian flavors to Pune. Each dish is carefully crafted with passion and tradition.</p>
    </section>
  `,
  menu: `
    <section class="section dark">
      <h2>Our Menu</h2>
      <div class="menu-grid">
        <div class="menu-category">
          <h3>Starters</h3>
          <p>Spicy Laksa Bites 🌶️</p>
          <p>Thai Coconut Soup 🥥</p>
          <p>Vietnamese Spring Rolls</p>
        </div>
        <div class="menu-category">
          <h3>Main Courses</h3>
          <p>Rendang Beef 🌶️</p>
          <p>Green Curry Chicken</p>
          <p>Pad Thai</p>
        </div>
        <div class="menu-category">
          <h3>Desserts & Drinks</h3>
          <p>Mango Sticky Rice</p>
          <p>Lychee Martini</p>
          <p>Chocolate Lava Cake</p>
        </div>
      </div>
    </section>
  `,
  experiences: `
    <section class="section">
      <h2>Experiences</h2>
      <p>Curated tasting events, seasonal specials, and wine nights to give you a true Southeast Asian culinary journey.</p>
    </section>
  `,
  locations: `
    <section class="section dark">
      <h2>Locations</h2>
      <p>Koregaon Park: Lane No.5, Pune 411001</p>
      <p>Kharadi: Global High Street, Pune 411014</p>
      <p>Open Daily: 11:00 AM – 01:00 AM</p>
    </section>
  `,
  contact: `
    <section class="section">
      <h2>Contact</h2>
      <p>📞 Koregaon Park: +91 98230 64050</p>
      <p>📞 Kharadi: +91 91588 84188</p>
      <p>✉ marketingmanager@malakaspice.com</p>
    </section>
  `
};

// ----------------------
// Navigation Function
// ----------------------
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = pages[page] + `<footer><p>© 2025 Malaka Spice • Southeast Asian Fine Dining</p></footer>`;
  fadeInSections();
  if(window.innerWidth < 768) toggleMenu(false); // auto close mobile menu
}

// ----------------------
// Fade-in Animation
// ----------------------
function fadeInSections() {
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    setTimeout(() => {
      section.style.transition = 'all 1s ease-out';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 50);
  });
}

// ----------------------
// Mobile Menu Toggle
// ----------------------
function toggleMenu(forceClose=false) {
  const nav = document.getElementById('nav');
  if(forceClose) {
    nav.classList.remove('show');
    return;
  }
  nav.classList.toggle('show');
}

// ----------------------
// Initial Load
// ----------------------
navigate('home');
