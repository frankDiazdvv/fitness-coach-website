import { useRef } from 'react';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        window.emailjs.sendForm(
            'service_19jz7d6', //Service ID
            'template_geb967o', //TemplateID 
            form.current,
            'FF5xy1a7fo2FH4y4N' //Public Key
        ).then(() => {
            window.alert("Message Sent Successfully!");
            form.current.reset()
        }).catch((error) => {
            console.error("Email failed to send: ", error);
            window.alert("Failed to send message!");
        });
    };

    return(
        <section className="contact-me-section" id="contact-me-section">
            <div className="contact-img-container">
                <img src="./src/assets/back.jpg" alt="carrying-in-back" />
                <p>Aquí empieza tu camino. Contáctame Hoy Mismo!</p>
            </div>
            <div className="send-message-container">
                <h2 className="form-title">Enviame Tus Preguntas</h2>
                <form ref={form} onSubmit={sendEmail} className="send-message">
                    <input className="form-name" name="sender-name" type="text" placeholder="Nombre" /><br />
                    <div className="email-phone">
                        <input className="form-phone" name='sender-phone' type="text" placeholder="Telefono" />
                        <input className="form-email" name='sender-email' type="text" placeholder="E-Mail" /><br />
                    </div>
                    <input className="form-message" name='message' type="text" placeholder="Mensaje" /><br />
                    <button className="submit-form-btn">ENVIAR MENSAJE</button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe