import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const AboutMe = () => {


  

  return (
    <section id="about" className="flex flex-col gap-16 md:h-full py-14">
      {/*Image Section */}
      <motion.div
            initial="hidden"
            whileInView="visible"
            className="md:flex md:justify-center z-10 mt-4 md:mt-4"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="text-6xl font-semibold m-2 text-center">
              Kevin Lee
            </p>
            <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-1000 z-10 w-full max-w-[300px] rounded-full"
            src="assets/profile-image.jpg"
            />
      </motion.div>

        {/*Main Section */}
      <div className="z-30 basis-2/5 mt-4 md:mt-4">
  
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
            <div className="m-2">
              <p className="text-2xl font-semibold">Canada</p>
              <p className="text-lg text-gray-400">March 2003</p>
              <p className="text-base">
                Our family left South Korea and immigrated to Canada in hopes for new opportunities and a better future.
                We decided to settle in Calgary, Alberta and have been living here for the past 20 years.
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">University of Calgary</p>
              <p className="text-lg text-gray-400">September 2014 - April 2020</p>
              <p className="text-base">
                I graduated from University of Calgary with a Bachelor's in Civil Engineering, specializing transportation engineering and project management.
                Throughout my academic years, I also participated in student clubs, volunteer programs and internship at various companies.
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">Post-Graduate</p>
              <p className="text-lg text-gray-400">June 2020 - August 2022</p>
              <p className="text-base">
                After graduation, I landed a job in the engineering field. Overtime however, I realised that this was not something I wanted to do for
                the rest of my life. I wanted to find my true calling. After some thoughts and research, I decided to go back to learning. 
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">Lighthouse Bootcamp</p>
              <p className="text-lg text-gray-400">September 2022 - December 2022</p>
              <p className="text-base">
                I decided to enroll in the Lighthouse Web Development Bootcamp to see if coding was something I was passionate for (And it was!). I learned to utilize various 
                programs and frameworks to create web applications of my choice. After 4 month, I successfully graduated from the bootcamp with a Diploma.
              </p>
            </div>

            

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