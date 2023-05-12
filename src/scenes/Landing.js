import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BoxArrowDownRight } from 'react-bootstrap-icons';

const Landing = () => {

  return (
    <section id="home" className="md:h-screen sm:h-screen xs:h-screen
      md:bg-cover sm:bg-fill sm:bg-right-top
      py-14 bg-cover4 flex flex-col justify-center
      ">


          {/*Headings */}
          <motion.div
            className="relative top-[-100px] sm:ml-[10%] border-2 border-black text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="font-poppins xs:text-6xl font-semibold">
              Hello there!
            </p>
            <p className="font-poppins text-2xl mt-4">
              Thank you for visting my website. It would mean a lot if you could take the time to get to know me...
            </p>
          </motion.div>
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
              hover:fill-white hover:fill-current animate-none hover:animate-bounce"
              href="#contact"
            >
              <p className="font-poppins text-2xl font-semibold">
                About Me
              </p>
              <BoxArrowDownRight className="w-[32px] h-[32px]" />
            
            </AnchorLink>
          </motion.div>


    </section>
  )
}

export default Landing;