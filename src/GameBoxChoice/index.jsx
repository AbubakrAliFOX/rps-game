import { useContext } from "react";
import { GameContext } from "../GameContext";
import GameBox from "../GameBox";

export default function GameBoxChoice({ type, id }) {
  const { choice, setChoice } = useContext(GameContext);

  const newHouse = () => {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  };

  const handleClick = (e, type) => {
    setChoice((prev) => {
      let p1 = type;
      let p2 = newHouse();
      let win = "";
      let calcScore = prev.score;
      if (p1 === p2 && p1 != "" && p2 != "") {
        win = "draw";
      } else if (p1 === "rock" && p2 === "paper" && p1 != "" && p2 != "") {
        win = "house";
      } else if (p1 === "rock" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "paper" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "paper" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "house";
      } else if (p1 === "scissors" && p2 === "paper" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "scissors" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "house";
      }

      // score logic
      if (win == "user") {
        calcScore++;
      } else if (win == "house") {
        calcScore--;
      }

      return {
        ...prev,
        user: p1,
        house: p2,
        winner: win,
        score: calcScore,
        gameDone: true,
      };
    });
  };

  return (
    <div onClick={(evt) => handleClick(evt, type)}>
      <GameBox forChoice={true} type={type} />
    </div>
  );
}
