function handleCryptoSelection(cryptoType) {
    const urlParams = new URLSearchParams(window.location.search);
    
    const packager = urlParams.get("package");
    const price = urlParams.get("price");
    
    localStorage.setItem("crypto", cryptoType);
    localStorage.setItem("package", packager);
    localStorage.setItem("price", price);
    
    window.location.href = 'purchase.html';
}

document.getElementById("btc").addEventListener('click', function() {
    handleCryptoSelection('BTC');
});

document.getElementById("usdt").addEventListener('click', function() {
    handleCryptoSelection('USDT');
});
