import React from "react";
// import { Box, Icon, Flex } from "@chakra-ui/react";
import { GrReactjs } from "react-icons/gr";
import {
  Box,
  Button,
  Icon,
  VStack,
  Flex,
  Input,
  // FormControl,
  // Input
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function LogoCenter(props) {
  return (
    <VStack align="stretch">
      <Box maxW="960px" mx="auto" h={80}>
        <Icon as={GrReactjs} w={250} h={250} />
      </Box>
      <Box >
        <Flex ml={450} mr={450}>
            <Input id="search" placeholder="Track product using Code" />
          <Button background="gray.700" color="white" leftIcon={<BiSearch />} variant="solid">
            Search
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
}
