import React, { Component } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login-form.css";
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
      toast.success("Logged in successfully", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Unable to register", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

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
            <form onSubmit={this.handleOnSubmit}>
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
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }
}

export default LoginForm;
