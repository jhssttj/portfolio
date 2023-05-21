import { useState } from "react";
import projectData from '../datas/projectData';
import useMediaQuery from "../hooks/useMediaQuery";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

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

  return (
    <div className="h-full w-full flex">

      {/* Main Section */}
      {isAboveSmallScreens?(
        <div style={{backgroundImage: `url(../assets/projects/${projectData[index].title}.png)`}} 
          className="h-full w-full bg-cover bg-center duration-500">
          <div className="relative w-[40%] m-2 p-4">
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
          className="h-full bg-cover bg-center duration-500 border-2 border-black">
          </div>
        </div>
      )}
        {/* <div className="relative top-[50%] -translate-x-0 translate-y-[-50%] text-2xl flex justify-between">
          <ArrowLeftCircle className="w-[50px] h-[50px] hover:" onClick={prevIndex} />
          <ArrowRightCircle className="w-[50px] h-[50px] hover:" onClick={nextIndex}/>
        </div> */}
    </div>
  )
}

export default ProjectSlideShow;