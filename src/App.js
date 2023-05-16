import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import AboutMe from './scenes/AboutMe';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Experiences from './scenes/Experiences';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import {useState} from 'react';

function App() {
  const [selectedPage, setPage] = useState("home");

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setPage={setPage}
      />
      <div className="w-full mx-auto">
        <div className="w-full mx-auto">
          <Landing/>
        </div>
        <div className="w-full mx-auto">
          <AboutMe/>
        </div>
        <div className="w-5/6 mx-auto">
          <MySkills/>
        </div>
        <div className="w-5/6 mx-auto">
          <Projects/>
        </div>
        <div className="w-5/6 mx-auto">
          <Experiences/>
        </div>
        <div className="w-5/6 mx-auto">
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
