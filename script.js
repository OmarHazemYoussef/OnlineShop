document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products');
  const cartCount = document.getElementById('cart-count');
  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('filter');
  const sortSelect = document.getElementById('sort');
  let products = [
    {
      "id": 1,
      "name": "FOGG PERFUME",
      "description": "fogg perfume premium",
      "price": 10,
      "type": "Perfumes",
      "image": "fogperfume.png"
    },
    {
      "id": 2,
      "name": "CHANEL PERFUME",
      "description": "N*5 chanel perfume",
      "price": 20,
      "type": "Perfumes",
      "image": "chanelperfume.png"
    },
    {
      "id": 3,
      "name": "IPHONE 14",
      "description": "iphone 14",
      "price": 5000,
      "type": "Mobiles",
      "image": "iphone1.png"
    },
    {
      "id": 4,
      "name": "IPHONE 15",
      "description": "iphone 15",
      "price": 8000,
      "type": "Mobiles",
      "image": "iphone2.png"
    },
    {
      "id": 5,
      "name": "KOKI CHICKEN",
      "description": "Description of Product 2",
      "price": 3,
      "type": "Food",
      "image": "kokii.png"
    },
    {
      "id": 6,
      "name": "DOHA RICE",
      "description": "Description of Product 2",
      "price": 1,
      "type": "Food",
      "image": "doha.png"
    },
  ];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Display products
  function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => `
      <div class="product" onclick="viewProduct(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>$${product.price}</p>
      </div>
    `).join('');
  }

  // View product details
  window.viewProduct = function(id) {
    const product = products.find(p => p.id === id);
    localStorage.setItem('currentProduct', JSON.stringify(product));
    location.href = 'product.html';
  };

  // Add to cart
  window.addToCart = function(product) {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
  };

  // Save cart to localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Update cart count
  function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Search products
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });

  // Filter products
  filterSelect.addEventListener('change', () => {
    const type = filterSelect.value;
    const filteredProducts = type === 'all' ? products : products.filter(product => product.type === type);
    displayProducts(filteredProducts);
  });

  // Sort products
  sortSelect.addEventListener('change', () => {
    const sortType = sortSelect.value;
    let sortedProducts = [...products];
    if (sortType === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
  });

  // Display initial products and cart count
  displayProducts(products);
  updateCartCount();
});
