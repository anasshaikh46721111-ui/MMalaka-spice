// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('fade-in');
  });
},{threshold:0.1});
sections.forEach(section=>observer.observe(section));
