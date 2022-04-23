
import { Box, ChakraProvider, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderCSearch from "../components/HeaderCSearch"
import LogoCenter from "../components/LogoCenter";
import ManufacturerModal from "../components/ManufacturerModal";
import CustomerModal from "../components/CustomerModal";
import theme from "../theme";

const Home = () => {
    return(
        <ChakraProvider theme={theme}>
            <HeaderCSearch />
            <LogoCenter />
            <Box my={25}>
            <Text fontSize='xl' as='b' ml={600}>Select Option to Continue Further</Text>
            
            <HStack spacing='75px' ml={445} mt={2}>
                <ManufacturerModal />
                <CustomerModal />
            </HStack>
            </Box>
        </ChakraProvider>
    )
}

export default Home