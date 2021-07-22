import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import { Fragment } from "react";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Skillls from "./component/Skillls";

function App() {
  return (
    <Fragment className="section">
   
    <Navbar/>
    <Header/>
    <Project/>
    <Skillls/>
    <Contact/>
    </Fragment>
  );
}

export default App;
