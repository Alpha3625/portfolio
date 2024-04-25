import React from 'react';
import './Skills.scss';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiGithub, SiBootstrap } from 'react-icons/si';
import { FaSass, FaGitAlt } from 'react-icons/fa';
import { DiGulp } from 'react-icons/di';

function Skills() {
        return (
            <section className="section section-skills" id="skills">
                <div className="container">
                    <div className="section__header">
                        <h1 className="section__title">Технические навыки</h1>
                    </div>

                    <div className="skills">
                        <div className="skills__item">
                            <SiHtml5 /><span>HTML</span>
                        </div>

                        <div className="skills__item">
                            <SiCss3 /><span>CSS</span>
                        </div>

                        <div className="skills__item">
                            <FaSass /><span>SASS</span>
                        </div>

                        <div className="skills__item">
                            <SiJavascript /><span>JavaScript</span>
                        </div>

                        <div className="skills__item">
                            <SiTypescript /><span>TypeScript</span>
                        </div>

                        <div className="skills__item">
                            <SiReact /><span>React</span>
                        </div>

                        <div className="skills__item">
                            <SiBootstrap /><span>Bootstrap</span>
                        </div>

                        <div className="skills__item">
                            <DiGulp /><span>Gulp</span>
                        </div>

                        <div className="skills__item">
                            <FaGitAlt /><span>Git</span>
                        </div>

                        <div className="skills__item">
                            <SiGithub /><span>GitHub</span>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Skills;