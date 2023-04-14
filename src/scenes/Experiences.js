import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";

const Experiences = () => {
  const experiencesStyles = `mx-auto md:w-1/3 max-w-[400px] h-auto flex flex-col p-2
  justify-start mt-7`;

  const titleContainer = "flex md:justify-start items-center w-full mt-3" 
  const imageStyles = 'bg-white mx-4 w-1/3'
  const roleStyles = "mr-2 font-playfair text-xl xs:text-3xl font-semibold w-2/3 text-center"
  const paraStyles = 'font-playfair text-left text-m sm:text-xl m-4'

  return (
    <section id="experiences" className="pt-32">
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
      <div className="md:flex md:justify-between gap-8 sm:grid md:grid-cols-3 sm:grid-cols-2">
        <motion.div
          className={`bg-blue ${experiencesStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <div className={titleContainer}>
           <img className={imageStyles} alt="AltusGroup" src="../assets/Experiences/AltusGroup.png"/>
          <p className={roleStyles}>Cost Consultant</p>
          </div>
          <li className={paraStyles}>
            Using estimating software to perform take-off of architectural, structural and site related quantities
            (Calgary BMO Centre Renovation, Winnipeg Airport Facility Renovation, etc.).
          </li>
          <li className={paraStyles}>
            Using given general design and specification to ensure accurate estimate and details.
          </li>
          <li className={paraStyles}>
            Inputting/reconciling construction cost/budget reports for projects ranging from $20,000 to $300,000,000.
          </li>
        </motion.div>

        <motion.div
          className={`bg-red ${experiencesStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2, duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <div className={titleContainer}>
           <img className={imageStyles} alt="AltusGroup" src="../assets/Experiences/ImperialOil.png"/>
          <p className={roleStyles}>Co-op Student</p>
          </div>
          <li className={paraStyles}>
          Given the role of a project manager to plan and execute over 30 Cathodic Protection projects for Canada Fuel Operation – Pipeline
          Integrity division.
          </li>
          <li className={paraStyles}>
            Create Authorization for Expenditure (AFE) documents to have funding of up to $600,000 for new projects approved.
          </li>
          <li className={paraStyles}>
            Cost validate contractor’s quote to justify spending and identify any potential unrealistic spending to reduce overall cost by 20%.
          </li>
        </motion.div>

        <motion.div
          className={`bg-yellow ${experiencesStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.4, duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <div className={titleContainer}>
           <img className={imageStyles} alt="AltusGroup" src="../assets/Experiences/MapleReinders.png"/>
          <p className={roleStyles}>Project Coordinator</p>
          </div>
          <li className={paraStyles}>
          Review shop drawings and submitting to confirm compliance with specification and 
          general design for Calgary based projects (CBE Springbank K-9 School, Calgary Compost Facility, etc.).
          </li>
          <li className={paraStyles}>
          Assist Project Manager and Superintendent in tracking issues, changes in condition, 
          request for information and change orders to mitigate risk of schedule delay.
          </li>
          <li className={paraStyles}>
          Perform QA/QC tasks such as completing handover forms and Non-Conforming Reports.
          </li>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences;