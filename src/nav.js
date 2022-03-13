const createNav = () => {
    const navbar = document.createElement('div');
    navbar.classList.add('nav')
    navbar.innerHTML = `
    <div class="nav">
        <div>
            <img src='/src/images/logo.png' width=100px>
        </div>
        <button>Home</button>
        <button>Menu</button>
        <button>Contact</button>
    </div>
    `
    return navbar;
}
export default createNav;