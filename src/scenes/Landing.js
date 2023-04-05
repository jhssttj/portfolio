import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

      {/*Image Section */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32 border-2">
          {isAboveMediumScreens
          ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] before:h-full before:border-4 before: border-blue before:z-[-1] before:rounded-r-xl"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-1000 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
          )
          : (
          <img
          alt="profile"
          className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          src="assets/profile-image.png"
          />
          )}
        </div>

        {/*Main Section */}
      <div>
        <div className="z-30 w-1/2 mt-12 md:mt-32">
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
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Kevin {""}
              <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
                Lee
              </span>
            </p>

            <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Thank you for visiting my website! I am formerly a civil engineering graduate from University of Calgary who have recently took interest in web development.
            Recently, I graduated from Lighthouse Labs Web Development Bootcamp where I learned how to utilize various programs and frameworks such as JavaScript, React, Ruby, etc. to create web based applications. With coding, I feel very rewarded for solving challenging problems using both creativity and logic. I also enjoy that there is always endless amount of content and skills to learn in this industry. 
            Through this learning, I discovered passion for coding and knew that this is what I wanted to do for the rest of my life. 
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
           transition={{delay:0.2, duration:0.5}}
           variants={{
             hidden: {opacity: 0, x: -50},
             visible: {opacity: 1, x: 0}
           }}
          > 
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={()=>setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={()=>setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
            >
              Let's talk.
            </div>
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
      </div>
    </section>
  )
}

export default Landing;