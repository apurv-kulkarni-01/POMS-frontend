import React from "react";
import { Box, Text, Icon, Flex , Image} from "@chakra-ui/react";
import { GrReactjs } from 'react-icons/gr';
import logo from "../Images/logo_poms.png"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Flex flexDirection= 'row'
    justifyContent= 'center'
    alignItems= 'center'>
        {/* <Icon as={GrReactjs} w={6} h={6} />
        <Text fontSize="lg" fontWeight="bold">POMS</Text> */}
         <a href="#" ><Image src={logo} boxSize="50px"/></a>
      </Flex>
    </Box>
  );
}