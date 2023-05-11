import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
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
      <div className="w-full mx-auto bg-cover1">
        <div className="w-5/6 mx-auto">
          {selectedPage==="home"&&<Landing/>}
          {selectedPage==="skills"&&<MySkills/>}
          {selectedPage==="projects"&&<Projects/>}
          {selectedPage==="experiences"&&<Experiences/>}
          {selectedPage==="contact"&&<Contact/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
