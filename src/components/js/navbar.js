import React, {useState} from "react";
import "../css/navbar.css";
import {
  Github,
  Person,
  Laptop,
  Mail,
  BarsSolid,
  Close,
} from "../../assetComponent";

const icon_height = "2vw";
const icon_width = "2vw";

const Navbar = ({setNavbar}) => {
  const [open, setOpen] = useState(false);

  const BtnPress = () => {
    console.log("pressed");
    setOpen(!open);
    setNavbar(!open);
  };
  return (
    <>
      <div className="navContainer">
        <div className="logo">
          <p>AP.</p>
        </div>
        <nav className="main-nav">
          <a className="nav-item-wrapper" href="#about">
            <div className="nav-item-wrapper-div">
              <Person />
            </div>
          </a>
          <a className="nav-item-wrapper" href="l">
            <div className="nav-item-wrapper-div">
              <Laptop />
            </div>
          </a>
          <a className="nav-item-wrapper" href="l">
            <div className="nav-item-wrapper-div">
              <Github />
            </div>
          </a>
          <a className="nav-item-wrapper" href="l">
            <div className="nav-item-wrapper-div">
              <Mail />
            </div>
          </a>
          <button
            onClick={BtnPress}
            className="nav-item-wrapper phone"
            href="l"
          >
            <div className="nav-item-wrapper-div phone">
              <BarsSolid />
            </div>
          </button>
        </nav>
        <div className={!open ? " sideMenuNotOpen" : " sideMenuOpen"}>
          <div className="navMain">
            <button onClick={BtnPress} className="cross" href="l">
              <div>
                <Close />
              </div>
            </button>
          </div>
          <div className="linkContainer">
            <a
              className="link"
              href="https://aaditya-paul.github.io/test-react-portfolio2/#about"
            >
              <div>
                <p>ABOUT</p>
              </div>
            </a>
            <a className="link" href="https://google.com">
              <div>
                <p>SKILLS</p>
              </div>
            </a>
            <a className="link" href="#">
              <div>
                <p>PROJECTS</p>
              </div>
            </a>
            <a className="link" href="#">
              <div>
                <p>CONTACT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
