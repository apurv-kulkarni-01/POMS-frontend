import React, { useState } from "react";
import {
  Link,
  Flex,
  Text,
  Button,
  Stack,
  Spacer,
  ChakraProvider,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import Logo from "./Logo";
import WalletNC from "./WalletNC";

const NavBar = (props) => {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        // accountChangeHandler(res[0]);
        console.log(res[0]);
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  // const getbalance = (address) => {

  //   // Requesting balance method
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"]
  //     })
  //     .then((balance) => {
  //       // Setting balance
  //       setdata({
  //         Balance: ethers.utils.formatEther(balance),
  //       });
  //     });
  // };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    // getbalance(account);
  };

  return (
    <ChakraProvider>
      <NavBarContainer {...props}>
        <Logo
          w="100px"
          color={["gray.700", "gray.700", "primary.500", "primary.500"]}
        />
        <WalletNC />
        <Spacer />
        <MenuLinks onClick={btnhandler} />
      </NavBarContainer>
    </ChakraProvider>
  );
};


const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ onClick }) => {
  return (
    <Button
      size="sm"
      rounded="md"
      color={["primary.500", "primary.500", "white", "white"]}
      bg={["gray.700", "gray.700", "primary.500", "primary.500"]}
      _hover={{
        bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
      }}
      onClick={onClick}
    >
      Login with Metamask
    </Button>

    
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["black", "gray", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
