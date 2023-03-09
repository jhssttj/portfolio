import LineGradient from '../components/LineGradient';
import {motion} from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const projectVaraint = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1}
}

const Project = ({title}) => {
  const overlayStyles =`absolute h-full w-full opacity-0 hover:opacity-90`
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>

      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
      className="md:w-2/4 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:0.5}}
      variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
      }}
    >
      <div>
        <p className="font-playfair font-semibold text-4xl">
          My <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
      </div>
      <p className="mt-10 mb-10">
        My projects goes here
      </p>
    </motion.div>

    {/*Projects */}
    <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={container}
      >
        {/*Row 1 */}
        <div
          className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h[400px] text-2xl font-playfair font-semibold"
        >
          BEAUTFIUL USER INTERFACES
        </div>
          <Project title="Project 1"></Project>
      </motion.div>

    </div>
    </section>
  )
}

export default Projects;