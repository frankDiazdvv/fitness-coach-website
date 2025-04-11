import { motion } from 'framer-motion'

const cardVariants = {
    left: {
        hidden: { opacity: 0, x:-20 },
        visible: { opacity: 1, x: 0 },
    },

    right: {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    }
}

function AboutMe() {

    return(
        <motion.section
            className="about-me-section" 
            id="about-me-section"
         >
            <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: .2 }}
                transition={{ duration: .4, ease: "easeIn" }}
                variants={cardVariants.left}
            >ACERCA DE MI
            </motion.h1>
            <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: .2 }}
                transition={{ duration: .4, ease: "easeIn" }}
                variants={cardVariants.left}
            >Mi nombre es Luis Alberto García y desde los 15 años comencé este camino del mundo Fitness. 
                Llevo años de experiencia como entrenador personal y coach de Crossfit. Siempre me a 
                apasionado ver a mis clientes lograr sus objetivos , tantos físicos como mentales. Más que 
                tu entrenador seré tu compañero de viaje. Estás listo?✅ 💪🏻<br/><br/>

                <b>Mis estudios:</b><br/>
                • Acondicionamiento Físico en Fitness.<br/>
                • Orthos. <br/>
                • Real Federación Española de Gimnasia.<br/>
                • Programa Avanzado en Personal Training
                Orthos. <br/>
                • Real Federación Española de Gimnasia.<br/>
                • Certificado de Profesionalidad Grado C.<br/>
                • Acondicionamiento Físico en Sala de Entrenamiento
                Polivalente. <br/>
                • AFDA0210<br/>
                • L1 de Crossfit
            </motion.p>
            <motion.div 
                className='about-me-img-container'
                variants={cardVariants.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: .2 }}
                transition={{ duration: .4, ease: "easeIn" }}
            >
                <img src="./src/assets/pushing.jpg" alt="Alberto-Squat" />
            </motion.div>
        </motion.section>
    )
}

export default AboutMe