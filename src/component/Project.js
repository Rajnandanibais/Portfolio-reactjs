import React from 'react'
import {ProjectData} from "./Data"
import ProjectCard from './ProjectCard';
import "./project.css"

function Project() {
  const data=ProjectData;
  return (
      <div className="container">
     <section className="projects" id="Project">
     <div className="section-title">Projects</div>
     <div className="project-container">
         {data.map((project)=>{
             return(
                 <div>
                     <ProjectCard projectinfo={[project.title,project.demo,project.github,project.tags,project.about]}proimg={project.image}/>
                 </div>
             );   
         })}
     </div>
     <div className="morebtn"><a href="#home"><i class="fi-rr-plus"></i></a></div>
 </section>
 </div>
);
}
     


export default Project
