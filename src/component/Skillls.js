import React from 'react'
import "./style.css"

function Skillls() {
  return (
<div className="main" id="skills">
 <div className="container-skills">
 <h1>Skills</h1>

 <p>Html5</p>
 <div className="container">
 <div className="skills html">90%</div>
 </div>
 <p>CSS</p>
<div className="container">
  <div className="skills css">80%</div>
</div>

<p>JavaScript</p>
<div className="container">
  <div className="skills js">65%</div>
</div>
<p>React Js</p>
 <div className="container">
 <div className="skills react">70%</div>
 </div>
<p>Phython</p>
<div className="container">
  <div className="skills php">60%</div>
</div>
 </div>


 <div className="container-edu">
<div className="left">
<h3>Bachelor of Engineering</h3>
<h4>Malwa institute of Technology</h4>
<h4>7.45CGPA</h4>
</div>

<div className="right">
<h3>High Secondary School</h3>
<h4>Advance Academy</h4>
<h4>58%</h4>
</div>

<div className="center">
<h3> Senior Secondary School</h3>
<h4>Advance Academy</h4>
<h4>7.2 CGPA</h4>
</div>

 </div>
 </div>
  )
}

export default Skillls;
