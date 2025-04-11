import { motion } from 'framer-motion'

const cardVariants = {
    left: {
        hidden: { opacity: 0, x: -40 }, // Initial state
        visible: { opacity: 1, x: 0 },  // Animated state
    },

    center: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },

    right: {
        hidden: { opacity: 0, x: 40 },
         visible: { opacity: 1, x: 0 },
    },
};

function PlanCard({
    title = "Plan Title",
    subtitle = "Subtitle",
    content = ["This Requirement", "Plus this requirement", "This requirement"],
    other,
    type,
}) {

    const encodedMessage = encodeURIComponent(`Hola, queria preguntarte acerca del plan '${title}'.`);
    const whatsappUrl = `https://wa.me/34624873645?text=${encodedMessage}`;

    const variant = cardVariants[type] || cardVariants.center;

    return(
        <motion.div 
        className={`plan-card`}
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}  
        >
            <motion.div className="title-subtitle-holder">
                <motion.h1 className="card-title">{title}</motion.h1>
                <motion.h2 className="card-subtitle">{subtitle}</motion.h2>
            </motion.div>
            <motion.ul className="">{content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</motion.ul>
            <motion.p>{other}</motion.p>
            <motion.a href={whatsappUrl}><button className="card-btn">SABER MÁS</button></motion.a>
        </motion.div>
    );
}

export default PlanCard