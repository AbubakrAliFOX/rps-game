import { HStack, Box, Image, Text } from "@chakra-ui/react";
import { GameContext } from "../GameContext";
import { useContext } from "react";
import './style.css';

export default function Header() {
    const {choice} = useContext(GameContext);
  return (
    <HStack className="Header" border="2px white solid" borderRadius="25px" mt={30} mx="auto">
      <Box>
        <Image m="20px" mt="30px" src="title.svg" />
      </Box>

      <Box
        className="scoreboard"
        ml="auto"
        mr="20px"
        display="inline"
        fontWeight="bold"
        borderRadius="10px"
        backgroundColor="white"
        color="black"
      >
        <Text p={0} m={0} mt="5px" fontSize={16}>
          SCORE
        </Text>
        <Text display="inline" m={0} fontSize={55}>
          {choice.score}
        </Text>
      </Box>
    </HStack>
  );
}
