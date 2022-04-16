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
      <Box>
        <Flex ml={45} >
          <Editable
            defaultValue="Track product using Code"
            w={500}
            h={35}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            
          >
            <EditablePreview pl={2} />
            <EditableInput />
          </Editable>
            {/* <FormControl isInvalid={isError}>

              <Input
                id='search'
                type='text'
                value={input}
                onChange={handleInputChange}
              />
            </FormControl> */}
          <Button leftIcon={<BiSearch />} variant="solid" h={35}>
            Search
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
}
