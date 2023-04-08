import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import {motion} from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return(
    <section id="skills" className="pt-10 pb-24">
      {/*Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
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
            before:w-full before:h-full before:border-2 before: border-blue before:z-[-1]"
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
        {/*Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">01</p>
              <p className="font-platfair font-semibold text-2xl mt-3">Computer Languages</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            <li>JavaScript</li>
            <li>Java</li>
            <li>Ruby</li>
            <li>HTML</li>
            <li>CSS</li>
          </p>

        </motion.div>

        {/*INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2, duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">02</p>
              <p className="font-platfair font-semibold text-2xl mt-3">Framework, Libraries, Environments</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>Ajax</li>
            <li>EJS</li>
            <li>Express</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Rails</li>
            <li>SASS</li>
          </p>

        </motion.div>

        {/*IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.4, duration:0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">03</p>
              <p className="font-platfair font-semibold text-2xl mt-3">Testing, Systems, Databases</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            <li>Storybook</li>
            <li>Cypress</li>
            <li>RSpec</li>
            <li>Jest</li>
            <li>Mocha & Chai</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Firestore</li>
            <li>Google Maps Platform</li>
          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default MySkills;