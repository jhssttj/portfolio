import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRight } from 'react-bootstrap-icons';

const Landing = () => {

  return (
    <section id="home" className="h-screen py-14 bg-cover4 bg-cover border-2 border-red flex flex-col justify-center">


          {/*Headings */}
          <motion.div
            className="md:ml-64 relative top-[-100px]"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.33}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="font-poppins text-6xl font-semibold">
              Hello there!
            </p>
            <p className="font-poppins text-xl mt-4 w-1/2">
              Thank you for diving into my website. Here, you can learn more about the man behind it all...
            </p>
          </motion.div>
          <motion.div
            className="md:ml-64 relative top-[-100px] flex justify-start mt-4" 
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
              className="gap-2 flex hover:text-white hover:fill-white border-2 border-white hover:fill-current"
              href="#contact"
            >
              <p className="font-poppins text-2xl font-semibold">
              Let's Go
              </p>
              <ArrowRight className="w-[32px] h-[32px]" />
            
            </AnchorLink>
          </motion.div>


    </section>
  )
}

export default Landing;