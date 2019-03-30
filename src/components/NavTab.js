import React from 'react';
import Posts from '../layouts/Posts';
import Program from '../pages/Program';
import Donate from '../pages/Donate';



const NavTab = (props) => {
    const { items } = props;

    const handleChangeTab = (e) => {
        const targetBtn = e.target;
        const name = e.target.name;
        const navTabs = [...document.querySelectorAll('.nav-tab-btn')];
        const itemTabs = [...document.querySelectorAll('.tab')];

        navTabs.forEach(item => item.classList.remove('active'));
        targetBtn.classList.add('active');

        itemTabs.forEach(item => item.style.display = "none");
        document.getElementById(name).style.display = "block";
    }

    return (
        <section className="nav-tab-home">
            <div className="container">
                <div className="nav-tab">
                    <button name="aktualnosci" className="nav-tab-btn active" onClick={handleChangeTab} title="Aktualności">Aktualności</button>
                    <button name="program" className="nav-tab-btn" onClick={handleChangeTab} title="Ramówka">Ramówka</button>
                    <button name="wspomoz" className="nav-tab-btn font-weight-bold" onClick={handleChangeTab} title="Wspomóż nasze radio">Wspomóż nasze radio</button>
                </div>
            </div>

            <div id="aktualnosci" className="tab">
                <Posts items={items} title="Aktualności" limit={6} isPagination={false} />
            </div>

            <div id="program" className="tab" style={{ display: 'none' }}>
                <Program noImage={true} />
            </div>

            <div id="wspomoz" className="tab" style={{ display: 'none' }}>
                <Donate />
            </div>
        </section>
    );
}

export default NavTab;