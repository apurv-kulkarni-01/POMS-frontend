import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import { Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ArrowForwardIcon, AddIcon } from '@chakra-ui/icons'
import {
  ChakraProvider,
  Heading,
  VStack,
  Text,
  Flex
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import {
  useDisclosure, Button, ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl, FormLabel, Input
} from "@chakra-ui/react";
import { ethers } from 'ethers'
import PM from '../contracts/ProductManager.json'

import theme from '../theme/index'

export default function Cardelem(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([]);
  const [productCode, setProductCode] = useState(-1)
  console.log('propdata', props.prodData);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  const addProductHandler = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // const feeData = await provider.getFeeData();
      // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas,'gwei'));
      const PMcontract = new ethers.Contract(PM.address, PM.abi, signer);
      console.log('transaction started');
      const tx = await PMcontract.enrollProduct(
        productCode,
        parseInt(String(productCode).slice(0, 3)),
        // {
        // maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
        // maxPriorityFeePerGas: ethers.utils.parseUnits('40', 'gwei'),
        // maxFeePerGas: feeData.maxFeePerGas,
        // maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
        // }
      );
      console.log(tx.hash);
      onClose();
    }
    catch (e) {
      console.log(e);
    }
  }

  if (props.name == "0") {
    return (
      <ChakraProvider theme={theme}>
        <Flex
          // mt="100px"
          height="163px"
          width="180px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          justifyContent="space-between"
          flexDirection="column"
          overflow="hidden"
          color="black"
          bg="white"
          rounded={5}
          flex={1}
          p={5}
          border='1px'
          borderColor='#2D3748'
        >
          <Box as='button' onClick={onOpen}
            textAlign="center"
            m="4px"
            border="2px dashed grey"
            h="100%"
            w="95%"
            p={4}
            color="black"
          >
            <AddIcon d='block' m='auto' />
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="center"
              fontWeight='semibold'
              // fontFamily="Cursive"
              w="full"
              marginTop="200"
              mb={2}
              display="inline"
              color="text.secondary"
            >
              {capsFirst("Add Product")}
            </Heading>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
            <ModalOverlay bg='blackAlpha.600' />
            <ModalContent bg="#E1E3E5" py={100}>
              {/* <ModalHeader textAlign="center" fontSize={12} fontWeight='thin' >Oops you are not a manufacturer</ModalHeader> */}
              <ModalHeader textAlign="center" fontWeight='bold' >Register new product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

              </ModalBody>
              <FormControl w='50%' m='auto' isRequired lineHeight={1.5} color="#2D3748">
                <FormLabel htmlFor='company-name' fontWeight='medium' >Product Code</FormLabel>
                <Input bg="white" border='1px solid #E2E8F0' id='company-name' placeholder='9867081348' onChange={e => setProductCode(e.currentTarget.value)} />
                <ButtonGroup>
                  <Button
                    mt={10}
                    colorScheme='green'
                    // isLoading={props.isSubmitting}
                    type='submit'
                    onClick={() => addProductHandler()}
                  >
                    Submit
                  </Button>
                  <Button
                    mt={10}
                    variant='ghost'
                    mr={3}
                    onClick={onClose}
                    colorScheme='red'
                  >
                    Cancel
                  </Button>
                </ButtonGroup>
              </FormControl>
              <ModalFooter>

              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider theme={theme}>
        <Flex
          // mt="100px"
          height="163px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          justifyContent="space-between"
          flexDirection="column"
          overflow="hidden"
          color="black"
          bg="white"
          rounded={5}
          flex={1}
          p={5}
          border='1px'
          borderColor='#2D3748'
        >
          <VStack mb={6}>
            <Heading
              fontSize="15px"
              fontWeight='normal'
              textAlign="left"
              // fontFamily="Cursive"
              w="full"
              mb={2}
              display="inline"
              color="text.secondary"
            >

              {capsFirst("Product Code: ")}
              <Heading
                fontSize="16px"
                // fontFamily="Cursive"
                fontWeight="bold"
                w="full"
                display="inline"
                mb={2}
              >
                {props.prodData}
              </Heading>
            </Heading>

            <Text
              fontSize="12px"
              // fontFamily="Cursive"
              // textAlign="center"
              w="full"
            >
              {"Company Code: "}
              <Text
                fontSize="13px"
                display="inline"
                fontWeight="semibold"
                // fontFamily="Cursive"
                // textAlign="center"
                w="full"
              >
                {String(props.prodData).slice(0, 3)}
              </Text>
            </Text>
          </VStack>

          <Flex justifyContent="space-between" alignContent='center' mt='20px' >
            <Link
              as={RouterLink}
              to={'/history/'+props.prodData}
              ml="140px"
              // textAlign='right'
              // align='right'
              fontSize="12px"
              // fontFamily="Cursive"
              fontWeight="semibold"
              color="accept.500"
            >
              History
              <ArrowForwardIcon color='accept.500' />
            </Link>
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}

