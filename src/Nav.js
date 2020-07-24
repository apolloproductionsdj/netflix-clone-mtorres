import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav-logo"
        src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png"
        alt="Neflix Logo"
      />
      <img 
        className="nav-avatar"
        src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;