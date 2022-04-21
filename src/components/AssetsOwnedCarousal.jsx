import React, { useState, useEffect } from "react";
import theme from "../theme/index";
import AssetsOwned from "./AssetsOwned";

import {
  ChakraProvider,
  Container,
  Heading
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

export default function Carousal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

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
          {data.slice(5, 15).map((post, index) => (
            <AssetsOwned />
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}
