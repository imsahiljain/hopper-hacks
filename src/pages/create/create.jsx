import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import NftForm from "../../components/nft-form/nft-form";

const Create = () => {
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
          Create NFT
        </Heading>
      </Center>
      <NftForm />
    </>
  );
};

export default Create;
