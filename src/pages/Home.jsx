
import { Box, ChakraProvider, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderCSearch from "../components/HeaderCSearch"
import LogoCenter from "../components/LogoCenter";
import ManufacturerModal from "../components/ManufacturerModal";
import CustomerModal from "../components/CustomerModal";
import theme from "../theme";

const Home = (props ) => {
    const userType = props._usertype
    const address = props._data
    return (
        <ChakraProvider theme={theme}>
            {/* <HeaderCSearch /> */}
            <LogoCenter />
            {
                userType === 'manufacturer' || userType === 'customer' || address.toUpperCase()==='0x215617803F8d8a4F46f8F59382972257135766A2'.toUpperCase()  ?
                    <></> :
                    <Box my={25}>
                        <Text fontSize='xl' as='b' ml={600}>
                            Select Option to Continue Further
                        </Text>
                        <HStack spacing='75px' ml={445} mt={2}>
                            <ManufacturerModal address={address}/>
                            <CustomerModal address={address}/>
                        </HStack>
                    </Box>
            }
        </ChakraProvider>
    )
}

export default Home