import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import './App.css'
import Lottery from "./components/lottery/Lottery";
import First from "./components/basics/First";
import WithParemeter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Card from "./components/layout/Card";
import ListStudents from "./components/repetition/ListStudents";
import Contador from "./components/cont/Cont";

export default (props) => {
  return (
      <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
    
            <Card title="Lottery">
                <Lottery></Lottery>
            </Card>

            <Card title="Cont">
                <Contador initialNumber={100}></Contador>
            </Card>

            <Card title="First">
                <First></First>
            </Card>
            
            <Card title="With Paremeter">
                <WithParemeter title="Second component"></WithParemeter>
            </Card>

            <Card title="Fragment">
                <Fragment></Fragment>
            </Card>

            <Card title="Repetition">
                <ListStudents></ListStudents>
            </Card>
        </div>
    </div>
  );
};
