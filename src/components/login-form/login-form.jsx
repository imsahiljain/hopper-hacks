import React, { Component } from "react";
import { Flex, Box, Stack, Button, Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { FcGoogle } from "react-icons/fc";
import "./login-form.css";
class LoginForm extends Component {
  render() {
    return (
      <Flex
        fontFamily="Inter"
        minH={"100vh"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              fontFamily="Monument-Ultrabold"
              fontSize="7xl"
              className="log"
            >
              Login
            </Heading>
          </Stack>
          <Box p={8} width="450px">
            <Stack spacing={5}>
              <Stack spacing={6}>
                <Button
                  colorScheme="white"
                  p="30px"
                  variant="outline"
                  fontFamily="Neue-Regular"
                  fontSize="19px"
                  letterSpacing="-.4px"
                  onClick={signInWithGoogle}
                >
                  Login with Google <Icon as={FcGoogle} ml="2" w={7} h={7} />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}

export default LoginForm;
