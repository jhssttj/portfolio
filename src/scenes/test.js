import useMediaQuery from '../hooks/useMediaQuery';
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
    <section id="skills" className="pt-10 pb-24">
      {/*Header and Image Section */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          {/* Title */}
          <div className="border-2 border-red text-center">
            <p className="font-semibold text-4xl">
              Skills
            </p>

          </div>
          {/* <p className="font-poppins font-semibold text-4xl mb-7 flex justify-center md:justify-start text-center md:text-start">
            <span className="relative z-20 before:content-brush2 before:absolute before:-top-[50px] before:z-[-1] 
              before:-right-[70px]">
                MY
                <br></br>
                <span>
                  SKILLS
                </span>
              </span>
          </p>
          <p className="mt-10 mb-7 flex flex-col justify-center md:flex-none text-lg">
            I have many other skills and experiences related to:
            <li>Project Management</li>
            <li>Quality Control and Assurance</li>
            <li>Engineering Softwares (AutoCAD, VisSim, CostX)</li>
          </p> */}
        </motion.div>

      {/*Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/*Computer Lanaguage */}
        <motion.div
          className="md:w-1/3 mt-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.25}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-40 md:h-40 xxs:h-36 bg-purple shadow-sd rounded-lg border-2 border-black">
            <div className="z-10 font-poppins">
              <p className="font-semibold text-5xl ml-1">01</p>
              <p className="font-semibold text-2xl mt-3 ml-1">Computer Languages</p>
            </div>
          </div>
          <div className={skillsClass}>
            {renderSkills("s1","purple")}
          </div>

        </motion.div>

        {/*Framework, Libraries, Environments */}
        <motion.div
          className="md:w-1/3 mt-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.25}}
          transition={{delay:0.3, duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-40 md:h-40 xxs:h-36 bg-blue shadow-sd rounded-lg border-2 border-black">
            <div className="z-10 font-poppins">
              <p className="font-semibold text-5xl ml-1">02</p>
              <p className="font-semibold text-2xl mt-3 ml-1">Framework, Libraries, Environments</p>
            </div>
          </div>
          <div className={skillsClass}>
            {renderSkills("s2", "blue")}
          </div>

        </motion.div>

        {/*Testing, Systems, Datebases */}
        <motion.div
          className="md:w-1/3 mt-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.25}}
          transition={{delay:0.6, duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-40 md:h-40 xxs:h-36 bg-yellow shadow-sd rounded-lg border-2 border-black">
            <div className="z-10 font-poppins">
              <p className="font-semibold text-5xl ml-1">03</p>
              <p className="font-semibold text-2xl mt-3 ml-1">Testing, Systems, Databases</p>
            </div>
          </div>
          <div className={skillsClass}>
            {renderSkills("s3", "yellow")}
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default MySkills;