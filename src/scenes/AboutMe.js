import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const AboutMe = () => {
  
  const buttonClass = " bg-blue text-white rounded-lg p-2 hover:bg-blueH shadow-xl"

  return (
    <section id="about" className="py-24 flex flex-col items-center justify-center min-h-screen h-auto">

        {/*Main Section */}
      <motion.div 
        className="md:min-w-[1000px] w-[50%] flex h-[85%] shadow-2xl"
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
        className="w-[50%] bg-grey2 flex flex-col justify-between items-center
        font-poppins text-center"
        >
          <div className="w-full h-[90%] flex flex-col justify-evenly items-center">
            <img
            alt="profile"
            className="saturate-200 w-full max-w-[250px] rounded-full"
            src="assets/profile-image.jpg"
            />
            <p className="text-4xl font-semibold">
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
            <div className="border-b-4 border-blue w-[150px]"></div>
            <p className="text-xl text-gray-500">
              Full Stack Web Developer
            </p>
          </div>
          <div className="w-full h-[10%] bg-white flex justify-center items-center">
            <SocialMediaIcons/>
          </div>
        </div>

       {/* Right Side  */}
        <div
        className="bg-white w-[50%] p-4 flex flex-col justify-start "
        >
        <h className="text-4xl font-semibold p-2 m-2">
          About Me
        </h>
        <p className="text-gray-500 p-2 m-2">
          In 2020, I graduated from University of Calgary with a Bachelor's in Civil Engineering and started working as a cost consultant.
          I realised that this was not something I wanted to do for the rest of my life and started seeking for my true calling.
          <br></br>
          <br></br>
          Recently, I graduated from Lighthouse Labs Web Development Bootcamp where I learned how to utilize various programs and frameworks such as JavaScript, React, Ruby, etc. to create 
          web based applications. From this, I discovered passion for coding and knew that this is what I wanted to do for the rest of my life. 
        </p>
        {/* Anchor Links for Different Scenes */}
        <div className="w-full p-2 m-2 flex justify-start gap-4">
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