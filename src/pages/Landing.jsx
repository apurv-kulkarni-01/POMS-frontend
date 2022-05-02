import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Header from "../components/Header"
import LogoCenter from "../components/LogoCenter"
import UserInfo from './InfoUser'

const Landing = () => {
    return (
        <ChakraProvider>
            {/* <Header /> */}
            {/* <LogoCenter /> */}
            <UserInfo />
        </ChakraProvider>
    )
}

export default Landing