import { useState } from "react";
import projectData from '../datas/projectData';
import useMediaQuery from "../hooks/useMediaQuery";
import { ChevronRight, ChevronLeft, CircleFill } from 'react-bootstrap-icons';
import {Link} from "react-scroll"

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

  const renderDot = projectData.map((data, index) => {
    return (<div key={index} className="p-1">
      <CircleFill 
        onClick={()=>setIndex(index)}
        className={`w-[10px] h-[10px] hover:cursor-pointer fill-gray-600 hover:fill-white`}/>
    </div>)
  })

  return (
    <div className="relative h-full w-full flex">
      {/* Arrow Section */}
      <div className="absolute z-20 top-[50%] p-2">
        <ChevronLeft className="w-[50px] h-[50px] bg-gray-200 bg-opacity-75 fill-gray-600 rounded-full p-2 flex justify-center items-center  
        hover:cursor-pointer hover:fill-gray-800 hover:bg-gray-300" onClick={prevIndex} />
      </div>
      <div className="absolute z-20 top-[50%] right-0 p-2">
          <ChevronRight className="w-[50px] h-[50px] bg-gray-200 bg-opacity-75 fill-gray-600 rounded-full p-2 flex justify-center items-center  
        hover:cursor-pointer hover:bg-gray-200" onClick={nextIndex}/>
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
          <div className="z-30 flex flex-col justify-center relative w-[35%] m-2 p-4 bg-gray-200 bg-opacity-75">
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
        <div>
          <div>
          <p className="text-2xl">
            {projectData[index].title}
          </p>
          <p>
            {projectData[index].description}
          </p>
          </div>
          <div style={{backgroundImage: `url(../assets/projects/${projectData[index].title}.png)`}} 
          className="h-full bg-cover bg-center duration-500">
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectSlideShow;