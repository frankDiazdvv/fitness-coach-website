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
                    content={[
                        "Asesoramiento profesional en entrenamiento",
                        "Atención 24/7 por WhatsApp o Email.", 
                        "Corrección de Ejercicios y Alimentación"]}
                    price="19/SESIÓN"
                    type="left"
                />
                <PlanCard  
                    title="TRANSFORMACION TOTAL" 
                    subtitle="Plan de Entrenamiento Personalizado" 
                    content={[
                        "Rutina adaptada a tus metas.",
                        "Videollamadas personalizadas.",
                        "Entrenamientos actualizados mensualmente",
                        "Videos Exclusivos de Ejercicios",
                        "Seguimiento de progreso con fotos y métricas."
                    ]}
                    other="+ PONTE EN MARCHA"
                    price="39/MES"
                    type="center"
                />
                <PlanCard  
                    title="ELITE FITNESS" 
                    subtitle="Entrenamiento + Nutrición" 
                    content={[
                        "Plan de Comidas Personalizado para tu objetivo y requerimientos nutricionales.",
                        "Consejos de Nutrición Personalizado",
                        "Sesiones en vivo con entrenamientos especializados."
                    ]}
                    other="+ TRANSFORMACION TOTAL"
                    price="49/MES"
                    type="right"

                />
            </div>
        </section>
    )
}

export default Plans
