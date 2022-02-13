import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const NftModal = ({
  prices,
  createdAt,
  username,
  tokenMetadata,
  totalAvailable,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const handleClose = () => {
    onClose();
    toast({
      title: "NFT Bought.",
      description: "Congrats!! NFT has been bought successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <>
      <Button
        onClick={onOpen}
        _hover={{ color: "gray" }}
        borderColor="gray.500"
        p="5"
        variant="outline"
        mr="30"
        fontFamily="Neue-Regular"
        fontSize="18px"
      >
        Buy this NFT
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="Neue-Regular" fontSize="2xl">
            Are you sure you want to buy this NFT?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily="Neue-Regular" fontSize="lg">
            <br />
            <b>NFT Name: </b> {tokenMetadata.name}
            <br /> <b>Price: </b> {prices[0]?.currency ?? "USD"}{" "}
            {prices[0]?.price ?? "0"}
            <br /> <b>Created At: </b> {createdAt}
            <br /> <b>Created By: </b> {username}
            <br /> <b>Amount Left: </b> {totalAvailable}
            <br />
            <br />
            <br />
            {prices[0]?.currency ?? "USD"} {prices[0]?.price ?? "0"} will be
            deducted from your balance.
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleClose}
              fontFamily="Neue-Regular"
            >
              Buy Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NftModal;
