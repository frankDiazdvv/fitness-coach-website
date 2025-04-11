import { motion } from 'framer-motion'

function Dashboard() {

    return(
        <section className='dashboard-section' id="dashboard-section">
            <motion.div
             className="image-container"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.4 }}
             transition={{ duration: .7, ease: "easeIn" }}
             >
                <img className="desktop-dash-img" src="./src/assets/rowing.jpg" alt="Alberto-Rowing" /> 

            </motion.div>
            <motion.div
             className="title-container"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.4 }}
             transition={{ duration: .7, ease: "easeIn" }}
             >
                <img src="./src/assets/AlbertoGarciaLogo.png" alt="Alberto Garcia" />
            </motion.div>
            <motion.div 
            className="ver-planes-container"
            initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.4 }}
             transition={{ duration: .7, ease: "easeIn" }}
            >
                <p>Transforma Tu Vida, Hoy Es El Dia</p>
                <a href="#plans-section-container"><button className="ver-planes-btn" >VER PLANES</button></a>
            </motion.div>
        </section>
    )
}

export default Dashboard