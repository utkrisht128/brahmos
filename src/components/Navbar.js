import react from "react";
 import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useState } from 'react';
export default function Navbar() {
  const [burger_class, setBurgerClass] = useState("bar unclicked")
  const [menu_class, setMenuClass] = useState("link")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked ) {
          setBurgerClass("bar clicked")
          setMenuClass("linkvisible")
      }
      else {
          setBurgerClass("bar unclicked")
          setMenuClass("linkhidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }
  return (
    <>
    <nav className="navbar">
        <div className="navbarinside">
          <ul className="logo">
            <li>
              <h1>
                <Link to="/home">Brahmos</Link>
              </h1>
            </li>
          </ul>
          <div className="openMenu" onClick={updateMenu}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
          <ul className={menu_class}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/notices">Notices</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className={menu_class}></div> */}
    </>
  );
}
