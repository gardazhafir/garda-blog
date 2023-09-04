import React from 'react';
import logo from './assets/images/Logo_G.png'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='pojok'>
                <a href="/"><img src={logo} alt="Logo"></img></a>
            </div>
            <div className="links">
                <a href="/resume"><b>Resume</b></a>
                <a href="/project"><b>Project</b></a>
            </div>
        </nav>
      );
}
 
export default Navbar;