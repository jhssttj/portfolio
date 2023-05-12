import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = () => {

  return (
    <section id="home" className="h-screen py-14 bg-cover4 bg-cover border-2 border-red flex flex-col justify-center">


          {/*Headings */}
          <motion.div
            className="w-auto h-1/2 flex flex-col justify-center md:pl-64 m-8 relative top-[-150px] border-2 border-black"
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
            <p className="font-poppins text-xl mt-8 w-1/2">
              Thank you for diving into my website. Here, you can learn more about the man behind it all...
            </p>
          </motion.div>
          <motion.div
            className="w-auto h-1/2 md:pl-64 m-8 relative top-[-150px] border-2 border-black"
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
              className="font-poppins text-2xl font-semibold mt-8 border-2 border-black"
              href="#contact"
            >
              About Me
            </AnchorLink>
          </motion.div>


    </section>
  )
}

export default Landing;