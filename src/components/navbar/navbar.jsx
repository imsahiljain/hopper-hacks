import { Flex, Spacer, Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const redirectToLoginPage = () => {
    navigate("/login");
  };
  const logOut = () => {
    auth.signOut();
    toast({
      title: "Logged Out.",
      description: "Logged out successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
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

          {auth.currentUser ? (
            <>
              <Button
                colorScheme="gray"
                variant="ghost"
                mr="3"
                fontFamily="Neue-Regular"
                fontSize="18px"
              >
                <Link to="/">Martketplace</Link>
              </Button>
              <Button
                colorScheme="gray"
                borderColor="gray.500"
                p="5"
                variant="outline"
                mr="30"
                fontFamily="Neue-Regular"
                fontSize="18px"
                onClick={logOut}
              >
                <Link to="/login">Logout</Link>
              </Button>
              <IconButton aria-label="Your Account" icon={<SettingsIcon />} />
            </>
          ) : (
            <Button
              colorScheme="gray"
              borderColor="gray.500"
              p="5"
              variant="outline"
              mr="30"
              fontFamily="Neue-Regular"
              fontSize="18px"
              onClick={redirectToLoginPage}
            >
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
