import React from "react";
import { Box, Image, Button, Link, Container } from "@chakra-ui/react";
import NftModal from "../modal/modal";

const NftCard = ({ prices, createdAt, tokenMetadata, totalAvailable }) => {
  return (
    <Container mt="-10">
      <Box
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.500"
        width="400px"
        height="auto"
        transition=".1s ease-in"
        cursor="pointer"
        borderRadius="10"
        mb="10"
      >
        <Image
          src={tokenMetadata.image}
          alt="Image"
          width="400px"
          height="300px"
          draggable="false"
          borderRadius="10px 10px 0px 0px"
        />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="3xl"
            fontFamily="Neue-Regular"
            lineHeight="tight"
            isTruncated
          >
            {tokenMetadata.name}
          </Box>
          <Box
            mt="1"
            fontSize="lg"
            fontFamily="Neue-Regular"
            lineHeight="tight"
            isTruncated
          >
            <b>Total available :</b> {totalAvailable}
          </Box>
          <Box
            mt="1"
            fontSize="lg"
            fontFamily="Neue-Regular"
            lineHeight="tight"
            isTruncated
          >
            <b>Price :</b> {prices[0]?.currency ?? "USD"}{" "}
            {prices[0]?.price ?? "0"}
          </Box>
          <Box
            mt="1"
            fontSize="lg"
            fontFamily="Neue-Regular"
            lineHeight="tight"
            isTruncated
          >
            <b>Created at :</b> {createdAt}
          </Box>
          <br />
          <NftModal />
        </Box>
      </Box>
    </Container>
  );
};

export default NftCard;
