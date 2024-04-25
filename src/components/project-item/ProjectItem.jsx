import './ProjectItem.scss';

const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="project-item__content">
                <h1 className="project-item__title">{props.post.title}</h1>
                <p className="project-item__stack">{props.post.stack}</p>
                <p className="project-item__description">{props.post.description}</p>
                <div className='project-item__links'>
                    <a href={props.post.deploy} className="deploy-btn" target="blank">Посмотреть</a>
                    <a href={props.post.source} className="source-btn" target="blank">Перейти в GitHub</a>
                </div>
            </div>
            <div className="project-item__content">
                <img className="project-item__img" src={props.post.image} alt="" />
            </div>
        </div> 
    );
}

export default ProjectItem;