function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

const toggler = document.querySelector('#checkbox');
toggler.addEventListener('change', switchTheme, false);



/*Pop-up*/
var share = document.getElementById('share');
var overlay = document.getElementById('overlay');
share.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
};

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
overlay.style.display='none';
};