import React, { Component } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./nft-form.css";

class NftForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      desc: "",
      price: "",
    };
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    this.setState = {
      name: "",
      desc: "",
      price: "",
    };
    toast.success("NFT created successfully", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Flex fontFamily="Inter" align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            className="nftForm"
            rounded={"lg"}
            boxShadow={"2xl"}
            border="1px"
            borderColor="gray.300"
            p={8}
            width="450px"
          >
            <form onSubmit={this.handleOnSubmit}>
              <Stack spacing={5}>
                <FormControl id="text" borderColor="gray.300" isRequired>
                  <FormLabel>NFT Name</FormLabel>
                  <Input
                    name="name"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.name}
                    placeholder="Enter NFT name"
                    isRequired
                  />
                </FormControl>
                <FormControl id="text" borderColor="gray.300" isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input
                    name="desc"
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.desc}
                    placeholder="Enter description"
                    isRequired
                  />
                </FormControl>
                <FormControl id="amount" borderColor="gray.300" isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input
                    name="price"
                    type="amount"
                    onChange={this.handleOnChange}
                    value={this.state.price}
                    placeholder="Enter price of NFT"
                    isRequired
                  />
                </FormControl>
                <br />
                <Stack spacing={6}>
                  <Button
                    type="submit"
                    colorScheme="twitter"
                    p="5"
                    variant="solid"
                    fontFamily="Inter"
                    fontSize="18px"
                    letterSpacing="-.4px"
                  >
                    Create NFT
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

export default NftForm;
