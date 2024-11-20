import './ProjectsItem.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoIosLink } from "react-icons/io";
import ImageWithFallback from '../../ImageWithFallback/ImageWithFallback';
import PropTypes from 'prop-types';

const ProjectItem = (propTypes) => {
    return (
        <div className="project-item">
            {
                <ImageWithFallback className="project-item__img" src={propTypes.post.image} alt={propTypes.post.image} />
            }
            <div className="project-item__content">
                <h3 className="project-item__title">{propTypes.post.title}</h3>
                <div className="project-item__stack">
                    {propTypes.post?.stack.map((data, index) =>
                        <div className="project-item__stack-item" key={index}>{data}</div>
                    )}
                </div>
                <div className="project-item__links">
                    <div className="project-item__links-item">
                        <IoIosLink className="icon" />
                        <a href={propTypes.post.deploy} target="blank">Live Preview</a>
                    </div>
                    <div className="project-item__links-item">
                        <AiOutlineGithub className="icon" />
                        <a href={propTypes.post.source} target="blank">View Code</a>
                    </div>
                </div>
            </div>
        </div> 
    );
};

ProjectItem.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        stack: PropTypes.arrayOf(PropTypes.string).isRequired,
        deploy: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
    }).isRequired,
};


export default ProjectItem;