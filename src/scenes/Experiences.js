import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";

const Experiences = () => {
  const experiencesStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
  justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="experiences" className="pt-32 pb-16">
      {/*Heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-center mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden: {opacity: 0, scale: 0.8},
          visible: {opacity: 1, scale: 1}
        }}
      >

        <p className="font-playfair font-semibold text-4xl">
          My <span className="text-red">EXPERIENCES</span>
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="mx-auto w-1/2" />
        </div>
      </motion.div>
      {/*Experience Sections */}
      <div className="md:flex md:justify-between gap-8 relative">
        <motion.div
          className={`bg-blue ${experiencesStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
           <img className="bg-white relative bottom-20" alt="AltusGroup" src="../assets/AltusGroup.png"/>
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            Random text of testimonial goes here
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${experiencesStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2, duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            Random text of experiences goes here
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${experiencesStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.4, duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences;