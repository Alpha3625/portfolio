import './Contacts.scss';
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import img from '../../assets/images/3dCharacter.png';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <div className="contacts__list">
                        <ul>
                            <li>
                                <h2>Contacts:</h2>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <FaPhoneAlt className="contacts__icon" />&nbsp;&nbsp;
                                        <a href="tel:+79284467650">+7(928)446-76-50</a>
                                    </li>
                                    <li>
                                        <FaTelegramPlane className="contacts__icon" />&nbsp;&nbsp;
                                        <a href="https://t.me/Anbu5656" target="_blank" rel="noreferrer">https://t.me/Anbu5656</a>
                                    </li>
                                    <li>
                                        <MdAlternateEmail className="contacts__icon" />&nbsp;&nbsp;
                                        <a
                                            href="mailto:work.email7997@gmail.com&&cc=work.email7997@gmail.com?"
                                            target="_blank"
                                            rel="noreferrer">work.email7997@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="contacts__img">
                        <img src={img} alt=""/>
                    </div>
                </div>

                <p>Thanks for your time!</p>
            </div>
        </section>
    );
}

export default Contacts;