import skillData from '../datas/skillData';
import {motion} from "framer-motion";
import { LayoutTextWindow, Book, Folder } from 'react-bootstrap-icons';

const MySkills = () => {

  const skillsDiv = "md:w-1/3 w-5/6 m-4 flex flex-col justify-start items-center"
  const skillsIcon = "bg-blue min-h-[75px] min-w-[75px] flex items-center justify-center rounded-full m-2"
  const skillsTitle = "text-xl text-gray-500 text-center my-2"
  const skillDiv = "grid md:grid-cols-3 xxs:grid-cols-5  grid-cols-3"

  const renderSkills = (skillSet) => {
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
    <section id="skills" className="flex justify-center items-center min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%]
          h-3/4 shadow-xl flex flex-col bg-white md:m-24"
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
        <div className="flex flex-col justify-start items-center bg-grey text-center h-auto">
            <p className="text-4xl font-semibold p-2 md:m-2 md:mt-8 mt-16">
              Skills
            </p>
            <div className="border-b-4 border-blue w-[150px]"></div>
            <p className="text-gray-500 p-2 m-2">
              Below are list of my main technical skills. I also have other various skills in
              project management, quality control assurance and engineering related softwares (AutoCAD, VisSim, CostX).
            </p>
        </div>
        {/* Skills Section */}
        <div className="bg-white flex md:flex-row flex-col md:items-none md:items-start items-center justify-center">
          {/* Skill Set 1 */}
          <div className ={skillsDiv}>
            <div className={skillsIcon}>
              <LayoutTextWindow className="p-2 h-[60px] w-[60px] fill-white"/>
            </div>
            <p className={skillsTitle}>
              Computer Languages
            </p>
            <div className={skillDiv}>
              {renderSkills("s1")}
            </div>
          </div>
          {/* Skill Set 2 */}
          <div className ={skillsDiv}>
            <div className={skillsIcon}>
              <Book className="p-2 h-[60px] w-[60px] fill-white"/>
            </div>
            <p className={skillsTitle}>
              Framework, Libraries, Environments
            </p>
            <div className={skillDiv}>
              {renderSkills("s2")}
            </div>
          </div>
          {/* Skill Set 3 */}
          <div className ={skillsDiv}>
            <div className={skillsIcon}>
              <Folder className="p-2 h-[60px] w-[60px] fill-white"/>
            </div>
            <p className={skillsTitle}>
              Testing, Systems, Databases
            </p>
            <div className={skillDiv}>
              {renderSkills("s3")}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MySkills;