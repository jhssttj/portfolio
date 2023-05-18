import skillData from '../datas/skillData';
import {motion} from "framer-motion";

const MySkills = () => {
  const skillsClass = "flex justify-center items-start mt-2 grid mt-8 md:grid-cols-2 sm:grid-cols-5 xxs:grid-cols-3 grid-cols-2 bg-grey2 shadow-xl"

  const renderSkills = (skillSet, color) => {
    const skills = Object.values(skillData[skillSet]);
    const render = skills.map((skill) => {
      return (
        <div key={skill.name} className="max-h-[100px] max-w-[100px] relative flex flex-col justify-start items-center rounded-lg border-2 border-black">
            <div className={`absolute max-h-[75px] max-w-[75px] h-full w-full ${"bg-"+color} z-20 opacity-0 hover:opacity-100 transition duration-300 
              flex justify-center rounded-lg shadow-xl`}>
              <p className="font-poppins text-white text-sm xs:text-base text-center m-auto">
                {skill.name}
              </p>
            </div>
            <img key={skill.name} className="max-h-[75px] max-w-[75px] h-full w-full p-2"src={`../assets/skills/${skill.image}.png`} alt={skill.name} />
        </div>
      )
      })
    return render;
  }


  return(
    <section id="skills" className="border-2 border-black flex justify-center items-center min-h-screen md:h-screen">
      {/*Content Section */}
      <motion.div
          className="border-2 border-purple md:min-w-[1000px] md:w-[50%] 
          h-3/4 shadow-xl flex flex-col"
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
        <div className="border-2 border-blue bg-grey2 text-center">
            <p className="text-4xl font-semibold p-2 m-2">
              Skills
            </p>
            <p className="text-gray-500 p-2 m-2">
              In addition to 
            </p>
        </div>
        {/* Skills Section */}
        <div className="border-2 border-red bg-white h-full">
          <p>
            test
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default MySkills;