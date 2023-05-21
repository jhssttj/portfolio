import { useState } from "react";
import projectData from '../datas/projectData';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

const ProjectSlideShow = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className={`h-full bg-center bg-cover bg-${projectData[index].title}`}>
      <div className="flex justify-between border-2 border-black items-center h-full">
        <ArrowLeftCircle className="w-[50px] h-[50px] hover:bg-black"/>
        <ArrowRightCircle className="w-[50px] h-[50px] hover:bg-black"/>
      </div>
    </div>
  )
}

export default ProjectSlideShow;