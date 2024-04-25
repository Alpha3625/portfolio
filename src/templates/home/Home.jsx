import React from 'react';
import './Home.scss';

function Home() {
    return (
        <main className="home" id="home">
            <div className="holder">
                    {/* <video autoPlay loop muted className="video">
                        <source type="video/mp4" preload="auto" src={Home_bg_video} />
                    </video> */}
                    <div className="home__content">
                        <h1 className="home__title">Добро пожаловать!</h1>
                        {/* <h1 className="home__subtitle"></h1> */}
                    </div>
            </div>
        </main>
    );
}

export default Home;