import React from "react";
import { BiSearch } from "react-icons/bi";
import {Flex, Input, Button, Box, HStack} from "@chakra-ui/react"

export default function SearchTop(){
    return(
        <HStack w="686px" spacing="0">
            <Input id="search" placeholder="Track product using Code"/>
            <Button background="gray.700" color="white" leftIcon={<BiSearch />} variant="solid">
            Search
            </Button>
        </HStack>
    )
}
