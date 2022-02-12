import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import ProfileContainer from "../../components/profile-container/profile-container";

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
      <ProfileContainer />
    </>
  );
};

export default Profile;
