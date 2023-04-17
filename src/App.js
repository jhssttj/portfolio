import { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import LineGradient from './components/LineGradient';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Experiences from './scenes/Experiences';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full sm:mb-10">
          <MySkills />
      </div>
      <br></br>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
          <Experiences />
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
