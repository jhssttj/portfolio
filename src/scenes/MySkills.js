import useMediaQuery from '../hooks/useMediaQuery';
import skillData from '../datas/skillData';
import {motion} from "framer-motion";
import {useState} from 'react';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const skillsClass = "flex justify-center items-center content-center border-2 border-black sm:grid md:grid-rows-2 sm:grid-cols-2 mt-2"
  const [skillHover, setSkill] = useState("");

  const renderSkills = (skillSet, color) => {
    const skills = Object.values(skillData[skillSet]);
    const render = skills.map((skill) => {
      return (
        <div key={skill.name} className="flex flex-col justify-center gap-2 items-center border-2 border-red"
          onMouseEnter={()=> {setSkill(skill.name)}}
          onMouseLeave={()=> {setSkill("")}}
        >
          <img key={skill.name} className="h-[48px] w-[48px]"src={`../assets/skills/${skill.image}.png`} alt={skill.name} />
          {(skillHover===skill.name)
            ?(<p className={`p-1 text-center flex-poppins font-semibold text-xs ${"bg-"+ color} shadow-sm rounded-lg border-2 border-black`}>
                {skill.name}
              </p>)
            :(<p className="p-4"></p>)}
        </div>
      )
      })
    return render;
  }


  return(
    <section id="skills" className="pt-10 pb-24">
      {/*Header and Image Section */}
      <div className="flex md:justify-between md:gap-16 mt-16 md:flex-row flex-col justify-center items-center">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <p className="font-poppins font-semibold text-4xl mb-7 flex justify-center md:justify-start text-center md:text-start">
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
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
        {isAboveMediumScreens
          ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            before:w-full before:h-full before:border-2 before:border-purple before:z-[-1]"
          >
            <img
              alt="skills"
              className="z-10"
              src="assets/skills-image.png"
            />
          </div>
          )
          : (
          <img
          alt="skills"
          className="z-10"
          src="assets/skills-image.png"
          />
          )}
        </div>
      </div>

      {/*Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/*Computer Lanaguage */}
        <motion.div
          className="md:w-1/3 mt-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
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
          viewport={{once:true, amount:0.5}}
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
          viewport={{once:true, amount:0.5}}
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