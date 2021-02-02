import React, { useState } from "react";
import "./styles.css";
import QuestionList from "./QuestionList";

export default function App() {
  let questions = QuestionList;

  const [qnum, SetNum] = useState(0);

  let question = questions[qnum];

  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const handleClick = () => {
    let ans = questions[qnum].ans;

    if (user === ans) {
      setCount(count + 1);
    }
    SetNum(qnum + 1);
    console.log(user);
  };
  return (
    <div className="App">
      {qnum <= 2 ? (
        <div className="item">
          <h2>{question.ques}</h2>
          <button
            type="radio"
            value={question.op1}
            onClick={(e) => {
              setUser(e.target.value);
            }}
          >
            {question.op1}
          </button>

          <button
            type="radio"
            value={question.op2}
            onClick={(e) => {
              setUser(e.target.value);
            }}
          >
            {question.op2}
          </button>
          <button
            type="radio"
            value={question.ans}
            onClick={(e) => {
              setUser(e.target.value);
            }}
          >
            {question.ans}
          </button>
          <button
            type="radio"
            value={question.op3}
            onClick={(e) => {
              setUser(e.target.value);
            }}
          >
            {question.op3}
          </button>

          <button onClick={handleClick}>NEXT</button>
          <h1>{count}</h1>
        </div>
      ) : (
        <div>
          <h1>Game Ended</h1>
          <h2>Score is {count}</h2>
        </div>
      )}
    </div>
  );
}
