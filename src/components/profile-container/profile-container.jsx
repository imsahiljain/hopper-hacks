import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Box,
  Spacer,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";

const ProfileContainer = () => {
  return (
    <>
      <Flex w="70%" m="auto">
        <Box p="2">
          <Heading size="xl" fontFamily="Neue-Regular" mb="3">
            Sahil Jain
          </Heading>
          <Heading fontFamily="Neue-Light" size="sm" color="gray.400">
            emailofsahiljain@gmail.com
          </Heading>
        </Box>
        <Spacer />
        <Box p="2">
          <Heading size="xl" fontFamily="Neue-Regular" mb="3">
            Wallet
          </Heading>
          <Heading fontFamily="Neue-Light" size="sm" color="gray.400">
            USD 1000 left
          </Heading>
        </Box>
      </Flex>
      <br />
      <Divider w="70%" m="auto" />
      <br />
      <Flex w="50%" m="auto">
        <Box p="2">
          <Heading size="xl" fontFamily="Neue-UltraBold" mb="3">
            Bought NFT's
          </Heading>
          <Container mt="10">
            <Box
              boxShadow="2xl"
              border="1px"
              borderColor="gray.600"
              height="auto"
              transition=".1s ease-in"
              cursor="pointer"
              p="6"
              borderRadius="3"
              mb="10"
              fontFamily="Neue-Regular"
            >
              <Text>Neon Guts</Text>
            </Box>
            <Box
              boxShadow="2xl"
              border="1px"
              borderColor="gray.600"
              height="auto"
              transition=".1s ease-in"
              cursor="pointer"
              p="6"
              borderRadius="3"
              mb="10"
              fontFamily="Neue-Regular"
            >
              <Text>HMS Thimble</Text>
            </Box>
          </Container>
        </Box>
        <Spacer />
        <Center height="500px" mr="200px">
          <Divider orientation="vertical" color="red" />
        </Center>
        <Box p="2">
          <Heading size="xl" fontFamily="Neue-Regular" mb="3">
            Created NFT's
          </Heading>
          <Container mt="10">
            <Box
              boxShadow="2xl"
              border="1px"
              borderColor="gray.600"
              height="auto"
              transition=".1s ease-in"
              cursor="pointer"
              p="6"
              borderRadius="3"
              mb="10"
              fontFamily="Neue-Regular"
            >
              <Text>COVID Baba</Text>
            </Box>
            <Box
              boxShadow="2xl"
              border="1px"
              borderColor="gray.600"
              height="auto"
              transition=".1s ease-in"
              cursor="pointer"
              p="6"
              borderRadius="3"
              mb="10"
              fontFamily="Neue-Regular"
            >
              <Text>Funny Joker</Text>
            </Box>
            <Box
              boxShadow="2xl"
              border="1px"
              borderColor="gray.600"
              height="auto"
              transition=".1s ease-in"
              cursor="pointer"
              p="6"
              borderRadius="3"
              mb="10"
              fontFamily="Neue-Regular"
            >
              <Text>Passion</Text>
            </Box>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default ProfileContainer;
