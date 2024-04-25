import React from 'react';
import './About.scss';
import Photo from '../../assets/images/photo.jpg';
import { Link } from 'react-scroll';

function About() {
    return (
        <section className="section section-about" id="about">
            <div className="container">
                {/* <div className="section__header">
                    <h1 className="section__title">Обо мне</h1>
                </div> */}
                <div className="about">
                    <div className="about__img">
                            <img src={Photo} alt="" />
                    </div>
                    <div className="about__content">
                            <h1>Амбарцумян Артём</h1>
                            <h2>Junior Frontend Developer</h2>
                            {/* <br />
                            <p><span>Образование:</span> Бакалавр</p>
                            <p>РАУ - Российско-Армянский Университет</p>
                            <p>Факультет: Прикладная математика и информатика</p> */}
                            <br />
                            <div className="resume">
                                <Link className="resume__link" to="footer" smooth={true} duration={100}>&#8594; РЕЗЮМЕ &#8592;</Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;