import './Skills.scss';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiWebpack, SiRedux } from 'react-icons/si';
import { FaSass, FaGitAlt } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills__container">
                <div className="section-type">Skills</div>
                <h2 className="skills__title">The skills, tools and technologies I am really good at:</h2>
                <div className="skills__list">
                    <div className="skills__list-item">
                        <SiHtml5 /><span>HTML</span>
                    </div>
                    <div className="skills__list-item">
                        <SiCss3 /><span>CSS</span>
                    </div>
                    <div className="skills__list-item">
                        <FaSass /><span>SASS</span>
                    </div>
                    <div className="skills__list-item">
                        <SiJavascript /><span>JavaScript</span>
                    </div>
                    <div className="skills__list-item">
                        <SiTypescript /><span>TypeScript</span>
                    </div>
                    <div className="skills__list-item">
                        <SiReact /><span>React</span>
                    </div>
                    <div className="skills__list-item">
                        <SiRedux /><span>Redux</span>
                    </div>
                    <div className="skills__list-item">
                        <SiWebpack /><span>Webpack</span>
                    </div>
                    <div className="skills__list-item">
                        <IoLogoFirebase /><span>FireBase</span>
                    </div>
                    <div className="skills__list-item">
                        <FaGitAlt /><span>Git</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;