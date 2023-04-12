import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
        hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
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
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Experiences"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
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
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Experiences"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;