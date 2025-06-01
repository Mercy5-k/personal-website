const toggleButton = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.setAttribute('data-theme', currentTheme);
toggleButton.textContent = currentTheme === 'light' ? '🌙' : '☀️';

toggleButton.addEventListener('click', () => {
  const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

const heroBox = document.getElementById('hero-box');

heroBox.addEventListener('mouseover', () => {
  heroBox.style.backgroundColor = '#fce7f3';
});

heroBox.addEventListener('mouseout', () => {
  heroBox.style.backgroundColor = 'white';
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleBioBtn");
  const bio = document.getElementById("bio");

  btn.addEventListener("click", () => {
    if (bio.style.display === "none") {
      bio.style.display = "block";
      btn.textContent = "Show Less";
    } else {
      bio.style.display = "none";
      btn.textContent = "Show More";
    }
  });
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

