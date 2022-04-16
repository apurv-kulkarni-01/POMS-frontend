import { Text, Stack, VStack, Box, Button } from "@chakra-ui/react";
import React from "react";


export default function UserOption() {
    return(
        <VStack p={50}>
            <Text as="b" fontSize="xl">Select option to continue further</Text>
            <Stack direction="row" spacing='100px'>
                <Button to="/manufacturer">
                    Enroll as Manufacturer
                </Button>
                <Button to="/customer">
                    Enroll as Customer
                </Button>
            
            </Stack>
        </VStack>
    );
}

