import React, { Component } from 'react';
import RadioLiveHeader from './RadioStreamHeader';
import RadioStreamAside from './RadioStreamAside';

class RadioStream extends Component {
    constructor(props){
        super(props);
        this.state={
            radioStreamActive: false,
        }
    }

    componentDidMount() {
        this.radio = new Audio();
        this.radio.src = 'http://151.80.24.114:9770/;stream.nsv';
    }

    handleClickRadioStream = () => {
        if (!this.state.radioStreamActive) {
            this.radio.play();
        } else {
            this.radio.pause()
        };

        this.setState(prevState => ({
            radioStreamActive: !prevState.radioStreamActive,
        }))
    }

    render() {
        const { radioStreamActive } = this.state;
        return (
            <div className="fade">
                <RadioLiveHeader
                    streamActive={radioStreamActive}
                    click={this.handleClickRadioStream}
                />

                <div className="player-aside">
                    <RadioStreamAside
                        streamActive={radioStreamActive}
                        click={this.handleClickRadioStream}
                    />
                </div>
            </div>
        );
    }
}

export default RadioStream;