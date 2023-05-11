import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const LinkRender = ({ isAboveSmallScreens,page,setPage,selectedPage }) => {
  const upperCasePage = page.toUpperCase();
  const activeClass = (isAboveSmallScreens? "active":"activeMenu");
  const activeClassName = (isAboveSmallScreens 
      ? "hover:text-blue hover:border-b-4 hover:border-blue active:bg-blue active:text-black flex justify-center items-center w-full h-full text-center "
      :"hover:text-purple hover:border-b-2 hover:border-purple active:text-white active:border-white border-b-2 border-black")

  const className = "flex justify-center items-center w-full h-full text-center hover:text-blue hover:border-b-4 hover:border-blue active:bg-blue active:text-black"
  const classNameHover= selectedPage===page?"text-blue border-b-4 border-blue":""
  return (
    <li
        className={`${classNameHover} ${className}`}
        onClick={()=>{
          setPage(page)
          console.log(selectedPage)
        }}
    >
      {upperCasePage}
    </li>
  )
}

const Navbar = ({selectedPage, setPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px");
  const navBarIconClass = (isAboveSmallScreens? "justify-center":"justify-end")
  return (
    <nav className={`bg-black z-40 w-full h-[50px] fixed top-0`}>
      <div className={`${navBarIconClass} flex items-center mx-auto w-full h-full`}>
        {/*Desktop Nav*/}
        {isAboveSmallScreens 
        ? 
          (<div className="flex justify-between font-poppins text-sm font-semibold text-white w-3/4 h-full">
            <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="home"
              setPage={setPage}
              selectedPage={selectedPage}
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="skills"
              setPage={setPage}
              selectedPage={selectedPage}
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="projects"
              setPage={setPage}
              selectedPage={selectedPage}
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="experiences"
              setPage={setPage}
              selectedPage={selectedPage}
            />
             <LinkRender
              isAboveSmallScreens={isAboveSmallScreens}
              page="contact"
              setPage={setPage}
              selectedPage={selectedPage}
            />
          </div>)
        : 
          (<button
            className="rounded-full bg-blue p-2 mr-[5%] active:bg-white"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>)
        }
        {/* Menu Popup */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 h-full bg-blue w-[300px] h-[400px]">
            {/*close icon */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg"/>           
              </button>
            </div>
            {/*menu items*/}
            <div className="flex flex-col gap-8 ml-[33%] text-2xl text-black font-bold">
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="Home"                
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="Skills"                
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="Projects"                
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
                page="Experiences"                
              />
              <LinkRender
                isAboveSmallScreens={isAboveSmallScreens}
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