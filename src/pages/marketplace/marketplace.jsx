import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Center, Heading, Text } from "@chakra-ui/react";
import NftContainer from "../../components/nft-container/nft-container";

const Marketplace = () => {
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
          Marketplace
        </Heading>
      </Center>
      <Center>
        <Text fontFamily="Neue-Regular" fontSize="xl">
          See all the listed NFT's in the marketplace below.
        </Text>
      </Center>
      <NftContainer />
    </>
  );
};

export default Marketplace;
