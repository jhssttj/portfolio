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

function App() {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <div className="app bg-deep-blue">
      <Navbar/>
      <div className="w-5/6 mx-auto">
        {isAboveMediumScreens && (
          <DotGroup />
        )}
        <Landing/>
      </div>
      <LineBreak/>
      <div className="w-5/6 mx-auto">
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
      </div>
      <Footer/>
    </div>
  );
}

export default App;
