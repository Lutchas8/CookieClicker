let cookieCount = 0;
document.getElementById('cookieCount').textContent = 'Kakor: ' + cookieCount;
document.getElementById('Cookie').addEventListener('click', function () {
    cookieCount++;
    document.getElementById('cookieCount').textContent = 'Kakor: ' + cookieCount;
});
