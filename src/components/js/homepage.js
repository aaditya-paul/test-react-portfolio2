import React, {useState} from "react";
import Trailer from "./trailer";
import Navbar from "./navbar";
import MainContent from "./mainContent";

const Home = () => {
  const [navBar, setNavbar] = useState(false);
  if (!navBar) {
    return (
      <>
        <Navbar setNavbar={setNavbar} />
        <Trailer />
        <MainContent />
      </>
    );
  } else {
    return (
      <>
        <Navbar setNavbar={setNavbar} />
      </>
    );
  }
};

export default Home;
