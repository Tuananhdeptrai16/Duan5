const $ =document.querySelector.bind(document)
const $$ =document.querySelector.bind(document)

const menu= $('.menu')
const menu_overlay=$('.menu_overlay')
const menuDrawer=$('.menu-drawer')

console.log(' menuDrawer:', menuDrawer);
menu.onclick= function () {
    menu_overlay.classList.add('menu_overlay__visible')
    menuDrawer.classList.add('menu-drawer__visible')
}
window.onclick = function(event) {
    if(event.target === menu_overlay || event.target === menuDrawer) {
        menu_overlay.classList.remove('menu_overlay__visible')
        menuDrawer.classList.remove('menu-drawer__visible')

    }
    
}
