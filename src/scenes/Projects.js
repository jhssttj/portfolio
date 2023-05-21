import {motion} from "framer-motion";
import projectData from '../datas/projectData';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';






const slidesArray = [];

const ProjectDiv = ({ title, description, link, git }) => (
  <div style={{
    position: 'absolute',
    right: 100,
    top: 250,
    fontSize: 38,
    padding: 55,
    border: 'solid 1px',
  }}>
    {title}
    {description}
  </div>
)

projectData.forEach((project) => {
  slidesArray.push(`../assets/projects/${project.title}.png`,)
})



const test = slidesArray.map((image)=>{
  return (
    <div className="each-side-effect bg-black">

      <img src={image} alt="test"/>
      <span>Slide 1</span>

  </div>
  )

})



const Projects = () => {

  return(
    <section id="projects" className="flex justify-center items-center min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%] h-[100%] 
          h-3/4 shadow-xl flex flex-col bg-white md:m-24"
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
            <div className="border-b-4 border-blue w-[150px]"></div>
            <p className="text-gray-500 p-2 m-2">
              Check out some of my projects (More to come)!
            </p>
        </div>
        <div className="border-2 border-black w-full h-[500px]">
          <Slide className='w-full h-full border-4 border-blue'>
            {test}
          </Slide>

        </div>
      </motion.div>
    </section>
  )
}

export default Projects;