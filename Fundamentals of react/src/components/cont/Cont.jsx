import React, { Component } from "react";
import "./Cont.css"
import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

export default class Contador extends Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (event) => {
        this.setState({
            step: event
        })
    }

    render() {
        return (
          <div className="Cont">
            <h2>Contador</h2>
            <Display number={this.state.number}></Display>
            <StepForm step={this.state.step} setStep={this.setStep}></StepForm>
            <Buttons increment={this.inc} decrement={this.dec}></Buttons>
          </div>
        );
    }
}