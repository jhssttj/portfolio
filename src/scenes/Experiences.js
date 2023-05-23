import {motion} from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import experienceData from "../datas/experienceData";

const Experiences = () => {

  const renderExperience = experienceData.map((data) => {
    return(
    <TimelineItem>
      <TimelineOppositeContent
        sx={{m: 'auto 0'}}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <p className="font-poppins text-gray-500 text-sm">
          {data.date}
        </p>
      </TimelineOppositeContent>
      <TimelineSeparator className="mx-4">
        <TimelineConnector className="h-[25px]"/>
        <TimelineDot
          sx={{background:"#E5E7EB"}}
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center">
            <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-[50px] h-[50px] rounded-full shadow-xl" alt={data.name} src={data.image}/>
              </a>
          </div>
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent 
        sx={{m:'auto 0',}} 
        align=""
        variant="body2"
        className="bg-gray-200 shadow-xl"
      >
        <p className="text-xl font-poppins">
          {data.name}
        </p>
        <p className="text-gray-500 font-poppins">{data.role}</p>
      </TimelineContent>
    </TimelineItem>
    )
  })

  return(
    <section id="experiences" className="flex justify-center items-start sm:h-screen sm:min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%]
          md:h-[75%] h-[100%] shadow-xl flex flex-col bg-white md:m-24"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
        {/* Title Section */}
        <div className="flex flex-col justify-start items-center bg-grey2 text-center">
            <p className="text-4xl font-semibold p-2 md:m-2 md:mt-8 mt-16">
              Experiences
            </p>
            <div className="border-b-4 border-blue w-[150px] mb-4"></div>
        </div>

        {/* Timeline Exp Section */}
        <div className="bg-white h-full flex flex-col items-center justify-center">
          <div className="">
            <Timeline position="alternate">
              {renderExperience}
            </Timeline>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experiences;