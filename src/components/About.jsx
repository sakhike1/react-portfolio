import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "spring", 0.1, 1)} // Ensure fadeIn returns valid variants
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I&apos;m an expert front-end developer with extensive experience in JavaScript, specializing in cutting-edge frameworks like React and Vue.js. I excel at crafting responsive, user-friendly interfaces using tools like Tailwind CSS, Jest for testing, Git for version control, and Appwrite for backend integration. With a strong focus on delivering efficient, scalable solutions, I bring a keen eye for detail and a deep understanding of modern technologies like Supabase to ensure seamless, top-tier front-end experiences. If you&apos;re looking for the best in front-end development, let&apos;s build something extraordinary together!
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Assign a name to the component wrapped by SectionWrapper
const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
