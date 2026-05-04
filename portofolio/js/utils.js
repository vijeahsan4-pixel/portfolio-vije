console.log("UTILS NYALA");

window.addEventListener('load', () => {

  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑';

  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '20px';
  scrollBtn.style.right = '20px';
  scrollBtn.style.padding = '10px 15px';
  scrollBtn.style.background = '#dbeafe';
  scrollBtn.style.color = '#000000';
  scrollBtn.style.border = 'none';
  scrollBtn.style.borderRadius = '5px';
  scrollBtn.style.cursor = 'pointer';
  scrollBtn.style.display = 'none';
  scrollBtn.style.zIndex = '1000';

  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});