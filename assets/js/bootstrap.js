const navItems = document.querySelector(".offcanvas-body").firstElementChild;

window.addEventListener("load", () => {
    if (this.document.body.offsetWidth > 990) {
    navItems.classList.add('align-items-center')
  } else {
    navItems.classList.remove('align-items-center')
  }
})