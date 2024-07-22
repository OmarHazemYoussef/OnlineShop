document.addEventListener('DOMContentLoaded', () => {
  const productDetailsContainer = document.getElementById('product-details');
  let product = JSON.parse(localStorage.getItem('currentProduct'));

  if (!product) {
    productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    return;
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Display product details
  productDetailsContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  // Add to cart
  window.addToCart = function(id) {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    alert('Product added to cart');
  };

  // Save cart to localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});
