import React, { useState, useEffect } from "react";
import theme from "../theme/index";
import AssetsOwned from "./AssetsOwned";

import {
  ChakraProvider,
  Container,
  Heading
} from "@chakra-ui/react";
import PM from '../contracts/ProductManager.json'
import { ethers } from 'ethers';
import ChakraCarousel from "./ChakraCarousel";

export default function Carousal(props) {
  const [data, setData] = useState([]);
  let resultData=[-1];
  useEffect(() => {
    async function getOwnedItems() {
      // console.log('getting users products');
      const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum","HUm8In7JypE26QEZWGyXcUw9-3jM-IRm"));
      let ownedAssets = await PMContract.getCustomerDetails(props._address);
      // console.log(ownedAssets);
      ownedAssets = ownedAssets[3]
      // setData(ownedAssets);
      resultData = ownedAssets.filter((val) => {
        return val != 0;
      })
      setData(resultData);
      // console.log('filter val', resultData);
    }
    getOwnedItems();
    // fetch("https://jsonplaceholder.typicode.com/posts/")
    // .then((res) => res.json())
    // .then((res) => setData(res));
  }, []);

// if((resultData.length==0) || (resultData.length > 0 && resultData[1] != -1)){
  return (
    <ChakraProvider theme={theme}>
      <Heading
        fontSize="32px"
        // fontFamily="Cursive"
        fontWeight="semibold"
        pos="absolute"
        top='179'
        color='darkGray'
        left='131px'
      >
        Assets Owned
      </Heading>

      <Container
        py={8}
        px={0} pos="absolute"
        top='235px'
        left='131px'
        maxW={{
          base: "90%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
        w='90%'
      >
        <ChakraCarousel Width={200} sliderWidth={5} gap={40} >
          {data.map((productId, index) => (
            <AssetsOwned productId={productId} />
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
          // }
}
