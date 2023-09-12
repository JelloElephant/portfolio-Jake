import React from 'react';
import '../app.css'
import './portfolio.css'

const projects = [
    {
        id: 1,
        title: 'TechTrek',
        link: 'https://github.com/JelloElephant/TechTrek',
        gitHubLink: 'https://github.com/JelloElephant/TechTrek',
    },
    {
        id: 2,
        title: 'Thoughtblr',
        link: 'https://youtu.be/XB3e8q-mRno',
        gitHubLink: 'https://github.com/JelloElephant/Thoughtblr',
    },
    {
        id: 3,
        title: 'Daily-Planner',
        link: 'https://jelloelephant.github.io/Daily-Weather-Planner/',
        gitHubLink: 'https://github.com/JelloElephant/Daily-Weather-Planner',
    }
    
]
function Portfolio() {
    return(
        <div className="Demo">
            {projects.map((project, index) => (
                <div key={index} className="Card">
                    <h3>{project.title}</h3>
                    <div className="Links">
                        <a href= {project.link}>Demo</a>
                        <a href= {project.gitHubLink}>GitHub Link</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Portfolio