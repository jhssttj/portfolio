import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const AboutMe = () => {
  
  const buttonClass = "bg-blue text-white rounded-lg p-2 hover:bg-blueH shadow-2xl"

  return (
    <section id="about" className="flex items-center justify-center min-h-screen md:h-screen">

        {/*Main Section */}
      <motion.div 
        className="md:min-w-[1000px] md:w-[50%] 
        h-3/4 md:flex-row flex flex-col items-center md:items-start shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.33}}
        transition={{duration:1}}
        variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
       }}
      >
        {/* Left Side */}
        <div
        className="w-[100%] h-full bg-grey flex flex-col justify-between items-centertext-center">
          <div className="w-full h-[90%] flex flex-col justify-evenly items-center text-center pt-8">
            <img
            alt="profile"
            className="saturate-200 w-full max-w-[250px] rounded-full md:mt-4 mt-12"
            src="assets/general/profile-image.jpg"
            />
            <p className="text-4xl font-semibold p-8">
              Kevin
              <br></br>
              Lee
              <br></br>
              <span className="text-xl text-black font-normal">
              (이정훈 - Lee Jung Hoon)
              </span>
              <br></br>
              <span className="text-xl text-gray-500 font-normal">
                He/Him
              </span>
          
            </p>
            <div className="border-b-4 border-blue w-[150px] mb-8"></div>
            <p className="text-xl text-gray-500 mb-8">
              Full Stack Web Developer
            </p>
          </div>
          <div className="w-full p-2 bg-grey md:bg-white flex justify-center items-center">
            <SocialMediaIcons/>
          </div>
        </div>

       {/* Right Side  */}
        <div
        className="bg-white w-[100%] p-4 flex flex-col justify-center md:items-start items-center md:text-start text-center h-full"
        >
          <p className="text-4xl font-semibold p-2 m-2">
            About Me
          </p>
          <div className="border-b-4 border-blue w-[150px] mx-8"></div>
          <p className="text-gray-500 p-2 m-2">
            In 2020, I graduated from University of Calgary with a Bachelor's in Civil Engineering and started working as a cost consultant.
            I realised that this was not something I wanted to do for the rest of my life and started seeking for my true calling.
            <br></br>
            <br></br>
            Recently, I graduated from Lighthouse Labs Web Development Bootcamp where I learned how to utilize various programs and frameworks such as JavaScript, React, Ruby, etc. to create 
            web based applications. From this, I discovered passion for coding and knew that this is what I wanted to do for the rest of my life. 
          </p>
          {/* Anchor Links for Different Scenes */}
          <div className="w-full p-2 m-2 flex md:justify-start justify-center gap-4 xxs:grid-cols-2 grid text-center">
            <a
              className={buttonClass}
              href="https://resume.creddle.io/resume/11rq6q14mw6"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <AnchorLink
              className={buttonClass}
              href="#skills"
            >
              Skills
            </AnchorLink>
            <AnchorLink
              className={buttonClass}
              href="#projects"
            >
              Projects
            </AnchorLink>
            <AnchorLink
              className={buttonClass}
              href="#experiences"
            >
              Experiences
            </AnchorLink>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe;