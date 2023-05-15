import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const AboutMe = () => {


  

  return (
    <section id="about" className="md:flex md:justify-center gap-16 md:h-full py-14 border-2 border-red">
      {/*Image Section */}
      <motion.div
            initial="hidden"
            whileInView="visible"
            className=" border-2 border-black md:order-2 z-10 mt-4 md:mt-4"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-1000 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
            src="assets/profile-image.jpg"
            />
      </motion.div>

        {/*Main Section */}
      <div className="z-30 basis-2/5 mt-4 md:mt-4 border-2 border-purple">
          {/*Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="text-6xl font-poppins font-semibold z-10 text-center md:text-start">
                 Kevin Lee  
            </p>

            <p className="font-poppins mt-10 mb-7 text-base text-center md:text-start">
            On March 9th, 2003, our family left South Korea and immigrated to Canada, in hopes for new experiences, opportunities and a better future.
            At first, arriving in Canada presented us with a series of unique challenges. The adjustment to a new language, culture and social customs required lot of resilience.
            Overtime however, we approached each obstacle with diligence and gradually found ourself adjusting to Canada while never losing sight of our Korean heritage. 
            <br/>
            <br/>
            In 2020, I graduated from University of Calgary with a Bachelor's in Civil Engineering and landed a job relevant to the field.
            However, I quickly realised that this was not something I wanted to do for the rest of my life. 
            I had a desire to discover what I was truly passionate for. After some research and thoughts, I decided 
            to enroll in the Lighthouse Web Development bootcamp to see if web development was my true calling.
            <br/>
            <br/>
            From September 2022 to December 2022, the bootcamp taught me how to utilize various programs and frameworks such as JavaScript, React, 
            Ruby, and much more. With every challenge, I found myself using both creativity and logic to solve them. It was rewarding when I overcame the problems
            since I came up with the approach to the solution. Through this learning, 
            I discovered passion for coding and knew that this is what I wanted to do for the rest of my life. 
            <br/>
            <br/>
            Currently, I am seeking any web/software developing job opportunities as I look to integrate into the tech industry. 
            Please feel free to reach out to me for any potential openings or if you are interested in talking about coding and projects in general. 
            I would love to learn from other passionate developers!
            </p> 

          </motion.div>

          {/*Call to Action */}
          <motion.div
          className="flex mt-5 justify-center md:justify-start"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay:0.2, duration:1}}
           variants={{
             hidden: {opacity: 0, x: -50},
             visible: {opacity: 1, x: 0}
           }}
          > 
            <AnchorLink
              className="bg-blue text-deep-blue py-3 px-7 font-semibold hover:bg-blue 
              transition duration-500 font-poppins shadow-sd active:text-white hover:bg-yellow rounded-lg border-2 border-black"
              href="#contact"
            >
              Let's Chat
            </AnchorLink>
          </motion.div>

          <motion.div
           className="flex mt-5 justify-center md:justify-start"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay:0.4, duration:0.5}}
           variants={{
             hidden: {opacity: 0, x: -50},
             visible: {opacity: 1, x: 0}
           }}
          >
            <SocialMediaIcons/>
          </motion.div>
        </div>
    </section>
  )
}

export default AboutMe;