import PlanCard from './plan-card'
import { motion } from 'framer-motion'


function Plans(){

    return(
        <section className="plans-section-container" id="plans-section-container">
            <motion.h2
             className='top-subtitle'
             initial={{ opacity:0, y: 30 }}
             whileInView={{ opacity: 1, y:0 }}
             viewport={{ once: false, amount: 0.4 }}
             transition={{ duration: .5, ease: "easeIn" }}
             >Comencemos!
             </motion.h2>
            <motion.h1
             className='plans-title'
             initial={{ opacity:0, y: 30 }}
             whileInView={{ opacity: 1, y:0 }}
             viewport={{ once: false, amount: 0.4 }}
             transition={{ duration: .5, ease: "easeIn" }}
             >Mis Planes</motion.h1>
            <div className="plan-cards-container">
                <PlanCard  
                    title="PONTE EN MARCHA" 
                    subtitle="Plan Simple de Asesoria" 
                    content={["Consejos de entrenamiento.","Atención 24/7.", "Corrección de Ejercicios y Alimentación"]}
                    type="left"
                />
                <PlanCard  
                    title="TRANSFORMACION TOTAL" 
                    subtitle="Plan de Entrenamiento" 
                    content={[
                        "Plan de nutrición mensual adaptado a tus objetivos.",
                        "Seguimiento de progreso con análisis detallado y estadísticas."
                    ]}
                    other="+ PONTE EN MARCHA"
                    type="center"
                />
                <PlanCard  
                    title="ELITE FITNESS" 
                    subtitle="Entrenamiento + Nutrición" 
                    content={[
                        "Acceso ilimitado a entrenamientos en video personalizados.",
                        "Sesiones en vivo cada semana.",
                        "Soporte prioritario 24/7 y comunidad exclusiva para miembros Oro."
                    ]}
                    other="+ TRANSFORMACION TOTAL"
                    type="right"

                />
            </div>

        </section>
    )
}

export default Plans
