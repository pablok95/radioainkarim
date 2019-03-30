import React from 'react';
import { Link } from "react-router-dom";


const FooterNav = () => {
    return (
        <ul>
            <li>
                <Link to="/" title="Strona główna">Strona główna</Link>
            </li>
            <li>
                <Link to="/o-radiu" title="O radiu">O radiu</Link>
            </li>
            <li>
                <Link to="/ramowka" title="Ramówka">Ramówka</Link>
            </li>
            {/* <li>
                <Link to="/aktualnosci" title="Aktualności">Aktualności</Link>
            </li> */}
            <li>
                <Link to="/audycje" title="Audycje">Audycje</Link>
            </li>
            <li>
                <Link to="/wolontariusze" title="Wolontariusze">Wolontariusze</Link>
            </li>
            <li>
                <Link to="/zarzad" title="Zarząd">Zarząd</Link>
            </li>
            <li>
                <Link to="/kontakt" title="Kontakt">Kontakt</Link>
            </li>
            <li>
                <Link to="/polityka-prywatnosci" title="Polityka prywatności">Polityka prywatności</Link>
            </li>
        </ul>
    );
}

export default FooterNav;

