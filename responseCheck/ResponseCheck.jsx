import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Screen = styled.button`
  width: 100vw;
  height: 100vh;
  text-align: center;
  user-select: none;
  font-size: 36px;
  &.waiting {
    background-color: aqua;
  }
  &.ready {
    background-color: red;
    color: white;
  }
  &.now {
    background-color: greenyellow;
  }
`;

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: []
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요."
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭"
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요."
      });
    } else if (state === "now") {
      this.endTime = new Date();
      this.setState(prevState => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요.",
          result: [...prevState.result, this.endTime - this.startTime]
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: []
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간:{" "}
          {this.state.result.reduce((a, c) => a + c) / this.state.result.length}
          ms
        </div>
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  };

  render() {
    return (
      <>
        <Globalstyle />
        <Screen
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
          {this.renderAverage()}
        </Screen>
      </>
    );
  }
}

export default ResponseCheck;
