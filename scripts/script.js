const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentItem = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      item.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentItem = i;
    showItem(currentItem);
  });
});

// Optional auto-slide feature (every 5 seconds)
setInterval(() => {
  currentItem = (currentItem + 1) % items.length;
  showItem(currentItem);
}, 5000);
