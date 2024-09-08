import React from 'react';
import './Footer.scss';
import img from '../../assets/images/3dCharacter.png';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__list">
                        <ul>
                            <li>
                                <h2>Contacts:</h2>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        Phone:&nbsp;&nbsp;<a href="tel:+79284467650">+7(928)446-76-50</a>
                                    </li>
                                    <li>
                                        Telegram:&nbsp;&nbsp;
                                        <a href="https://t.me/Anbu5656" target="_blank" rel="noreferrer">https://t.me/Anbu5656</a>
                                    </li>
                                    <li>
                                        Email:&nbsp;&nbsp;
                                        <a
                                            href="mailto:work.email7997@gmail.com&&cc=work.email7997@gmail.com?"
                                            target="_blank"
                                            rel="noreferrer">work.email7997@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>My resume:</h2>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <a
                                            href="https://sochi.hh.ru/resume/3fcd4e4aff0bac53fb0039ed1f6a384f6b5346"
                                            target="_blank"
                                            rel="noreferrer">Go to HeadHunter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://drive.google.com/file/d/1sAL44cZgE3wSlguGXtpxU-kbDHN9WtwD/view?usp=sharing"
                                            target="_blank"
                                            rel="noreferrer">View saved copy
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__img">
                        <img src={img} alt=""/>
                    </div>
                </div>

                <p>Thanks for your time!</p>
            </div>
        </footer>
    );
}

export default Footer;