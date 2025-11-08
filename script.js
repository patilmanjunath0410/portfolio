// Menu toggle for mobile
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');
menuIcon.onclick = () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
};

// Close nav when link is clicked (for mobile UX)
document.querySelectorAll('.nav a').forEach(link => {
  link.onclick = () => {
    nav.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };
});

// Highlight active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.onscroll = () => {
  let current = "home";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple scroll reveal animation
const revealElements = document.querySelectorAll('.exam-card, .certificate-card, .about-content');
function revealOnScroll() {
  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Initial styles for reveal animation
revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.7s cubic-bezier(0.23,1,0.32,1)";
});
