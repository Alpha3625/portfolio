import './ProjectsItem.scss';
import StubPictures from '../stubPictures/StubPictures';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoIosLink } from "react-icons/io";

const ProjectItem = (props) => {

    return (
        <div className="project-item">
            {
                props.post.image !== "" ?
                    <img className="project-item__img" src={props.post.image} alt={props.post.title} /> :
                    <StubPictures />
            }
            <div className="project-item__content">
                <h3 className="project-item__title">{props.post.title}</h3>
                <p className="project-item__description">
                    {
                        props.post.description !== "" ? props.post.description :
                        "This is sample project description random things are here"
                    }
                </p>
                <div className="project-item__stack">
                    {props.post?.stack.map((data, index) =>
                        <div className="project-item__stack-item" key={index}>{data}</div>
                    )}
                </div>
                <div className="project-item__links">
                    <div className="project-item__links-item">
                        <IoIosLink className="icon" />
                        <a href={props.post.deploy} target="blank">Live Preview</a>
                    </div>
                    <div className="project-item__links-item">
                        <AiOutlineGithub className="icon" />
                        <a href={props.post.source} target="blank">View Code</a>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default ProjectItem;