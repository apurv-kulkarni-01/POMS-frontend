import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Header from "../components/Header"
import LogoCenter from "../components/LogoCenter"
import { SimpleGrid, Container, Heading, Box, Link } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import PM from '../contracts/ProductManager.json'
import { Link as RouterLink } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react'
import Truncate from 'react-truncate';
import { ExternalLinkIcon } from '@chakra-ui/icons'

import AssetsOwned from "../components/AssetsOwned";
import { Spinner } from '@chakra-ui/react'

import theme from "../theme";

const Profile = (props) => {
  let add = useParams().address;
  // console.log("address is: ", add)
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function getOwnedItems() {
      try {
        // console.log('getting users products', add);
        const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum","HUm8In7JypE26QEZWGyXcUw9-3jM-IRm"));
        // console.log("continue");
        let ownedAssets = await PMContract.getCustomerDetails(add);
        setName(ownedAssets[0]);
        // console.log("continuing");
        // console.log("prods", ownedAssets);
        ownedAssets = ownedAssets[3]
        setData(ownedAssets);
      }
      catch (e) {
        console.log("errot is ", e)
      }
    }
    getOwnedItems();
    // fetch("https://jsonplaceholder.typicode.com/posts/")
    // .then((res) => res.json())
    // .then((res) => setData(res));
  }, []);

  return (
    <>
      <Container width="1200px" mx="auto">
        <ChakraProvider theme={theme} width="1200px">
          <Box bg='#D3D3D3' w='100%' h={140} p={50} color='white'>
            <Avatar left="475px" size="2xl"/>
          </Box>

          <Heading
            fontSize="20px"
            fontWeight='normal'
            textAlign="center"
            // fontFamily="Cursive"
            w="full"
            mt="50px"
          //  fontWeight="bold"
          >
            {/* Abhishek Jha */}
            {name}
          </Heading>
          <Tooltip label='View on Polygonscan'>
            <Link
              href={"https://mumbai.polygonscan.com/address/" + add}
              fontSize="12px"
              color="text.secondary"
              fontWeight='normal'
              textAlign="center"
              m="540px"        // isExternal


            >
              <Truncate width={120}>
                {add}
              </Truncate>
            </Link>
          </Tooltip>
          <Divider mt="20px" borderWidth="1px" borderColor="black" />
        </ChakraProvider>
        {data.length > 0 ?
          (<SimpleGrid columns={4} mt="20px" spacing='40px'>
            {data.map((productId, index) => (
              productId == 0 ? <></> :
                <AssetsOwned productId={productId} />
            ))}

          </SimpleGrid>) :
          (
            <ChakraProvider theme={theme} width="1200px">
              <Spinner mt="100px" speed='0.75s' size='xl' ml="570px" />
            </ChakraProvider>)}
      </Container>
    </>

  )


}

export default Profile

