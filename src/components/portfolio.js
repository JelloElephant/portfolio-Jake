import React from 'react';

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
        link: 'https://github.com/JelloElephant/Thoughtblr',
        gitHubLink: 'https://github.com/JelloElephant/Thoughtblr',
    },
    {
        id: 3,
        title: 'Daily-Planner',
        link: 'https://github.com/JelloElephant/Daily-Weather-Planner',
        gitHubLink: 'https://github.com/JelloElephant/Daily-Weather-Planner',
    }
    
]
function Portfolio() {
    return(
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <div>
                        <a href= {project.link}>Deployment</a>
                        <a href= {project.gitHubLink}>GitHub Link</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Portfolio