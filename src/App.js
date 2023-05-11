import useMediaQuery from './hooks/useMediaQuery';
import LineBreak from './components/LineBreak';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Experiences from './scenes/Experiences';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import {useState} from 'react';

function App() {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [page, setPage] = useState("home");

  return (
    <div className="app bg-deep-blue">
      <Navbar
        page={page}
        setPage={setPage}
      />
      <div className="w-full mx-auto bg-cover1">
        <div className="w-5/6 mx-auto">
          {isAboveMediumScreens && (
            <DotGroup />
          )}
          {page==="home"&&<Landing/>}
          {page==="skills"&&<MySkills/>}
          {page==="projects"&&<Projects/>}
          {page==="experiences"&&<Experiences/>}
          {page==="contact"&&<Contact/>}
          {/* <Landing/> */}
        </div>
      </div>
      {/* <div className="w-5/6 mx-auto">
          <MySkills />
      </div>
      <br></br>
      <LineBreak/>
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <LineBreak/>
      <div className="w-5/6 mx-auto">
          <Experiences />
      </div>
      <LineBreak/>
      <div className="w-5/6 mx-auto md:h-[90%]">
          <Contact />
      </div> */}
      <Footer/>
    </div>
  );
}

export default App;
