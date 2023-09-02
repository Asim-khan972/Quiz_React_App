import React from "react";

export default function Options({ Question, answer, dispatch }) {
  const hasAnswerd = answer !== null;
  return (
    <div>
      <div className="option">
        {Question.options.map((Option, index) => (
          <button
            className={` btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswerd
                ? index === Question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } `}
            key={Option}
            disabled={hasAnswerd}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {Option}
          </button>
        ))}
      </div>
    </div>
  );
}
