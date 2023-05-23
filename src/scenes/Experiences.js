import {motion} from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import experienceData from "../datas/experienceData";
import useMediaQuery from "../hooks/useMediaQuery";

const Experiences = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 480px");

  const renderExperience = experienceData.map((data,index) => {
    return(
    <TimelineItem key={index}>
      <TimelineOppositeContent
        sx={{m: 'auto 0'}}
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
        variant="body2"
        className={`${data.style===1?("bg-gray-200"):("bg-blue")} shadow-xl rounded-lg`}
      >
        <p className={`xs:text-xl xxs:text-base text-sm font-poppins ${data.style===1?(""):("text-white")}`}>
          {data.name}
        </p>
        <p className={`xxs:text-sm text-xs font-poppins ${data.style===1?(""):("text-white")}`}>{data.role}</p>
      </TimelineContent>
    </TimelineItem>
    )
  })

  const renderExperienceSm = experienceData.map((data,index) => {
    return(
    <TimelineItem key={index}>
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
        variant="body2"
        className={`${data.style===1?("bg-gray-200"):("bg-blue")} shadow-xl rounded-lg`}
      >
        <p className={`xs:text-xl xxs:text-base text-sm font-poppins ${data.style===1?(""):("text-white")}`}>
          {data.name}
        </p>
        <p className={`xxs:text-sm text-xs font-poppins ${data.style===1?(""):("text-white")}`}>{data.role}</p>
        <p className={`xxs:text-sm text-xs font-poppins ${data.style===1?(""):("text-white")}`}>{data.date}</p>
      </TimelineContent>
    </TimelineItem>
    )
  })


  return(
    <section id="experiences" className="flex justify-center items-start md:h-screen md:min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%] w-full
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
        <div className="bg-white md:h-full flex flex-col items-center xs:justify-center justify-start">
              {isAboveSmallScreens
              ?(
                <div>
                  <Timeline position="alternate">
                    {renderExperience}
                  </Timeline>
                </div>
                )
                :(
                  <div>
                  <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}>
                    {renderExperienceSm}
                  </Timeline>
                </div>)}
        </div>
      </motion.div>
    </section>
  )
}

export default Experiences;