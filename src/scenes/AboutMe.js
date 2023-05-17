import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const AboutMe = () => {
  return (
    <section id="about" className="py-24 flex flex-col items-center ">

        {/*Main Section */}
      <div className="w-1/2 flex border-2 border-black">

          <motion.div
                initial="hidden"
                whileInView="visible"
                className="min-h-[150px] w-full z-10 text-center flex flex-col justify-center bg-grey2 border-2 border-black"
                viewport={{once:true, amount:0.33}}
                transition={{duration:1}}
                variants={{
                  hidden: {opacity: 0, x: -50},
                  visible: {opacity: 1, x: 0}
                }}
              >
            <img
              alt="profile"
              className="saturate-200 z-10 w-full max-w-[300px] md:max-w-[600px] object-contain pl-4 rounded-full"
              src="assets/profile-image.jpg"
              />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="md:flex md:justify-center bg-grey pt-4 mt-12"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
          <div className="px-4 ">
            <div className="m-2">
              <p className="text-2xl font-semibold">Canada</p>
              <p className="text-lg ">March 2003</p>
              <p className="text-base text-gray-500 font-not">
                Our family left South Korea and immigrated to Canada in hopes for new opportunities and a better future.
                We decided to settle in Calgary, Alberta and have been living here for the past 20 years.
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">University of Calgary</p>
              <p className="text-lg ">September 2014 - April 2020</p>
              <p className="text-base text-gray-500 font-not">
                I graduated from University of Calgary with a Bachelor's in Civil Engineering, specializing transportation engineering and project management.
                Throughout my academic years, I also participated in student clubs, volunteer programs and internship at various companies.
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">Post-Graduate</p>
              <p className="text-lg ">June 2020 - August 2022</p>
              <p className="text-base text-gray-500 font-not">
                After graduation, I landed a job in the engineering field. Overtime however, I realised that this was not something I wanted to do for
                the rest of my life. I wanted to find my true calling. After some thoughts and research, I decided to go back to learning. 
              </p>
            </div>
            <div className="m-2">
              <p className="text-2xl font-semibold">Lighthouse Bootcamp</p>
              <p className="text-lg ">September 2022 - December 2022</p>
              <p className="text-base text-gray-500 font-not">
                I decided to enroll in the Lighthouse Web Development Bootcamp to see if coding was something I was passionate for (And it was!). I learned to utilize various 
                programs and frameworks to create web applications of my choice. After 4 month, I successfully graduated from the bootcamp with a Diploma.
              </p>
            </div>
          </div>

            

          </motion.div>
{/* 
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
          </motion.div> */}
        </div>
    </section>
  )
}

export default AboutMe;