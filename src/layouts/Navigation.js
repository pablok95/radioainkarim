import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavElement from '../components/NavElement';
// import logo from '../images/logoRadioAinKarim.png';
import logo from '../images/logo.svg';


const navItems = [
    { link: "/o-radiu", title: "O radiu", openNewWindow: false },
    { link: "/ramowka", title: "Ramówka", openNewWindow: false },
    { link: "/aktualnosci", title: "Aktualności", openNewWindow: false },
    { link: "/audycje", title: "Audycje", target: '_self' },
    { link: "/wolontariusze", title: "Wolontariusze", openNewWindow: false },
    { link: "http://www.skomielnaczarna.kapucyni.pl/nowa/", title: "Parafia", openNewWindow: true },
    { link: "/zarzad", title: "Zarząd", openNewWindow: false },
    { link: "/kontakt", title: "Kontakt", openNewWindow: false },
]

class Navigation extends Component {

    componentDidMount() {
        this.sticky = document.getElementById('sticky-js');
    }


    handleClick = (e) => {
        const icon = e.currentTarget;
        const nav = icon.parentNode.nextElementSibling;

        icon.classList.toggle('change');
        nav.classList.toggle('active');
    }

    render() {
        const navLinks = navItems.map((item, index) =>
            <NavElement
                key={index}
                navItems={item}
            />)

        return (
            <nav className="main-nav" id="sticky-js">

                <div className="container">
                    <div className="mobile">
                        <Link className="nav-link" to="/" title="Strona główna">
                            <img src={logo} alt="Radio Ain Karim" />
                        </Link>
                        <div className="menu-icon btn-nav-open" onClick={this.handleClick}>
                            <div className="icon bar1"></div>
                            <div className="icon bar2"></div>
                            <div className="icon bar3"></div>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link className="nav-list-item-link" to="/" title="Strona główna">
                                <img src={logo} alt="Logo Radia Ain Karim" />
                            </Link>
                        </li>
                        {navLinks}
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navigation;