
function HamburgerMenu({ menuItems, isOpen, toggleMenu, menuRef }) {

    return (
        <div>
            <button 
                className={`hamburger-btn ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="hamburger-line line1"></div>
                <div className="hamburger-line line2"></div>
                <div className="hamburger-line line3"></div>
            </button>
            <nav ref={menuRef} className={`side-nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default HamburgerMenu