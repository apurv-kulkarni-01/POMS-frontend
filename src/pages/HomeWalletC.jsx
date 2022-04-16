import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import HeaderC from "../components/HeaderC"
import LogoCenter from "../components/LogoCenter"
import UserOption from '../components/UserOption'

const Home = () => {
  return (
    <VStack m={0} p={0}>
      <HeaderC />
      <LogoCenter />
      <UserOption />
    </VStack>
  );
};

export default Home