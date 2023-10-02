import React from "react";
import { HStack, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack p={4} bgColor={"blackAlpha.900"} shadow={"base"} justifyContent={"end"} >
        <Button variant={"unstyled"} color={"white"} marginRight={1500}>
        <Link to="/">Crypto-Dash</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} marginRight={10} >
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} marginRight={10}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} marginRight={10}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
