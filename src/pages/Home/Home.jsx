import './Home.scss';
import Photo from '../../assets/images/photo.png';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
            <section className="home container">
                <img className="home__img" src={Photo} alt="" />
                <div className="home__content">
                    <h1>Hi, my name is <span>Artyom</span></h1>
                    <h2>a frontend developer with passion for learning and creating.</h2>
                    <br />
                    <a
                        className="home__download-cv-button"
                        href="https://drive.usercontent.google.com/u/0/uc?id=1-guU_MFgFdCtMfuhqqphQPB3ngVRuBnR&export=download"
                        download="CV">Download CV</a>
                </div>
            </section>
            <Skills />
        </>
    );
}

export default Home;