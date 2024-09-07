import React from 'react';
import './About.scss';
import Photo from '../../assets/images/photo.jpg';
import { Link } from 'react-scroll';

function About() {
    return (
        <section className="about container" id="about">
            <img className="about__img" src={Photo} alt="" />
            <div className="about__content">
                <h1>Hambartsumyan Artyom</h1>
                <h2>Junior Frontend Developer</h2>
                <br />
                <Link className="resume-link" to="footer" smooth={true} duration={100}>
                    &#8594; <span>Resume</span> &#8592;
                </Link>
            </div>
        </section>
    );
}

export default About;