import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Center pt="200px">
        <Heading
          fontFamily="Monument-Ultrabold"
          fontSize="7xl"
          className="head"
          mb="20px"
        >
          Your Profile
        </Heading>
      </Center>
    </>
  );
};

export default Profile;
