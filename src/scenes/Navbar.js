import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import {Link} from "react-scroll"
import { List, X } from 'react-bootstrap-icons';

const LinkRender = ({ isAboveSmallScreens,page}) => {
  const upperCasePage = page.toUpperCase();
  const activeClass = (isAboveSmallScreens? "active":"activeMenu");
  const activeClassName = (isAboveSmallScreens 
      ? "text-gray-400 hover:text-white hover:border-b-2 hover:border-white active:bg-white active:text-black flex justify-center items-center w-full h-full text-center "
      :"hover:text-white hover:border-b-2 hover:border-white active:text-black active:bg-white border-b-2 border-gray-400 text-gray-400")
  return (
    <Link
        className={`${activeClassName}`}
        activeClass={`${activeClass}`}
        href={`#${page}`}
        smooth spy to= {`${page}`}
    >
      {upperCasePage}
    </Link>
  )
}

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  const navBarIconClass = (isAboveSmallScreens? "justify-center":"justify-end")
  return (
    <nav className={`bg-black border-y-8 border-black z-40 w-full h-[50px] fixed top-0`}>
      <div className={`${navBarIconClass} flex items-center mx-auto w-full h-full`}>
        {/*Large Screen NavBar*/}
        {isAboveSmallScreens 
        ? 
          (<div className="flex justify-between font-poppins text-base text-white w-3/4 h-full">
            <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="home"
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="skills"
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="projects"
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="experiences"
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="contact"
            />
          </div>)
        : 
          (<button
            className="rounded-full p-2 mr-[5%] mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <List className="w-[36px] h-[36px] fill-gray-400 rounded-full hover:bg-gray-400 hover:fill-white active:fill-black active:bg-white"/>
          </button>) 
        }
        {/* Small Screen Menu */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 h-full bg-black w-[300px] h-[500px]">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <X className="w-[36px] h-[36px] fill-gray-400 rounded-full hover:bg-gray-600 hover:fill-white active:fill-black active:bg-white"/>          
              </button>
            </div>
            <div className="flex flex-col gap-8 ml-[33%] text-2xl font-poppins">
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="home"
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="skills"
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="projects"
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="experiences"
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="contact"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;