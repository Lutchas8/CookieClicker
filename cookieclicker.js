let totalAutoclick = 0;
let perClick = 1;
let cookieCount = 0;
document.getElementById('cookieCount').textContent = 'Kakor: ' + cookieCount;
document.getElementById('Cookie').addEventListener('click', function () {
    cookieCount += perClick;
    document.getElementById('cookieCount').textContent = 'Kakor: ' + cookieCount;
});

document.getElementById('2XButton').addEventListener('click', function () {
    if (cookieCount > 99) {
        cookieCount =cookieCount-100;
        document.getElementById('cookieCount').textContent = 'Kakor: ' + cookieCount;
        
   }
perClick *= 2;
        document.getElementById('2XButton').textContent = '2X Klick (Aktiverad)';

});
document.getElementById('upgradeButton').addEventListener('click', function(){
 if(cookieCount >= 100){}

});

