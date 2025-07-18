const main_nav = document.querySelector('.main-nav ul');
const menu_icon = document.getElementById('menu-icon');

menu_icon.addEventListener('click', () => {
    main_nav.classList.toggle('active');
    const isActive = main_nav.classList.contains('active');
    menu_icon.src = isActive ? 'img/close.svg' : 'img/trigger_menu.svg';
    console.log('Menu icon clicked', isActive ? 'Menu is active' : 'Menu is inactive');
    if(isActive) {
        main_nav.classList.add('flex-col');
    } else {
        main_nav.classList.remove('flex-col');
    }
});




