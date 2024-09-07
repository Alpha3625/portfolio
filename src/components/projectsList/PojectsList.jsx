import './ProjectsList.scss';
import projects from '../../database/projects.json';
import ProjectsItem from '../projectsItem/ProjectsItem';

function Projects() {

    return (
        <>
            <section className="projects" id="projects">
                <div className="container">
                    <div className="section-type">Projects</div>
                    <h2 className="projects__title">Things I've built so far</h2>
                    <div className="projects__list">
                        {
                            projects.map((post, index) => <ProjectsItem key={index} post={post} />
                                // array.length !== 0 ?
                                //     <ProjectsItem key={index} post={post} /> : <p style={{color: "red"}}>There's nothing here yet</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;