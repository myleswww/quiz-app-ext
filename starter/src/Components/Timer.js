
import React, { useState } from 'react';

export class Timer extends React.Component{
    constructor(props){
        super(props)
        //this._child = React.createRef()
        this.state ={
        ms : 0,
        seconds: 0,
        minutes: 0,
        error: false,
        position: null,
        redirect: false,
        clearTag : false
        }
        
    }
    
    timerEx(){
            this.setState({redirect : true, ms : this.state.ms + 10})
    }
    timer = () => setInterval(() =>{
        this.timerEx()
    },10);

    
    componentDidMount(){
        this.timeoutID = this.timer();
        
    }

    componentDidUpdate(prevProps, prevState, snapshot, timer){
        //clearTimeout(this.timeoutID);
        if(this.state.ms === 1000){
            this.setState({ms : 0, seconds: this.state.seconds +1})
            //console.log(this.state.clearTag);
        }
        if(this.state.seconds === 60){
            this.setState({seconds: 0, minutes: this.state.minutes + 1});
            console.log(this.timeoutID);
        }
        if(this.state.clearTag===true){ //why is this not running???
            this.setState({seconds: 0, minutes: 0, ms: 0, error:false, position: null, redirect: false});
            clearInterval(this.timeoutID);
            console.log("Clear ran");
        }
    }
    
    clear(){
        //this.setState({clearTag: true});
        //this.state.clearTag = true; //setstate is not working.... what?
        console.log(this.state.clearTag, this.state.seconds, "  ", this.timeoutID);
        //this.timer();
        
    }

    render(){
        return <div>
                    {this.state.minutes} minutes {this.state.seconds} seconds {this.state.ms} milliseconds
                </div>
    }
}