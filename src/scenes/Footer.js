import SocialMediaIconsW from "../components/SocialMediaIconsW";

const Footer = () => {
  return (
    <footer className="xs:h-28 h-auto bg-black flex">
      <div className="w-5/6 mx-auto flex sm:justify-between justify-center items-center flex-col xs:flex-row gap-4">
        <SocialMediaIconsW/>
        <div className="md:flex justify-center flex-col mb-2 xs:text-start text-center">
          <p className="text-2xl text-white">Kevin Lee</p>
          <p className="text-md text-white">@2023 KEVIN LEE. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;