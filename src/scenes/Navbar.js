import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import {Link} from 'react-scroll'

const LinkRender = ({ page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <Link
        activeClass="active"
        href={`#${lowerCasePage}`}
        smooth spy to= {`${lowerCasePage}`}
    >
      {page}
    </Link>
  )
}

const Navbar = ({ selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  const navBarIconClass = (isAboveSmallScreens? "justify-center":"justify-end")

  return (
    <nav className={`bg-red z-40 w-full fixed top-0 py-4`}>
      <div className={`${navBarIconClass} flex items-center mx-auto w-full`}>
        {/*Desktop Nav*/}
        {isAboveSmallScreens 
        ? 
          (<div className="flex justify-between font-opensans text-sm font-semibold w-1/2">
            <LinkRender
              page="Home"
            />
             <LinkRender
              page="Skills"
            />
             <LinkRender
              page="Projects"
            />
             <LinkRender
              page="Experiences"
            />
             <LinkRender
              page="Contact"
            />
          </div>)
        : 
          (<button
            className="rounded-full bg-red p-2 mr-[5%]"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>)
        }
        {/* Menu Popup */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 h-full bg-blue w-[300px]">
            {/*close icon */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg"/>           
              </button>
            </div>
            {/*menu items*/}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <LinkRender
                page="Home"                
              />
              <LinkRender
                page="Skills"                
              />
              <LinkRender
                page="Projects"                
              />
              <LinkRender
                page="Experiences"                
              />
              <LinkRender
                page="Contact"                
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;