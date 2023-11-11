import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import GameBoxChoice from "../GameBoxChoice";
import GameBox from "../GameBox";
import { GameContext } from "../GameContext";
import { useContext } from "react";

export default function Body() {
  const { choice, setChoice } = useContext(GameContext);
  const showWinner = () => {
    if (choice.winner == "user") {
      return "You have won!";
    } else if (choice.winner == "house") {
      return "The house has won!";
    } else if (choice.winner == "draw") {
      return "It is a draw!";
    }
  };
  const reset = () => {
    setChoice((prev) => {
      return { ...prev, user: "", house: "", winner: "", gameDone: false };
    });
  };
  return (
    <HStack mt={50} mb={40}>
      <Box mx="auto" display={choice.gameDone == true ? "none" : "block"}>
        <VStack>
          <HStack>
            <GameBoxChoice id="Whatsup" value={3} type="rock" />
            <GameBoxChoice type="paper" />
          </HStack>
          <GameBoxChoice type="scissors" />
        </VStack>
      </Box>

      <Box mx="auto" display={choice.gameDone == true ? "block" : "none"}>
        <VStack>
          <HStack>
            <GameBox type={choice.user} />
            <GameBox type={choice.house} />
          </HStack>
          <Text>{showWinner()}</Text>
          <ButtonGroup gap="4">
            <Button onClick={reset}>Try again</Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </HStack>
  );
}
