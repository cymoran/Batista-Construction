const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeLightbox = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-grid img').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function hideLightbox() {
  lightbox?.classList.remove('open');
  lightbox?.setAttribute('aria-hidden', 'true');
}

closeLightbox?.addEventListener('click', hideLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) hideLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hideLightbox();
});

const projectCheckboxes = document.querySelectorAll('input[name="projectType"]');
const selectedProjectsText = document.querySelector('#selected-projects span');

function getSelectedProjectTypes() {
  return Array.from(projectCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function updateSelectedProjects() {
  if (!selectedProjectsText) return;

  const selected = getSelectedProjectTypes();
  selectedProjectsText.textContent = selected.length
    ? selected.join(', ')
    : 'No project types selected yet.';
}

projectCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateSelectedProjects);
});

updateSelectedProjects();

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const selectedProjectTypes = getSelectedProjectTypes();
  const projectTypeText = selectedProjectTypes.length ? selectedProjectTypes.join(', ') : 'Not selected';
  const message = document.querySelector('#message').value.trim();

  const subject = encodeURIComponent(`Website inquiry: ${projectTypeText}`);
  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nProject Types: ${projectTypeText}\n\nMessage:\n${message}`
  );

  // Replace this email with the real business email before launching.
  window.location.href = `mailto:info@batistaconstruction.com?subject=${subject}&body=${body}`;
});
