const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    projects.forEach(project => {
      const show = category === 'all' || project.dataset.category === category;
      project.classList.toggle('hidden', !show);
    });
  });
});

const dialog = document.querySelector('.lightbox');
const dialogImg = dialog.querySelector('img');
const dialogTitle = dialog.querySelector('p');
document.querySelectorAll('.project-image').forEach(button => {
  button.addEventListener('click', () => {
    dialogImg.src = button.dataset.image;
    dialogImg.alt = button.dataset.title;
    dialogTitle.textContent = button.dataset.title;
    dialog.showModal();
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && dialog.open) dialog.close(); });

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
