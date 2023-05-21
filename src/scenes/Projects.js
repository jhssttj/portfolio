import {motion} from "framer-motion";
import projectData from '../datas/projectData';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';






const slidesArray = [];


projectData.forEach((project) => {
  slidesArray.push(`../assets/projects/${project.title}.png`,)
})

const renderSlides = projectData.map((data)=>{
  return (
    <div key={data.title} className="flex flex-col justify-evenly">
      {/* <div className="flex flex-col justify-center items-center bg-grey2">
        <p className="text-2xl text-gray-500">{data.title}</p>
        <p className="text-gray-500">{data.description}</p>
      </div>
      <div className="w-[500px] h-[500px]"> 
        <img className="p-1 "src={`../assets/projects/${data.title}.png`} alt={data.title} />
      </div>

      <div className="flex justify-center items-center bg-grey2">
          <a 
          href={data.link} 
          className="bg-blue text-white rounded-lg p-2 hover:bg-blueH shadow-2xl"
          rel="noopener noreferrer" target="_blank">
            Project Demo
          </a>
          <a
          className="hover:opacity-50 transition duration-500"
          href={data.git}
          target="_blank"
          rel="noreferrer"
          >
          <img alt="projectgitlink" src="../assets/icons/github.png"/>
          </a>
      </div> */}
  </div>
  )

})

const Projects = () => {
  return(
    <section id="projects" className="flex justify-center items-start min-h-screen md:h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%] h-[75%] 
          shadow-xl flex flex-col bg-white md:m-24 border-2 border-purple"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
        {/* Title Section */}
        <div className="flex flex-col justify-start items-center bg-grey2 text-center h-auto">
            <p className="text-4xl font-semibold p-2 md:m-2 mt-8">
              Projects
            </p>
            <div className="border-b-4 border-blue w-[150px] mb-2"></div>
        </div>
        <div className="border-2 border-blue h-full">
          <Slide>
            {renderSlides}
          </Slide>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects;