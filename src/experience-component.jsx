import { motion } from "framer-motion"

function ExperienceComponent({
    listNumber,
    textContent
}) {

    return(
        <motion.div 
            className="experience-element-container"
            initial={{ opacity: 0, x:-20 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: false, amount: .2 }}
            transition={{ duration: .4, ease: "easeIn" }}
        >
            <p className="experience-list-number">{listNumber}</p>
            <p className="experience-text-content">{textContent}</p>
        </motion.div>
    )

}

export default ExperienceComponent