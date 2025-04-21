import HamburgerMenu from './HamburgerMenu.jsx'
import { useState, useRef, useEffect } from 'react'
import logo from './assets/black-logo.png'

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if(isMenuOpen){
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        };

    }, [isMenuOpen]);

    const menuItems = [
        { label: "Mi Historia", href: "#story-section" },
        { label: "Mi Experiencia", href: "#experience-section" },
        { label: "Planes", href: "#plans-section-container" },
        { label: "Antes y Después", href: "#before-after-section" },
        { label: "Contáctame", href: "#contact-me-section" },
    ]

    return(
        <nav className='navbar'>
            <div className="nav-logo-container">
                <a href="#top-deal-bar">
                    <img src={logo} alt="1MoreFitness-Logo"/>
                </a>
            </div>
            {/* Nav Menu with Hamburger Menu */}
            <HamburgerMenu 
                menuItems={menuItems}
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                menuRef={menuRef}
                buttonRef={buttonRef}
            />
        </nav>
    )
}

export default NavBar