import LineGradient from '../components/LineGradient';
import {motion} from "framer-motion";
import projectData from '../projectData/projectData';


const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1}
}

const Project = ({title,description,link,git}) => {
  const overlayStyles =`absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-blue z-30 flex 
  flex-col justify-center items-center text-center p-16 text-deep-blue`
  return (
    <motion.div variants={projectVariant} className="relative m-1">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-4">
          {description}
        </p>
        <a 
        href={link} 
        className="text-blue bg-white hover:bg-yellow font-playfair font-bold rounded-lg text-base px-4 py-2.5 mt-2 mr-2 mb-2"
        rel="noopener noreferrer" target="_blank">
          See Project Demo
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href={git}
        target="_blank"
        rel="noreferrer"
      >
        <img alt="projectgitlink" src="../assets/github.png"/>
      </a>
      </div>
      <img className=""src={`../assets/${title}.png`} alt={title} />
    </motion.div>
  )
}

const projectList = Object.values(projectData)
const renderProjects = projectList.map((project) => {
  return (<Project 
    key={project.title}
    title={project.title}
    description={project.description}
    link={project.link}
    git={project.git}>
    </Project>)
})


const Projects = () => {
  return (
    <section id="projects" className="pt-10 pb-24">
      <motion.div
      className="md:w-2/4 mx-auto text-center flex justify-center mt-16 mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:0.5}}
      variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
      }}
      >
          <p className="font-poppins font-semibold text-4xl flex justify-center md:justify-start">
              <span className="relative z-20 before:content-brush3 before:absolute before:-top-[25px] before:z-[-1] 
                before:-right-[40px]">
                  MY
                  <br></br>
                  <span>
                    PROJECTS
                  </span>
                </span>
            </p>
      </motion.div>

      {/*Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid md:grid-cols-3 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={container}
        >
          {/*Row 1 */}
            {renderProjects}

        </motion.div>
      </div>
    </section>
  )
}

export default Projects;