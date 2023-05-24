import {motion} from "framer-motion";
import ProjectSlideShow from "../components/ProjectSlideShow";

const Projects = () => {
  return(
    <section id="projects" className="flex justify-center items-start sm:h-screen sm:min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%] w-full md:h-[85%] h-[100%]
          shadow-2xl flex flex-col bg-white md:m-24"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.33}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
        {/* Title Section */}
        <div className="flex flex-col justify-start items-center bg-grey text-center">
            <p className="text-4xl font-semibold p-2 md:m-2 md:mt-8 mt-16">
              Projects
            </p>
            <div className="border-b-4 border-blue w-[150px] mb-4"></div>
        </div>
        {/* Slideshow Section */}
        <ProjectSlideShow/>
      </motion.div>
    </section>
  )
}

export default Projects;