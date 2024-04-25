import React, { useState } from 'react';
import './Header.scss';
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';

function Header() {
    const [navBar, setNavBar] = useState(false);

   const changeBackground = () => {
    if (window.scrollY >= 10) {
        setNavBar(true);
    } else {
        setNavBar(false);
    }
   };

   window.addEventListener('scroll', changeBackground);

    return (
        <BrowserRouter>
            <header className={navBar ? "header active" : "header"}>
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">A.Artyom</div>
                        <nav className="nav">
                            <Link className="nav__link" to="#about" exact><nobr>Обо мне</nobr></Link>
                            <Link className="nav__link" to="#skills">Навыки</Link>
                            <Link className="nav__link" to="#projects">Портфолио</Link>
                            <Link className="nav__link" to="#footer">Контакты</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </BrowserRouter>
    );
}

export default Header;