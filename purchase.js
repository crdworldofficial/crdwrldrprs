

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  
var packager = document.getElementById('package');
var price = document.getElementById('price');
var addr = document.getElementById('address');

var packageInfo = localStorage.getItem('package');
var priceInfo = localStorage.getItem('price');
var addrInfo = localStorage.getItem("address");

packager.innerText = packageInfo;
price.innerText = priceInfo;
addr.innerText = addrInfo;
});

