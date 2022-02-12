import React, { Component } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import NftCard from "../nft-card/nft-card";

class NftContainer extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const url = "https://api.bitski.com/v1/products?limit=28&offset=0";
    const jsonData = await fetch(url);
    const parseData = await jsonData.json();
    this.setState({
      products: parseData.products,
    });
  }
  render() {
    return (
      <>
        <SimpleGrid columns={4} spacing={5} m="100">
          {this.state.products.map(({ id, ...otherProps }) => (
            <NftCard key={id} {...otherProps} />
          ))}
        </SimpleGrid>
      </>
    );
  }
}

export default NftContainer;
