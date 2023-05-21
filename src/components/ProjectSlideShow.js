import { useState } from "react";
import projectData from '../datas/projectData';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

const ProjectSlideShow = () => {

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
    <div className={`h-full `}>
      <div style={{backgroundImage: `url(../assets/projects/${projectData[index].title}.png)`}} className="border-2 border-blue h-full bg-cover"></div>
      {/* <img className="h-full w-full" src={`../assets/projects/${projectData[index].title}.png`} alt={projectData[index].title}/> */}
      <div className="absolute z-20 flex justify-between border-2 border-black items-center h-full">
        <ArrowLeftCircle className="w-[50px] h-[50px] hover:bg-black" onClick={prevIndex} />
        <ArrowRightCircle className="w-[50px] h-[50px] hover:bg-black" onClick={nextIndex}/>
      </div>
    </div>
  )
}

export default ProjectSlideShow;