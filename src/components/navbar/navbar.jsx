import { Flex, Spacer, Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex
        zIndex="100"
        borderBottom="1px solid"
        borderColor="gray.700"
        pos="absolute"
        w="100%"
        flexWrap="wrap"
      >
        <Box p="2" m="4">
          <Heading
            className="newsHeading"
            fontFamily="Neue-Regular"
            fontSize="3xl"
          >
            NFTeez
          </Heading>
        </Box>
        <Spacer />
        <Box m="5">
          <Button
            colorScheme="gray"
            variant="ghost"
            mr="2"
            fontFamily="Neue-Regular"
            fontSize="18px"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            colorScheme="gray"
            variant="ghost"
            mr="3"
            fontFamily="Neue-Regular"
            fontSize="18px"
          >
            <Link to="/">About NFT</Link>
          </Button>

          <Button
            colorScheme="gray"
            borderColor="gray.500"
            p="5"
            variant="outline"
            mr="30"
            fontFamily="Neue-Regular"
            fontSize="18px"
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
