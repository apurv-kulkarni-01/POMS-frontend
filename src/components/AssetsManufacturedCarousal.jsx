import React, { useState, useEffect } from "react";
import AssetsManufactured from "./AssetsManufactured";
import {
  ChakraProvider,
  Container,
  Heading
} from "@chakra-ui/react";
import PM from '../contracts/ProductManager.json';
import ChakraCarousel from "./ChakraCarousel";
import { ethers } from 'ethers'


export default function Carousal(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getOwnedItems() {
      try {
        // console.log('getting maufacturer products');
        const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum"));
        // let ownedAssets = await PMContract.getCustomerDetails(props._address);
        let productHistory = await PMContract.queryFilter(
          PMContract.filters.Transfer(null, props._address, null),
          'earliest',
          'latest'
        )
        // console.log(productHistory[0].args[2]);
        productHistory.push(productHistory[0])
        setData(productHistory)
      }

      catch (e) {
        console.log('eror', e);
      }
      // ownedAssets = ownedAssets[3]
      // setData(ownedAssets);
      // resultData = ownedAssets.filter((val) => {
      //   return val != 0;
      // })
      // setData(resultData);
      // console.log('filter val', resultData);
    }
    getOwnedItems();

    // fetch("https://jsonplaceholder.typicode.com/posts/")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));
  }
  , []);

  return (
    <ChakraProvider >
      <Heading
        fontSize="32px"
        // fontFamily="Cursive"
        fontWeight="semibold"
        pos="absolute"
        top='179'
        left='131px'
      >
        Assets Manufactured
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
          {data.map((post, index) => (
         
            <AssetsManufactured prodData={post.args[2]} name={index} />
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}
