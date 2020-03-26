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


/* Recherche filtrante */

function runScript(e) {
  const myIndex1 = ['resident', 'evil', 'resident evil 3 remake', 'resident evil remake', 'évil', 'résident']
  const myIndex2 = ['cyberpunk', 'cyber punk', 'cyber', 'punk']
  const myIndex3 = ['final fantasy 7 remake', 'final fantasy', 'final fantasy 7', 'final fantasy remake', 'final', 'fantasy']
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