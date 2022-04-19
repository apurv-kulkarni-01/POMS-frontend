import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import { Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {ArrowForwardIcon,AddIcon} from '@chakra-ui/icons'
import {
  ChakraProvider,
  Heading,
  VStack,
  Text,
  Flex} from "@chakra-ui/react";
import theme from '../theme/index'

export default function Cardelem(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
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
          <Box as='button'
            textAlign="center"
            m="4px"
            border="2px dashed grey"
            h="100%"
            w="95%"
            p={4}
            color="black"
          >
            <AddIcon d='block' m='auto'/>
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
                {capsFirst("9867081348")}
              </Heading>
            </Heading>

            <Text
              fontSize="12px"
              // fontFamily="Cursive"
              // textAlign="center"
              w="full"
            >
              {"Current Owner: "}
              <Text
                fontSize="13px"
                display="inline"
                fontWeight="semibold"
                // fontFamily="Cursive"
                // textAlign="center"
                w="full"
              >
                {"Abhhishek Jha "}
              </Text>
            </Text>
          </VStack>

          <Flex justifyContent="space-between" alignContent='center' mt='20px' >
            <Link
              ml="140px"
              // textAlign='right'
              // align='right'
              fontSize="12px"
              // fontFamily="Cursive"
              fontWeight="semibold"
              color="accept.500"
            >
              Chakra UI
<ArrowForwardIcon  color='accept.500' />
            </Link>
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}
