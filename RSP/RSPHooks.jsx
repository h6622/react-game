import React, { useState, useRef, useEffect } from "react";

const scores = {
  rock: 0,
  scissors: 1,
  paper: -1
};

const RSPHooks = () => {
  const [result, setResult] = useState("");
  const [rsp, setRsp] = useState("rock");
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [rsp]);

  const changeHand = () => {
    if (rsp === "rock") {
      setRsp("scissors");
    } else if (rsp === "scissors") {
      setRsp("paper");
    } else if (rsp === "paper") {
      setRsp("rock");
    }
  };

  const onClickBtn = choice => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[rsp];

    const diff = myScore - cpuScore;

    if (diff === 0) {
      setResult("비겼습니다.");
    } else if ([-1, 2].includes(diff)) {
      setResult("비겼습니다.");
      setScore(prevScore => prevScore + 1);
    } else {
      setResult("비겼습니다.");
      setScore(prevScore => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
      <h1>{rsp}</h1>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("rock")}>
          Rock
        </button>
        <button id="scissors" className="btn" onClick={onClickBtn("scissors")}>
          Scissor
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("paper")}>
          Paper
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSPHooks;
