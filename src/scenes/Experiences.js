import skillData from '../datas/skillData';
import {motion} from "framer-motion";
import { Pencil, Briefcase } from 'react-bootstrap-icons';

const MySkills = () => {

  const skillsDiv = "md:w-1/3 w-5/6 m-4 flex flex-col justify-start items-center"
  const skillsIcon = "bg-blue min-h-[75px] min-w-[75px] flex items-center justify-center rounded-full m-2"
  const skillsTitle = "text-xl text-gray-500 text-center my-2"
  const skillDiv = "grid md:grid-cols-3 xxs:grid-cols-5  grid-cols-3"

  const renderExp = (skillSet) => {
    const skills = Object.values(skillData[skillSet]);
    const render = skills.map((skill) => {
      return (
        <div key={skill.name} className="flex justify-start items-center w-[40px] h-[40px] m-2">
            <img key={skill.name}
            src={`../assets/skills/${skill.image}.png`} alt={skill.name} title={skill.name} />
        </div>
      )
      })
    return render;
  }


  return(
    <section id="experiences" className="flex justify-center items-start sm:h-screen sm:min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%]
          md:h-[85%] h-[100%] shadow-xl flex flex-col bg-white md:m-24"
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
        <div className="flex flex-col justify-start items-center bg-grey2 text-center">
            <p className="text-4xl font-semibold p-2 md:m-2 md:mt-8 mt-16">
              Experiences
            </p>
            <div className="border-b-4 border-blue w-[150px] mb-4"></div>
        </div>
        {/* Skills Section */}
        <div className="bg-white flex flex-col items-center justify-start">
          {/* Skill Set 1 */}
          <div className ={skillsDiv}>
            <div className={skillsIcon}>
              <Pencil className="p-2 h-[60px] w-[60px] fill-white"/>
            </div>
            <p className={skillsTitle}>
              Education
            </p>
            <div className={skillDiv}>
              {renderExp("s1")}
            </div>
          </div>
          {/* Skill Set 2 */}
          <div className ={skillsDiv}>
            <div className={skillsIcon}>
              <Briefcase className="p-2 h-[60px] w-[60px] fill-white"/>
            </div>
            <p className={skillsTitle}>
              Career
            </p>
            <div className={skillDiv}>
              {renderExp("s2")}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MySkills;