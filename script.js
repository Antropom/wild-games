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



function addCom(e) {
    let myCom = document.getElementById('com').value;
    document.getElementById('testcom').style.display = 'flex';
    document.getElementById('nouveaucom').innerHTML = myCom;
}