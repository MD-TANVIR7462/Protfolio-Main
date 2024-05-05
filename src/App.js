import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,

} from "react-router-dom";



import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
// import NavBar from "./components/Navbar/Navbar";
import Benner from "./pages/Benner";
import Footer from "./components/Footer/Footer";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>

        <ScrollToTop />
        {/* <NavBar></NavBar> */}

        <Benner></Benner>
        <MainPage></MainPage>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
