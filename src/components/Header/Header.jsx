import { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

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
        <header className={navBar ? "header active" : "header"}>
                <div className="header__inner container">
                    <div
                        className="header__logo">Portfolio</div>
                        
                    <nav className="nav">
                        <NavLink
                            to="/"
                            end
                            className={({isActive}) =>
                                isActive
                                ? "nav__link active"
                                : "nav__link"}>Home</NavLink>

                        <NavLink
                            to="/projects"
                            className={({isActive}) =>
                                isActive
                                ? "nav__link active"
                                : "nav__link"}>Projects</NavLink>

                        <NavLink
                            to="/contacts"
                            className={({isActive}) =>
                                isActive
                                ? "nav__link active"
                                : "nav__link"}>Contacts</NavLink>
                    </nav>
                </div>
        </header>
    );
}

export default Header;