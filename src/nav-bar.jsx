import HamburgerMenu from './HamburgerMenu.jsx'
import { useState, useRef, useEffect } from 'react'

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if(isMenuOpen){
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        };

    }, [isMenuOpen]);

    const menuItems = [
        { label: "Acerca de Mi", href: "#about-me-section" },
        { label: "Planes", href: "#plans-section-container" },
        { label: "Contactame", href: "#contact-me-section" },
    ]

    return(
        <nav className='navbar'>
            <div className="nav-logo-container">
                <a href="#dashboard-section">
                    <img src="./src/assets/black-logo.png" alt="1MoreFitness-Logo"/>
                </a>
            </div>
            {/* Nav Menu with Hamburger Menu */}
            <HamburgerMenu 
            menuItems={menuItems}
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            menuRef={menuRef}
            />
        </nav>
    )
}

export default NavBar