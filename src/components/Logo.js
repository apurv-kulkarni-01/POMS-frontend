import React from "react";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { GrReactjs } from 'react-icons/gr';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Flex>
        <Icon as={GrReactjs} w={6} h={6} />
        <Text fontSize="lg" fontWeight="bold">
          POMS
        </Text>
      </Flex>
    </Box>
  );
}