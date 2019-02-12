import React from 'react'

var seconds;
var hours;
var minutes;
        
function msToHMS( ms ) {
    //console.log(ms)
    hours = Math.floor(ms / 3600000);
    minutes = Math.floor((ms - (hours * 3600000)) / 60000);
    seconds = parseInt((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
    console.log(hours, minutes, seconds)
}

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            status: false,
            runningTime: 0
        }
    }
    
    Click = () => {
        this.setState(state => {
            if (state.status) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime },()=>msToHMS(this.state.runningTime));
                
                });
            }
            return { status: !state.status };
            }
        );
    };
  
    Reset = () => {
        this.setState({ runningTime: 0, status: false },()=>msToHMS(this.state.runningTime));
    };
    
    
    
    render() {
    return (<div className="container">
                <div className="full-timer-container">
                    <div className="time-container">
                        <p className="timer-form">{hours}:</p>
                        <p className="timer-comment">hours</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{minutes}:</p>
                        <p className="timer-comment">Minute</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{seconds}</p>
                        <p className="timer-comment">second</p>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={this.Click}>{this.state.status ? 'Stop' : 'Start'}</button>
                    <button className="btn" onClick={this.Reset}>Reset</button>
                </div>
            </div>
)
}
}

export default Timer;