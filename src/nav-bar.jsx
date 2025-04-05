import './nav-bar.jsx'

function NavBar(){

    return(
        <nav>
            <div className="nav-logo-container">
                <a href="#"><img src="./src/assets/black-logo.png" alt="1MoreFitness-Logo"/></a>
            </div>
            <div className="nav-desktop-menu">
                <a href="#">Acerca de Mi</a>
                <a href="#">Planes</a>
                <a href="#">Contactame</a>
            </div>
        </nav>
    )
}

export default NavBar