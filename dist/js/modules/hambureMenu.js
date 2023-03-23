   // hamburger menu

   function hamburgerMenu() {
    const hamburger = document.querySelector('.Intero__hamburger');
    const hamMenu = document.querySelectorAll('.Intero__mobile__mobileItem');
    const parentMobMenu = document.querySelector('.Intero__mobile');
    const menuClose = document.querySelector('.Intero__mobile__kreuz');
    const overlay = document.querySelector('.Intero__overlay');
 
    function closeMenu() {
        parentMobMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
 
    function openMenu() {
        parentMobMenu.style.display = 'block';
        overlay.style.display = 'block';
        
    }
 
    hamburger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
 
    parentMobMenu.addEventListener('click', (e) => {
        const target = e.target;
 
        if(target && target.classList.contains('Intero__mobile__mobileItem')) {
            hamMenu.forEach((item) => {
                if(target === item) {
                    closeMenu();
                }
            });
        }
    });
   }

export default hamburgerMenu;