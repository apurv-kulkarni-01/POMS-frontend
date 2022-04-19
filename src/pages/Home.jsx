import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import HeaderC from "../components/HeaderC"
import LogoCenter from "../components/LogoCenter";
import ManufacturerModal from "../components/ManufacturerModal";
import CustomerModal from "../components/CustomerModal";
import theme from "../theme";

const Home = () => {
    return(
        <ChakraProvider theme={theme}>
            <HeaderC />
            <LogoCenter />
            <Text fontSize='xl' as='b' ml={600}>Select Option to Continue Further</Text>
            <Flex ml={500} >
                <ManufacturerModal />
                <CustomerModal />
            </Flex>
        </ChakraProvider>
    )
}

export default Home