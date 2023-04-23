import {Link} from 'react-scroll'

const DotGroup = ({ selectedPage, setSelectedPage }) => {

  const selectedStyles =`relative bg-yellow before:absolute 
  before:w-6 before:h-6 before:rounded-full 
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='home'
        href= '#home'
        onClick={() => setSelectedPage("home")}
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='skills'
        href= '#skills'
        onClick={() => setSelectedPage("skills")}
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='projects'
        href= '#projects'
        onClick={() => setSelectedPage("projects")}
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='experiences'
        href= '#experiences'
        onClick={() => setSelectedPage("experiences")}
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='contact'
        href= '#contact'
        onClick={() => setSelectedPage("contact")}
    />
    </div>
  )
}

export default DotGroup;