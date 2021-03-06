function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

const toggler = document.querySelector('#checkbox');
toggler.addEventListener('change', switchTheme, false);


/* Recherche filtrante */

function runScript(e) {
  const myIndex1 = ['resident', 'evil', 'resident evil 3 remake', 'resident evil remake', 'évil', 'résident', 'res', 'resi', 'resid', 'reside', 'residen']
  const myIndex2 = ['cyberpunk', 'cyber punk', 'cyber', 'punk', 'cyb', 'cybe', 'cyberp', 'cyberpu', 'cyberpun']
  const myIndex3 = ['final fantasy 7 remake', 'final fantasy', 'final fantasy 7', 'final fantasy remake', 'final', 'fantasy', 'fin', 'fina']
  const art1 = document.getElementById('search1')
  const art2 = document.getElementById('search2')
  const art3 = document.getElementById('search3')
    if (e.keyCode == 13) {
        var tb = document.getElementById("recherche");
        let mySearch = tb.value.toLowerCase()
        if (myIndex1.includes(mySearch)){
            art2.style.display = 'none'
            art3.style.display = 'none'
            art1.style.display = 'flex'
        } else if (myIndex2.includes(mySearch)){
            art1.style.display = 'none'
            art3.style.display = 'none'
            art2.style.display = 'flex'
        } else if (myIndex3.includes(mySearch)){
            art1.style.display = 'none'
            art2.style.display = 'none'
            art3.style.display = 'flex'
        } else {
            art1.style.display = 'flex'
            art2.style.display = 'flex'
            art3.style.display = 'flex'
        }
        return false;
    }
}
// Menu burger

const btnNav = document.getElementsByClassName('menu-btn')[0];
const dropdown = document.getElementsByClassName('dropdown')[0];
btnNav.addEventListener('click', () => {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
})
window.addEventListener('click', event => {
    if (!dropdown.contains(event.target) && (!btnNav.contains(event.target))) {
        dropdown.style.display = 'none';
    }
});

// Recherche

const loupe = document.getElementById('loupe');
const recherche = document.getElementById('recherche');

loupe.addEventListener('click', () => {
    recherche.style.display = 'block';
    loupe.style.display = 'none';
})
window.addEventListener('click', event => {
    if (!recherche.contains(event.target) && (!loupe.contains(event.target))) {
        recherche.style.display = 'none';
        loupe.style.display = 'block';
    }
});

function addCom(e) {
    let myCom = document.getElementById('com').value;
    document.getElementById('testcom').style.display = 'flex';
    document.getElementById('nouveaucom').innerHTML = myCom;
}

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
