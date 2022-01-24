import React from "react";
import { FaSyncAlt } from "react-icons/fa";

const NewWord = ({ playAgain, btnTxt }) => {
  return (
      <div className="new-word-container">
        <button className="nw-btn" onClick={playAgain}>{btnTxt}</button>
      </div>
  );
};

export default NewWord;
