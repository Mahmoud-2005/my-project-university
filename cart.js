let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`تمت إضافة ${item} إلى العربة بسعر $${price}`);
}

document.addEventListener('DOMContentLoaded', function() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cartItems');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>لا توجد عناصر في العربة.</p>';
  } else {
    cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `<p>${item.item} - $${item.price}</p>`;
      cartContainer.appendChild(itemElement);
    });
  }
});