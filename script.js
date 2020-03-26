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

//Menu burger

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