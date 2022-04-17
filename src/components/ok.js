import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import ReactDOM from "react-dom";
import theme from "./theme";
import { Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Icon, AddIcon } from "@chakra-ui/react";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

export default function Cardelem(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  if (props.name == "0") {
    return (
      <ChakraProvider theme={extendTheme(theme)}>
        <Flex
          mt="100px"
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
        >
          <Box
            textAlign="center"
            m="4px"
            border="2px dashed grey"
            h="100%"
            w="95%"
            p={4}
            color="Green"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="center"
              fontFamily="Cursive"
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
      <ChakraProvider theme={extendTheme(theme)}>
        <Flex
          mt="100px"
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
        >
          <VStack mb={6}>
            <Heading
              fontSize="15px"
              textAlign="center"
              fontFamily="Cursive"
              w="full"
              mb={2}
              display="inline"
              color="text.secondary"
            >
              {capsFirst("Product Code: ")}
              <Heading
                fontSize="16px"
                fontFamily="Cursive"
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
              fontFamily="Cursive"
              textAlign="center"
              w="full"
            >
              {"Current Owner: "}
              <Text
                fontSize="12px"
                display="inline"
                fontWeight="bold"
                fontFamily="Cursive"
                textAlign="center"
                w="full"
              >
                {"Abhhishek Jha "}
              </Text>
            </Text>
          </VStack>

          <Flex justifyContent="space-between">
            <Link
              ml="130px"
              fontSize="15px"
              fontFamily="Cursive"
              fontWeight="bold"
              color="green"
            >
              Chakra UI
            </Link>
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}

