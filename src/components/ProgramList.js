import React, { Component } from 'react';

const dayOfWeek = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

class ProgramList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            program: [],
            currentDay: '',
            reduceActive: true,
        }
    }
    componentDidMount() {
        this.getCurrentDay();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentDay !== this.state.currentDay) {
            document.querySelectorAll('.btn-nav').forEach(btn => {
                if (String(this.state.currentDay) === btn.name) {
                    btn.classList.add('accent-color');
                }
            });

            this.getProgram();
        }
    }

    getCurrentDay = () => {
        const currentDay = new Date().getUTCDay();

        this.setState({
            currentDay,
        })
    }

    getProgram = () => {
        const url = './api/program.json';

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let currentDay = this.state.currentDay;
                if (currentDay === 0) currentDay = 7;

                const program = [...data.program].filter(item => item.dayOfWeek === String(currentDay));

                this.setState({
                    program
                })
            })
            .catch(err => console.log(err))
    }

    handleChangeDay = (e) => {
        const elem = e.target;
        document.querySelectorAll('.btn-nav').forEach(btn => btn.classList.remove('accent-color'));
        elem.classList.add('accent-color');

        this.setState({
            currentDay: String(elem.name),
        })
    }

    handleClick = () => {
        this.setState(prevState => ({ reduceActive: !prevState.reduceActive }));
    }

    render() {
        const buttons = dayOfWeek.map((item, index) =>
            <button
                key={index}
                name={index + 1}
                className="btn-nav"
                onClick={this.handleChangeDay}
            >{item}
            </button>)

        const program = this.state.program.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="program-time">
                        <span>{`${item.startHour.substr(0, 5)} - ${item.endHour.substr(0, 5)}`}</span>
                    </td>
                    <td>{item.title}</td>
                </tr>
            )
        });

        const { reduceActive } = this.state;

        return (
            <>
                <div className="program-list">
                    <div className="btn-nav-wrapper">
                        {buttons}
                    </div>

                    <div className={reduceActive ? "reduce-height" : null}>
                        <table className="table table-sm">
                            <tbody>
                                {program}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className="btn btn-1" title="Pokaż/Schowaj program" onClick={this.handleClick}>{reduceActive ? 'Pokaż program' : 'Schowaj program'}</button>
            </>
        )
    }
}

export default ProgramList;