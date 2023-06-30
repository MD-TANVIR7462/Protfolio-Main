import React from 'react';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import Particle from '../components/Particle';
import Abouts from './Abouts';
import NavBar from '../components/Navbar/Navbar';






const MainPage = () => {
   return (
      <div className='main-container'>
         <span className="m-0 p-0 ">
          <Particle></Particle>
          <NavBar></NavBar>
         </span>
         <Skillset></Skillset>
         <Abouts></Abouts>
         <Projects></Projects>
         <Contact></Contact>
      
      </div>
   );
};

export default MainPage;