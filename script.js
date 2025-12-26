// All page content stored as objects
const pages = {
  home: `
    <header>
      <div class="logo">Malaka Spice</div>
      <nav>
        <a href="#home" onclick="navigate('home')">Home</a>
        <a href="#story" onclick="navigate('story')">Our Story</a>
        <a href="#menu" onclick="navigate('menu')">Menu</a>
        <a href="#experiences" onclick="navigate('experiences')">Experiences</a>
        <a href="#locations" onclick="navigate('locations')">Locations</a>
        <a href="#contact" onclick="navigate('contact')">Contact</a>
      </nav>
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
      <p>Founded in 1997 by Praful & Cheeru, bringing authentic Southeast Asian flavors to Pune.</p>
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
        </div>
        <div class="menu-category">
          <h3>Main Courses</h3>
          <p>Rendang Beef 🌶️</p>
          <p>Pad Thai</p>
        </div>
        <div class="menu-category">
          <h3>Desserts</h3>
          <p>Mango Sticky Rice</p>
          <p>Chocolate Lava Cake</p>
        </div>
      </div>
    </section>
  `,
  experiences: `
    <section class="section">
      <h2>Experiences</h2>
      <p>Curated tasting events, wine nights, and seasonal specials.</p>
    </section>
  `,
  locations: `
    <section class="section dark">
      <h2>Locations</h2>
      <p>Koregaon Park: Lane No.5, Pune</p>
      <p>Kharadi: Global High Street, Pune</p>
    </section>
  `,
  contact: `
    <section class="section">
      <h2>Contact</h2>
      <p>📞 +91 98230 64050</p>
      <p>✉ marketingmanager@malakaspice.com</p>
    </section>
  `
};

// Function to switch "pages"
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = pages[page] + `<footer><p>© 2025 Malaka Spice • Southeast Asian Fine Dining</p></footer>`;
  fadeInSections();
}

// Fade-in animation for each section
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

// Load home page by default
navigate('home');
