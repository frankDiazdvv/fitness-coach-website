import { motion } from "framer-motion"
import storyLogo from './assets/black-logo.png'

function MyStory(){
   

    return(
        <section className="story-section" id="story-section">
            <motion.img className="story-img"
                src={ storyLogo }
                alt="white-logo"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: .7, ease: "easeIn" }}
            ></motion.img>
            <motion.div className="my-story-text-container"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: .7, ease: "easeIn" }}
            >
                <p className="story-text-title-sentence">
                    DESDE LOS 15 AÑOS COMENCÉ A ENTRENAR EN EL GIMNASIO, SIN 
                    CONOCIMIENTO ALGUNO Y SIN GUÍA.
                </p>
                <p className="story-text-rest">
                A veces aprendemos en el camino, y así fue mi destino. Fallé mucho, cometí 
                muchos errores, no supe alimentarme ni cómo debía entrenar. Crecí y descubrí 
                CrossFit, que encendió una chispa en mí. Lo combiné con entrenamiento de 
                fuerza en el gimnasio, y hasta hoy sigo uniendo ambas pasiones, buscando 
                equilibrio en cada paso.<br/><br/>
                
                Con el tiempo, entendí que la comida es tan crucial como el ejercicio. Al 
                principio, me sentía debil siguiendo dietas sin sentido. 
                Aprendí a elegir alimentos que nutren de verdad. 
                Hoy, cada bocado me impulsa, y sigo explorando cómo alimentar mi cuerpo para 
                rendir al máximo.<br/><br/>

                Este viaje me enseñó a no rendirme, aunque el camino sea duro. 
                Entrenar y comer bien me dieron confianza, y quiero ayudarte a encontrar esa 
                fuerza. Si yo pude, tú también puedes, un día a la vez. Estas Listo?
                </p>
            </motion.div>
            <motion.a href="#plans-section-container">
                <button className="story-btn">COMENCEMOS</button>
            </motion.a>
        </section>
    );
}

export default MyStory