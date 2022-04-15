import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import HeaderC from "../components/HeaderC"
import LogoCenter from "../components/LogoCenter"

const Home = () => {
  return (
    <VStack m={0} p={0}>
      <HeaderC />
      <LogoCenter />
    </VStack>
  );
};

export default Home