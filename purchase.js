

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  
var packager = document.getElementById('package');
var price = document.getElementById('price');

var packageInfo = localStorage.getItem('package');
var priceInfo = localStorage.getItem('price');

packager.innerText = packageInfo;
price.innerText = priceInfo;
});

