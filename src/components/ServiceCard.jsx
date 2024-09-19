import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        className='xs:w-[250px] w-full'
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full bg-gradient-to-r from-purple-400 to-yellow-400 p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt={title}
                    className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

// Add PropTypes for validation
ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ServiceCard;
