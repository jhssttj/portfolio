import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowDown } from 'react-bootstrap-icons';

const Landing = () => {
  return (
    <section id="home" className="h-screen bg-cover 
      md:bg-cover1 sm:bg-cover1s xs:bg-cover1xs xxs:bg-cover1xxs bg-cover1xxxs
      flex flex-col py-56 sm:py-14 sm:justify-center items-center sm:items-start
      ">
          {/*Intro Title Text */}
          <motion.div
            className="relative top-[-100px] sm:ml-[10%] flex flex-col 
            items-center text-center sm:items-start sm:text-start"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="xs:text-6xl xxs:text-5xl text-3xl font-semibold">
              Hello there!
            </p>
            <p className="xs:text-xl xxs:text-lg text-sm mt-4 w-3/4 sm:w-1/2">
              Thank you for visting my website. It would mean a lot if you could take the time to get to know me...
            </p>
          </motion.div>
          {/*Intro Title Button */}
          <motion.div
            className="relative top-[-100px] flex justify-start mt-4 sm:ml-[10%]" 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <AnchorLink
              className="gap-2 flex border-2 border-black p-2 mt-4
              hover:fill-white hover:fill-current animate-none hover:animate-bounce rounded-lg"
              href="#about"
            >
              <p className="xs:text-2xl xxs:text-xl text-base font-semibold">
                About Me
              </p>
              <ArrowDown className="xs:w-[32px] xs:h-[32px] xxs:w-[24px] xxs:h-[24px] w-[16px] h-[16px]" />
            </AnchorLink>
          </motion.div>


    </section>
  )
}

export default Landing;