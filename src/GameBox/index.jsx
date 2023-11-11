import { Image, Circle } from "@chakra-ui/react";
import "./style.css";

export default function GameBox({ type, forChoice }) {
  let borderColor = "";
  if (type === "rock") {
    borderColor = "#1cbdf8";
  } else if (type === "paper") {
    borderColor = "#d6e31c";
  } else if (type === "scissors") {
    borderColor = "#c8374e";
  }

  const styles = {
    border: `10px solid ${borderColor}`,
    transition: "200ms ease-in-out",
    cursor: forChoice ? "pointer" : "auto",
    boxShadow: `0px 0px 120px ${borderColor}`,
  };

  return (
    <Circle
      _hover={{
        transform: forChoice ? `scale(1.25)` : "scale(1)",
      }}
      style={styles}
      className="circle"
      p={0}
      m={10}
      backgroundColor="white"
    >
      <Image className="game-icon" src={`${type}.svg`} />
    </Circle>
  );
}
