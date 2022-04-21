import React from 'react'
import HeaderCSearch from "../components/HeaderCSearch";
import AssetsManufacturedCarousal from "../components/AssetsManufacturedCarousal";
import RequestTable from '../components/RequestTable'
import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
    <ChakraProvider>
    <HeaderCSearch/>
    </ChakraProvider>
    {/* <Carousal/> */}
    {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
    {/* <ConfirmTable /> */}
    <AssetsManufacturedCarousal/>
    <RequestTable columnHeader={['Username','Product Code','Action']}/>
    
      </>  
  );
};

export default Home