import React from "react"
import '../App.css';



const Navbar=() =>{
  return (
    <div id="home">
    <nav className="navbar navbar-expand-lg navbar-light bg"  >
    <div className="container" >
  <a className="navbar-brand" href="#home">
  <img src="https://image.shutterstock.com/image-vector/phone-number-vector-icon-flat-260nw-606092714.jpg"
  alt="" width="30px" height="30px" borderRadius="2rem"/> +91 8889493223
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
  <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#Project">Project</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      </ul>
    
  </div>
  </div>
</nav>
    
    
</div>    
    
  )
}

export default Navbar;
