import './ProjectsList.scss';
import projects from '../../database/projects.json';
import ProjectsItem from '../projectsItem/ProjectsItem';
import StubEmptyList from '../stub-empty-list/StubEmptyList';

function Projects() {

    return (
        <>
            <section className="projects" id="projects">
                <div className="container">
                    <div className="section-type">Projects</div>
                    <h2 className="projects__title">Things I've built so far</h2>
                    <div className="projects__list">
                        {
                            projects.length !== 0 ?
                                projects.map((post, index) => <ProjectsItem key={index} post={post} />) :
                                <StubEmptyList />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;