import React, { Component } from 'react';


class RadioStreamProgramInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProgram: [],
            currentDay: '',
            currentTime: '',
            start: '',
            end: '',
            title: '',
        }
    }

    componentDidMount() {
        this.getCurrentDate();
        this.refresh = setInterval(this.checkProgram, 60000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentDay !== this.state.currentDay) {
            this.getProgram();
        }
    }

    componentWillUnmount() {
        clearInterval(this.refresh);
    }

    checkProgram = () => {
        this.getCurrentDate();
        this.getProgram();
    }

    getCurrentDate = () => {
        const date = new Date();
        const currentTime = (date.getHours() * 60 * 60) + (date.getMinutes() * 60) + date.getSeconds();
        const currentDay = date.getUTCDay();

        this.setState({
            currentDay,
            currentTime,
        });
    }

    getProgram = () => {
        const url = `./api/programs/${this.state.currentDay}.json`;

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.getCurrentProgram(data.program);
            })
            .catch(err => console.log(err))
    }

    getCurrentProgram = (program) => {
        const { currentTime } = this.state;

        const currentProgram = [...program].filter(item => item.startHour <= currentTime && item.endHour >= currentTime);

        this.setState({
            currentProgram,
            title: currentProgram[0].title,
            start: currentProgram[0].startHour,
            end: currentProgram[0].endHour,
        });
    }

    changeTime = (time) => {
        const hour = Math.floor(time / 3600);
        const minutes = Math.floor((time - hour * 3600) / 60);

        return minutes < 10 ? `${hour}:0${minutes}` : `${hour}:${minutes}`;
    }

    render() {
        const { title, start, end } = this.state;
        return (
            <span title={title}>
                {!this.state.currentProgram ? "Brak danych" :
                    `${this.changeTime(start)}-${this.changeTime(end)}  ${title.slice(0, 36)}...`}
            </span>
        );
    }
}

export default RadioStreamProgramInfo;