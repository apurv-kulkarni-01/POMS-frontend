import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Header from "../components/Header"
import LogoCenter from "../components/LogoCenter"
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import PM from '../contracts/ProductManager.json'

import AssetsOwned from "../components/AssetsOwned";

import theme from "../theme";

const Profile = (props) => {
  let add = useParams().address;
  console.log("address is: ", add)
  const [data, setData] = useState([]);
  useEffect(() => {async function getOwnedItems(){
      try{
      console.log('getting users products', add);
      const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum"));
      console.log("continue");
      let ownedAssets = await PMContract.getCustomerDetails(add);
      console.log("continuing");
      console.log("prods", ownedAssets);
      ownedAssets = ownedAssets[3]
      setData(ownedAssets);
    }
      catch(e){
        console.log("errot is ", e)
      }
    }
    getOwnedItems();
      // fetch("https://jsonplaceholder.typicode.com/posts/")
        // .then((res) => res.json())
        // .then((res) => setData(res));
    }, []);
if(data.length > 0){
   return (
        <>
        <Container width="1200px" mx="auto">
        <ChakraProvider theme={theme} width="1200px">
        <Avatar left="535px" size="2xl" />
          <Heading
       fontSize="20px"
       fontWeight='normal'
       textAlign="center"
       // fontFamily="Cursive"
       w="full"
       mt="5px"
       fontWeight="bold"
     > Abhishek Jha
     </Heading>
     <Heading
       fontSize="12px"
       fontWeight='normal'
       textAlign="center"
       // fontFamily="Cursive"
       w="100px"
       color="text.secondary"
       mt="5px"
       mx='auto'
       isTruncated
     > {add}
     </Heading>

        <Divider mt="20px" borderWidth="1px" borderColor="black"/>
        </ChakraProvider>
        <SimpleGrid columns={4}  mt="20px" spacing='40px'>
           {data.map((productId, index) => (
             productId==0?<></>:
              <AssetsOwned productId={productId} />
            ))}
       
      </SimpleGrid>
    </Container>
    </>

    )
}
   
}

export default Profile

