
function Footer() {

    return(
        <footer>
            <a className="footer-img-container" href="#dashboard-section">
                <img src="./src/assets/footer-logo.png" alt="footer-logo"/>
            </a>
            <div className="contact-info">
                <h3>CONTACTAME</h3>
                <p className="contact-type-title">Telefono</p>
                <a href="https://wa.me/34624873645">
                    <p className="contact-link">+34 624-87-36-45</p>
                </a>
                <p className="contact-type-title">E-Mail</p>
                <a href="mailto:luisalbertosena435@gmail.com">
                    <p className="contact-link">luisalbertosena435@gmail.com</p>
                </a>
            </div>
            <div className="contact-info">
                <h3>CONECTA CONMIGO</h3>
                <p className="contact-type-title">Instagram</p>
                <a href="https://www.instagram.com/alber_garcia01/">
                    <p className="contact-link">@alber_garcia01</p>
                </a>
                <p className="contact-type-title">X(Twitter)</p>
                <a href="https://x.com/AlberFit01">
                    <p className="contact-link">@AlberFit01</p>
                </a>
            </div>
        </footer>
    );
}

export default Footer