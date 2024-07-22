
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Store</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <div class="logo">
      <img src="logo.png" alt="Logo"> <!-- Replace with your logo -->
      <span>MY STORE</span>
    </div>
    <div class="search-container">
      <input type="text" id="search" placeholder="Search by name">
      <button class="search-button">🔍</button>
    </div>
    <div class="filters">
      <select id="filter">
        <option value="all">All</option>
        <option value="Perfumes">Perfumes</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Food">Food</option>
      </select>
      <select id="sort">
        <option value="default">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      <button class="cart-button" id="cart-button" onclick="location.href='cart.html'">
        Cart (<span id="cart-count">0</span>)
      </button>
    </div>
  </header>
  <div id="app">
    <div id="products" class="product-grid"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
