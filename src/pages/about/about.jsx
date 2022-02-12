import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Center pt="200px">
        <Heading
          fontFamily="Monument-Ultrabold"
          fontSize="7xl"
          className="head"
          mb="30px"
        >
          About NFT
        </Heading>
      </Center>
      <Center>
        <Text fontFamily="Monument-Regular" fontSize="5xl" className="sub">
          What is an NFT?
        </Text>
      </Center>
      <Center>
        <Text
          fontFamily="Neue-Regular"
          fontSize="xl"
          w="40%"
          ml="40px"
          mb="25px"
        >
          An NFT, which stands for non-fungible token, is a unique unit of data
          employing technology that allows digital content—from videos to songs
          to images—to become logged and authenticated on cryptocurrency
          blockchains, primarily Ethereum. Once content is logged onto the
          blockchain, every transaction from transfers to sales is recorded
          on-chain, creating an easily accessible ledger of provenance and price
          history. The main impact of NFTs is making it easy to own and sell
          digital content.
        </Text>
      </Center>

      <Center>
        <Text fontFamily="Monument-Regular" fontSize="5xl" className="sub">
          How does NFT work?
        </Text>
      </Center>
      <Center>
        <Text
          fontFamily="Neue-Regular"
          fontSize="xl"
          w="40%"
          ml="40px"
          mb="25px"
        >
          1. NFTs are individual tokens with valuable information stored in
          them. <br />
          <br />
          2. Because they hold a value primarily set by the market and demand,
          they can be bought and sold just like other physical types of art.
          <br />
          <br />
          3. NFTs' unique data makes it easy to verify and validate their
          ownership and the transfer of tokens between owners.
        </Text>
      </Center>

      <Center>
        <Text fontFamily="Monument-Regular" fontSize="5xl" className="sub">
          What is NFT used for?
        </Text>
      </Center>
      <Center>
        <Text
          fontFamily="Neue-Regular"
          fontSize="xl"
          w="40%"
          ml="40px"
          mb="25px"
        >
          People interested in Crypto-trading and people who like to collect
          artwork often use NFTs. Other than that, it has some other uses too
          like:
          <br />
          <br />
          1. <b>Digital Content</b> - The most significant use of NFTs today is
          in digital content. Content creators see their profits enhanced by
          NFTs, as they power a creator economy where creators have the
          ownership of their content over to the platforms they use to publicize
          it.
          <br />
          <br />
          2. <b>Gaming Items</b> - NFTs have seen a lot of interest from game
          developers. NFTs can provide a lot of benefits to the players. You can
          buy items for your game, and when you're done with that, you can
          recoup your money by selling them.
          <br />
          <br />
          2. <b>Investment and Collaterals</b> - Both NFT and DeFi
          (Decentralized Finance) share the same infrastructure. DeFi
          applications let you borrow money by using collateral. NFT and DeFi,
          both work together to explore using NFTs as collateral instead.
        </Text>
      </Center>

      <Center>
        <Text fontFamily="Monument-Regular" fontSize="5xl" className="sub">
          How to buy NFT?
        </Text>
      </Center>
      <Center>
        <Text
          fontFamily="Neue-Regular"
          fontSize="xl"
          w="40%"
          ml="40px"
          mb="25px"
        >
          1. You will need a digital wallet that allows you to store your NFTs
          and cryptocurrencies.
          <br />
          <br />
          2. Then you need to purchase some cryptocurrency depending on what
          currencies your NFT provider accepts, most likely Ether.
          <br />
          <br />
          3. You can use platforms like OpenSea, Coinbase, Kraken, PayPal, etc.,
          to buy cryptocurrencies.
          <br />
          <br />
          4. Then you will be able to move it from the exchange to your wallet
          of choice.
        </Text>
      </Center>
    </>
  );
};

export default About;
