function handleCryptoSelection(cryptoType,addr) {
    const urlParams = new URLSearchParams(window.location.search);
    
    const packager = urlParams.get("package");
    const price = urlParams.get("price");
    
    localStorage.setItem("crypto", cryptoType);
    localStorage.setItem("package", packager);
    localStorage.setItem("price", price);
    localStorage.setItem("address", addr);
    
    window.location.href = 'purchase.html';
}

document.getElementById("btc").addEventListener('click', function() {
    handleCryptoSelection('BTC',"3GNtWqSsGe2GUZLCHHx9w3hj2f8hwcbjhA");
});

document.getElementById("usdt").addEventListener('click', function() {
    handleCryptoSelection('USDT',"EQCA1BI4QRZ8qYmskSRDzJmkucGodYRTZCf_b9hckjla6dZl");
});
