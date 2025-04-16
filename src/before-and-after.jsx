import { motion } from 'framer-motion'

import beforeFlex from './assets/before-flex.jpg'
import afterFlex from './assets/after-flex.jpg'
import beforeLeg from './assets/before-leg.jpg'
import afterLeg from './assets/after-leg.jpg'
import beforeSkinny from './assets/before-skinnier.jpg'
import afterRunning from './assets/after-running.jpg'


function BeforeAndAfter() {

    return(
        <section className="before-after-section" id='before-after-section'>
            <h2 className='top-subtitle'>Mis Resultados</h2>
            <h1 className="h1-title">ANTES Y DESPUÉS</h1>
            <motion.div 
                className="before-after-img-container"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: .7, ease: "easeIn" }}
            >
                <div className="before-img-container">
                    <img className='up-left' src={ beforeFlex } alt="before-flex" />
                    <img className='up-center' src={ beforeLeg } alt="before-leg" />
                    <img className='up-right' src={ beforeSkinny } alt="before-skinny"/>
                </div>
                <div className="after-img-container">
                    <img className='bottom-left' src={ afterFlex } alt="after-flex" />
                    <img className='bottom-center' src={ afterLeg } alt="after-leg" />
                    <img className='bottom-right' src={ afterRunning } alt="after-running" />
                </div>
            </motion.div>
        </section>    
    )
}

export default BeforeAndAfter