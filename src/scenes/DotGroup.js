import {Link} from 'react-scroll'

const DotGroup = () => {


  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='home'
        href= '#home'
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='skills'
        href= '#skills'
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='projects'
        href= '#projects'
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='experiences'
        href= '#experiences'
    />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        activeClass="dotActive"
        smooth spy to ='contact'
        href= '#contact'
    />
    </div>
  )
}

export default DotGroup;