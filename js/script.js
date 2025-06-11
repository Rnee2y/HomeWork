const container = document.querySelector('.featured-slideshow');
container.addEventListener('wheel', (e) => {
  e.preventDefault();
  container.scrollBy({
    left: e.deltaY,
    behavior: 'smooth',
  });
});

// Modal Functions
function openModal(title, price, mainImage, oldPrice = null) {
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalMainImage = document.getElementById('modalMainImage');

  modalTitle.textContent = title;

  if (oldPrice) {
    modalPrice.innerHTML = `<span style="text-decoration: line-through; color: #999; margin-right: 0.5rem;">Rp ${formatPrice(oldPrice)}</span> Rp ${formatPrice(price)}`;
  } else {
    modalPrice.textContent = `Rp ${formatPrice(price)}`;
  }

  modalMainImage.src = mainImage;

  // Set thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[0].src = mainImage;
  thumbnails[1].src = 'img/popup/popup (1).jfif';
  thumbnails[2].src = 'img/popup/popup (2).jfif';

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function changeThumbnail(thumbnail) {
  const mainImage = document.getElementById('modalMainImage');
  mainImage.src = thumbnail.src;

  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach((t) => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Close modal
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) {
    closeModal();
  }
});
