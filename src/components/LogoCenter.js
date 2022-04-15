import React from "react";
// import { Box, Icon, Flex } from "@chakra-ui/react";
import { GrReactjs } from "react-icons/gr";
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Icon,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function LogoCenter(props) {
  return (
    <VStack align="stretch">
      <Box maxW="960px" mx="auto" h={80}>
        <Icon as={GrReactjs} w={250} h={250} />
      </Box>
      <Box>
        <Flex ml={45}>
          <Editable
            defaultValue="Search"
            w={500}
            // h={35}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Button leftIcon={<BiSearch />} variant="solid">
            Search
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
}
