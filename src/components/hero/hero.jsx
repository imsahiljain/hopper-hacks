import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <Center pt="280px">
        <Heading
          fontFamily="Monument-Ultrabold"
          fontSize="9xl"
          className="head"
        >
          NFTeez
        </Heading>
      </Center>
      <Center>
        <Text fontFamily="Monument-Regular" fontSize="5xl" className="sub">
          Learn. Buy. Sell. Bid.
        </Text>
      </Center>
      <Center>
        <Text fontFamily="Neue-Regular" fontSize="xl" w="40%" ml="40px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          Lorem ipsum dolor.
        </Text>
      </Center>
    </>
  );
};

export default Hero;
