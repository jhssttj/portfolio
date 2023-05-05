import SocialMediaIconsW from "../components/SocialMediaIconsW";

const Footer = () => {
  return (
    <footer className="sm:h-28 h-auto bg-black flex">
      <div className="w-5/6 mx-auto flex sm:justify-between justify-center items-center flex-col xs:flex-row gap-2">
        <SocialMediaIconsW/>
        <div className="md:flex justify-center flex-col mb-2">
          <p className="font-poppins font-semibold text-2xl text-blue">Kevin Lee</p>
          <p className="font-poppins text-md text-blue">@2023 KEVIN LEE. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;