import { motion } from 'framer-motion'
import ExperienceComponent from './experience-component'
import pushing from './assets/pushing.jpg'

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
        <section className="experience-section" id="experience-section">
            <motion.h1 
                className='h1-title'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: .2 }}
                transition={{ duration: .4, ease: "easeIn" }}
                variants={cardVariants.left}
            >CUAL ES MI EXPERIENCIA?
            </motion.h1>
            <div className="experience-text-container">
                <ExperienceComponent
                    listNumber={"1"}
                    textContent={"Programa Avanzado en Personal Training de Orthos."}
                /><br/>
                <ExperienceComponent
                    listNumber={"2"}
                    textContent={"Real Federación Española de Gimnasia."}
                /><br/>
                <ExperienceComponent
                    listNumber={"3"}
                    textContent={"Título Internacional de Masaje Corporal para Técnicas Generales."}
                /><br/>
                <ExperienceComponent
                    listNumber={"4"}
                    textContent={"L1 de CrossFit"}
                />
            </div>           
            <motion.div 
                className='experience-img-container'
                variants={cardVariants.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: .2 }}
                transition={{ duration: .4, ease: "easeIn" }}
            >
                <img src={pushing} alt="Alberto-Squat" />
            </motion.div>
            <a href="#plans-section-container">
                <motion.button 
                    className='ver-planes-btn'
                    variants={cardVariants.right}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: .2 }}
                    transition={{ duration: .4, ease: "easeIn" }}
                >
                    VER PLANES    
                </motion.button>
            </a>
        </section>
    )
}

export default AboutMe