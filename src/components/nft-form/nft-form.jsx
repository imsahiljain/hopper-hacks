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

// import React, { useState } from "react";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   useToast,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Center,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";

// const NftForm = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = React.useRef();
//   const toast = useToast();

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");

//   const nameOnChange = (event) => {
//     setName(event.target.value);
//   };

//   const amountOnChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const dateOnChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     const newExpenseData = {
//       name: name,
//       amount: amount,
//       date: new Date(date).toLocaleString("en-GB").slice(0, 10),
//     };
//     // props.getNewData(newExpenseData);
//     onClose();
//     toast({
//       title: "New NFT created.",
//       description: "Your new NFT has been created successfully.",
//       status: "success",
//       duration: 2000,
//       isClosable: true,
//     });
//     setName("");
//     setAmount("");
//     setDate("");
//   };

//   return (
//     <>
//       <Center mt="10">
//         <Button
//           onClick={onOpen}
//           fontSize="18px"
//           letterSpacing="-0.01em"
//           fontWeight="500"
//           mb="10"
//           fontFamily="Inter"
//         >
//           <AddIcon w={3} h={3} mr="2" mb=".5" fontWeight="semibold" />
//           Create new NFT
//         </Button>
//       </Center>
//       <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader fontFamily="Inter">Add new expense</ModalHeader>
//           <ModalCloseButton />

//           <form onSubmit={handleOnSubmit}>
//             <ModalBody pb={6} fontFamily="Inter">
//               <FormControl isRequired>
//                 <FormLabel>Expense Name</FormLabel>
//                 <Input
//                   ref={initialRef}
//                   value={name}
//                   onChange={nameOnChange}
//                   placeholder="Grocery"
//                   isRequired
//                 />
//               </FormControl>

//               <FormControl isRequired mt={4}>
//                 <FormLabel>Amount</FormLabel>
//                 <Input
//                   placeholder="&#8377;300"
//                   value={amount}
//                   onChange={amountOnChange}
//                   type="number"
//                   isRequired
//                 />
//               </FormControl>

//               <FormControl isRequired mt={4}>
//                 <FormLabel>Date</FormLabel>
//                 <Input
//                   placeholder="Date"
//                   value={date}
//                   onChange={dateOnChange}
//                   type="date"
//                   isRequired
//                 />
//               </FormControl>
//             </ModalBody>

//             <ModalFooter fontFamily="Inter">
//               <Button colorScheme="blue" mr={3} type="submit">
//                 Add expense
//               </Button>
//               <Button onClick={onClose}>Cancel</Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default NftForm;
