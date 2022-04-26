import React, { useState, useEffect } from "react";
import {
  Link,
  Flex,
  Text,
  Button,
  Stack,
  Spacer,
  ChakraProvider, Menu,
  MenuButton, MenuList, Box, Avatar, AvatarBadge, HStack
} from "@chakra-ui/react";
import SearchTop from "./SearchTop"
import { Link as RouterLink } from "react-router-dom";
import { ethers } from "ethers";
import Logo from "./Logo";
import WalletNC from "./WalletNC";
import WalletC from "./WalletC";
import { ChevronDownIcon } from '@chakra-ui/icons';
import axios from "axios";

const NavBar = (props) => {
  console.log('header loaded');
  let dashboardLink = props._usertype.toLowerCase()
  let dashboardText = props._usertype.toUpperCase();
  const userType = props._usertype
  const data = props._data
  // const _setdata = props._setdata
  const ethereum = window.ethereum
  const pmContract = props._pmContract
  const setPMContract = props._setPMContract
  const setUser = props._setuser

  const btnhandler = async () => {
    // Asking if metamask is already present or not
    if (ethereum) {
      // res[0] for fetching a first wallet
      ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        const address = res[0];
        ethereum.request({
          method: "eth_getBalance",
          params: [address, "latest"]
        })
          .then((balance) => {
            props._setdata({ address: res[0], Balance: ethers.utils.formatEther(balance) });


            // setPMContract(new ethers.Contract(address, abi, new ethers.providers.AlchemyProvider("maticmum")));
            // console.log('this is contarac: '+pmContract);
          }).catch((e) => console.log(e.message))
        // console.log(data);
      }).catch((e) => {
        console.log(e.message)
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  useEffect(
    () => {
      getUserDetailsfromDb();
    },
    [data]
  )


  const getUserDetailsfromDb = () => {
    axios.get('http://localhost:5000/api/customer/signIn/' + data.address)
      .then((res) => {
        // console.log(res.data.message);
        console.log("updated: ", data);
        setUser(res.data.message);
      });
  }
  ethereum.on("accountsChanged", (res) => {
    btnhandler();
    // const _address = res[0];
    // ethereum
    //   .request({
    //     method: "eth_getBalance",
    //     params: [_address, "latest"]
    //   })
    //   .then((balance) => {
    //     setdata({ address: res[0], Balance: ethers.utils.formatEther(balance) });

    //   }).catch((e)=>console.log('error'))
    // console.log(data);
  });

  if (data.address.toUpperCase() == '0x215617803F8d8a4F46f8F59382972257135766A2'.toUpperCase()) {
    dashboardText = 'ADMIN'
    dashboardLink = 'admin'
  }
  else if (dashboardText != 'CUSTOMER' && dashboardText != 'MANUFACTURER') {
    console.log(dashboardText);
    dashboardText = ''
    dashboardLink = ''
  }

  return (
    <ChakraProvider>
      <NavBarContainer  {...props}>
        <Link as={RouterLink} to='/' >
          <Logo
            w="100px"
            color={["gray.700", "gray.700", "primary.500", "primary.500"]}
          />
        </Link>
        {data.address ?
          <>
            <HStack spacing={100}>
              <WalletC />
              <SearchTop w="200px" />
              <MenuItem to={"/" + dashboardLink} >{dashboardText}</MenuItem>
            </HStack>
          </>
          : <WalletNC />}
        <Spacer />
        {
          data.address ?
            <MenuLinks2 userAddress={data.address} /> :
            <MenuLinks1 onClick={btnhandler} />

        }
      </NavBarContainer>
    </ChakraProvider>
  );
};

const MenuLinks2 = ({ userAddress, isOpen }) => {
  // console.log(userAddress);
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {/* <MenuItem isLast>
             
            </MenuItem> */}

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Stack direction="row" alignItems='center' >
              <Text isTruncated w={20} >{userAddress}</Text>
              <Avatar size='sm'>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
            </Stack>
          </MenuButton>
          <MenuList bg='gray.200' px={2} >
            <MenuItem to='/settings' >Settings</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Box>
  );
};
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={RouterLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks1 = ({ onClick }) => {
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
  // console.log('logged in navbar: '+props.userAccountDetails);
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
