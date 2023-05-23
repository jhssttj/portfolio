
import {motion} from "framer-motion";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const MySkills = () => {

  return(
    <section id="experiences" className="flex justify-center items-start sm:h-screen sm:min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%]
          md:h-[85%] h-[100%] shadow-xl flex flex-col bg-white md:m-24"
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

        {/* Skills Section */}
        <div className="bg-white flex flex-col items-center justify-start">
          <Timeline position="alternate">
            {/* Timeline 1 */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                Date
              </TimelineOppositeContent>
              <TimelineSeparator className="border-2 border-black">
                <TimelineConnector className="h-[25px]"/>
                <TimelineDot>
                  <div className="w-[50px] h-[50px] flex justify-center items-center">
                    <img className="w-[50px] h-[50px] rounded-full" alt="AltusGroup" src="../assets/experiences/AltusGroup.png"/>
                  </div>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent sx={{py: '12px', px:2}} className="border-2 border-black">
                <Typography variant="h6" component="span">
                  Hi
                </Typography>
                <Typography>Small words go here</Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Timeline 2 */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                Date
              </TimelineOppositeContent>
              <TimelineSeparator className="border-2 border-black">
                <TimelineConnector className="h-[25px]"/>
                <TimelineDot>
                  <div className="w-[50px] h-[50px] flex justify-center items-center">
                    <img className="w-[50px] h-[50px] rounded-full" alt="AltusGroup" src="../assets/experiences/AltusGroup.png"/>
                  </div>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent sx={{py: '12px', px:2}} className="border-2 border-black">
                <Typography variant="h6" component="span">
                  Hi
                </Typography>
                <Typography>Small words go here</Typography>
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </div>
      </motion.div>
    </section>
  )
}

export default MySkills;