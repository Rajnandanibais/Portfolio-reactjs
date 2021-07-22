import React from 'react'
import "./project.css"

function ProjectCard(project) {
  return (
    <div>
    <div className="project-card">
    <div className="project-info">
        <label className="project-title">{project.projectinfo[0]}</label>
        <img src={project.proimg} alt="" className="project-image"/>
        <div className="project-links">
            {project.projectinfo[1]&&<a className="project-link" href={project.projectinfo[1]}>
                <div className="link-btn">Demo</div>
            </a>}
            {project.projectinfo[2]&&<a className="project-link" href={project.projectinfo[2]}>
                <div className="link-btn"><i className="devicon-github-original"></i>GitHub</div>
            </a>}
            
        </div>
        <div className="project-para-container">
            <p className="project-para">{project.projectinfo[4]}</p>
        </div>
        <div className="project-tag-container">
            <div className="project-tags">
                {project.projectinfo[3].map((tag)=>{
                    return(
                        <label className="tag">{tag}</label>
                    );
                })}
            </div>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default ProjectCard
