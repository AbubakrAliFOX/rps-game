import { Box, Text, Link, Button, ButtonGroup } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GameContext } from "../GameContext";

export default function Footer() {
  const { choice, setChoice } = useContext(GameContext);
  const resetGame = () => {
    setChoice(prev => ({...prev, user: '', house: '', winner: '', score:0, gameDone: false }))
  }
  return (
    <Box mb={100}>
      <Text>
        Rock Paper Scissors Game -{" "}
        <Link href="https://portfolio-kfwr.onrender.com/" isExternal>
          Abubakr Ali <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <ButtonGroup gap="4">
        <Button onClick={resetGame}>Reset</Button>
        {/* <Button>Rules</Button> */}
      </ButtonGroup>
    </Box>
  );
}
