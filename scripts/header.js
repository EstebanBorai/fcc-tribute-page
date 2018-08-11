function toggleNav() {
  const elTitle = document.getElementById('title');
  
  if (elTitle.className.indexOf('hide') !== -1) {
    elTitle.className = '';
  } else {
    elTitle.className = 'hide';
  }
  
  const elNav = document.getElementsByTagName('nav')[0];
  if (elNav.style.display !== 'inline-block') {
    elNav.style.display = 'inline-block';
  } else {
    elNav.style.display = 'none';
  }
}

const elMenuHamb = document.getElementById('menu-hamb');
elMenuHamb.addEventListener('click', toggleNav);
