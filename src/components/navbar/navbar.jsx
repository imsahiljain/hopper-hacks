import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MdPersonOutline, MdAddToPhotos } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const redirectToLoginPage = () => {
    navigate("/login");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleCreateClick = () => {
    navigate("/create");
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
            colorScheme="black"
            variant="ghost"
            mr="2"
            fontFamily="Neue-Regular"
            fontSize="18px"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            colorScheme="black"
            variant="ghost"
            mr="3"
            fontFamily="Neue-Regular"
            fontSize="18px"
          >
            <Link to="/about">About NFT</Link>
          </Button>

          {auth.currentUser ? (
            <>
              <Button
                colorScheme="black"
                variant="ghost"
                mr="3"
                fontFamily="Neue-Regular"
                fontSize="18px"
              >
                <Link to="/marketplace">Martketplace</Link>
              </Button>

              <Button
                colorScheme="black"
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

              <Tooltip label="Create NFT" fontSize="md" hasArrow arrowSize={15}>
                <IconButton
                  // colorScheme="white"
                  aria-label="Your Account"
                  onClick={handleCreateClick}
                >
                  <Icon as={MdAddToPhotos} w={6} h={6} />
                </IconButton>
              </Tooltip>

              <Tooltip
                label="Your Profile"
                fontSize="md"
                hasArrow
                arrowSize={15}
              >
                <IconButton
                  // colorScheme="gray.100"
                  aria-label="Your Account"
                  ml="4"
                  onClick={handleProfileClick}
                >
                  <Icon as={MdPersonOutline} w={6} h={6} />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Button
              colorScheme="black"
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
