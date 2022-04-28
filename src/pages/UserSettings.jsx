import React from 'react'
import HeaderCSearch from "../components/HeaderCSearch";
import {ChakraProvider, Box, HStack, VStack, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import Typography from "@mui/material/Typography";
import theme from '../theme/index'

const Usersettings = () => {
  return (
    <>
    {/* <ChakraProvider> */}
        {/* <HeaderCSearch /> */}
    {/* </ChakraProvider> */}
    <center>
    <Typography
        // fontFamily="Cursive"
        fontSize="28px"
        // variant="h6"
        fontWeight="normal"
    >
    Edit user settings
    </Typography><br/><br/><br/>
    <Box w='33%'>
    <HStack spacing='24px'>
        <Typography
            // fontFamily="Cursive"
            fontSize="24px"
            // variant="h4"
            fontWeight="semibold"
        >
        Notifications
        </Typography>
        <VStack spacing='24px'>
            <Typography
                // fontFamily="Cursive"
                fontSize="16px"
                align='left'
            >
            We require your email to send you product<br/> and account related updates.
            </Typography><br/>
                <ChakraProvider theme={theme}>
            <form>
                <FormControl>
                    <FormLabel fontWeight='semibold' fontSize='16px' >Email</FormLabel>
                    <Input type="email" placeholder="Email" />
                </FormControl><br/>
                <Button style={{float: 'left'}} type='submit' variant='solid' colorScheme='accept' >
                    Save changes
                </Button>
            </form>
                </ChakraProvider>
        </VStack>
    </HStack>
    </Box>
    </center>
    </>  
  );
};

export default Usersettings
