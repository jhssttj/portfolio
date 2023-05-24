import { useState } from "react";
import projectData from '../datas/projectData';
import useMediaQuery from "../hooks/useMediaQuery";
import { ChevronRight, ChevronLeft, CircleFill } from 'react-bootstrap-icons';

const ProjectSlideShow = () => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    if (index === projectData.length-1) {
      setIndex(0)
    } else {
      setIndex(index+1)
    }
  }

  const prevIndex = () => {
    if (index === 0) {
      setIndex(projectData.length-1)
    } else {
      setIndex(index-1)
    }
  }

  const renderDot = projectData.map((data, dataIndex) => {
    return (<div key={dataIndex} className="p-1">
      <CircleFill 
        onClick={()=>setIndex(dataIndex)}
        className={`w-[10px] h-[10px] hover:cursor-pointer hover:fill-gray-600 ${index===dataIndex?("fill-gray-600"):("fill-gray-400")}`}/>
    </div>)
  })

  return (
    <div className="relative h-full w-full flex">
      {/* Arrow Section */}
      <div className="absolute z-20 sm:top-[50%] xxs:top-[60%] top-[85%] p-2">
        <ChevronLeft className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] bg-gray-200 bg-opacity-75 fill-gray-600 rounded-full p-2 flex justify-center items-center  
        hover:cursor-pointer hover:fill-gray-800 hover:bg-gray-300" onClick={prevIndex} />
      </div>
      <div className="absolute z-20 sm:top-[50%] xxs:top-[60%] top-[85%] right-0 p-2">
          <ChevronRight className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] bg-gray-200 bg-opacity-75 fill-gray-600 rounded-full p-2 flex justify-center items-center  
        hover:cursor-pointer hover:fill-gray-800 hover:bg-gray-300" onClick={nextIndex}/>
        </div>

        {/* Dot Section */}
        <div className="absolute flex z-40 bottom-0 flex justify-center w-full">
          <div className="flex bg-gray-200 bg-opacity-75 rounded-lg p-1 mb-1">
            {renderDot}
          </div>
        </div>

      {/* Main Section */}
      {isAboveSmallScreens?(
        <div style={{backgroundImage: `url(../assets/projects/${projectData[index].title}.png)`}} 
          className="h-full w-full bg-cover bg-center duration-500">
          <div className="z-30 flex flex-col justify-center relative w-[35%] m-2 p-4">
            <p className="text-3xl m-2">
              {projectData[index].title}
            </p>
            <p className="m-2">
              {projectData[index].description}
            </p>
            <div className="flex items-center gap-4">
              <a
              className="hover:opacity-50 transition duration-500"
              href={projectData[index].git}
              target="_blank"
              rel="noreferrer"
              >
              <img alt="projectgitlink" src="../assets/icons/github.png"/>
              </a>
              <a 
              href={projectData[index].link} 
              className="bg-blue text-white p-2 rounded-lg hover:bg-blueH shadow-2xl"
              rel="noopener noreferrer" target="_blank">
                Project Demo
              </a>
            </div>
          </div>
        </div>
      )
      :(
        <div className="h-screen max-h-[400px] xxs:max-h-[500px] xs:max-h-[625px] sm:max-h-none w-full flex flex-col items-center bg-gray-200">
          {/* Text Section */}
          <div className="z-30 flex flex-col justify-center text-center p-1 w-full xxs:h-auto h-full min-h-[152px] bg-grey">
            <p className="xxs:text-2xl text-xl">
              {projectData[index].title}
            </p>
            <p className="xxs:text-base text-sm">
              {projectData[index].description}
            </p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <a
              className="hover:opacity-50 transition duration-500"
              href={projectData[index].git}
              target="_blank"
              rel="noreferrer"
              >
              <img alt="projectgitlink" src="../assets/icons/github.png"/>
              </a>
              <a 
              href={projectData[index].link} 
              className="bg-blue text-white p-2 rounded-lg hover:bg-blueH shadow-2xl"
              rel="noopener noreferrer" target="_blank">
                Project Demo
              </a>
            </div>
          </div>
          {/* Picture Section */}
          <div style={{backgroundImage: `url(../assets/projects/${projectData[index].title}.png)`}} 
            className="w-full h-full bg-cover bg-right duration-500">
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectSlideShow;