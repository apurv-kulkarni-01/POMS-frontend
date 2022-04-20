import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Header from "../components/Header"
import LogoCenter from "../components/LogoCenter"


const Landing = () => {
    return (
        <ChakraProvider>
            <Header />
            <LogoCenter />
        </ChakraProvider>
    )
}

export default Landing