console.log("MAIN NYALA 🔥");

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ================= HERO BUTTON =================
const btn = document.querySelector('.btn');
if (btn) {
  btn.addEventListener('click', () => {
    const projectSection = document.querySelector('#projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ================= ACTIVE NAVBAR =================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');


window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ================= ANIMATION =================
const revealElements = document.querySelectorAll('.card, .about-box, .section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
};

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ================= MODAL =================
const modal = document.createElement('div');
modal.classList.add('modal');

modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modal-title"></h2>
    <p id="modal-desc"></p>
    <div id="modal-tech"></div>
  </div>
`;

document.body.appendChild(modal);

const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const closeBtn = document.querySelector('.close');

function openModal(project) {
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;

  modalTech.innerHTML = project.tech
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  modal.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ================= LOAD PROJECT JSON =================
const container = document.getElementById('project-list');

if (container) {
  fetch('project.json')
    .then(res => res.json())
    .then(data => {

      data.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <div class="tags">
            ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        `;

        card.addEventListener('click', () => {
          openModal(project);
        });

        container.appendChild(card);
      });

    })
    .catch(err => console.error('ERROR LOAD JSON:', err));
}

// ================= FORM =================
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim! 🚀');
    form.reset();
  });
}

// ================= LOADING SCREEN =================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";
  loader.style.transition = "0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});