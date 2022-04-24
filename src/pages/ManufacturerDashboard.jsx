import React from 'react'
import HeaderCSearch from "../components/HeaderCSearch";
import AssetsManufacturedCarousal from "../components/AssetsManufacturedCarousal";
import theme from '../theme/index'
import RequestTable from '../components/RequestTable'
import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from "react";

const Home = () => {
  const [requestDataCopy, setMovieCopy] = useState([{  _id: "625978ba7a4ebaaac35d59c0",walletAddress: "8e9bdf54-0b5a-4157-9cae-1cfffaf8849c",productId: "-1"}]);

  useEffect(async () => {
    let ans = await axios.get(`http://localhost:5000/api/customer/signIn/manufac`)
    .then(res => {
      // console.log("res.data.data.incomingRequest ->", res.data.data.incomingRequest)
      setMovieCopy(res.data.data.incomingRequest);
    }).catch((e)=>{
      console.log(e);
    })
  }, [])

  if (!requestDataCopy[0] || requestDataCopy[0].productId != "-1"){

  return (
    <>
    {/* <ChakraProvider theme={theme}>
    <HeaderCSearch/>
    </ChakraProvider> */}
    {/* <Carousal/> */}
    {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
    {/* <ConfirmTable /> */}
    <AssetsManufacturedCarousal/>
    <RequestTable _data={requestDataCopy} columnHeader={['Username','Product Code','Action']}/>
    
      </>  
  );
}
};

export default Home