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

const Home = (props) => {
  const [requestDataCopy, setMovieCopy] = useState([{ _id: "625978ba7a4ebaaac35d59c0", walletAddress: "8e9bdf54-0b5a-4157-9cae-1cfffaf8849c", productId: "-1" }]);
  // console.log("props is", props)
  useEffect(
    () => {
      getManufacDetails()
    }, [])

    
  const getManufacDetails = () => {
    axios.get(`http://localhost:5000/api/customer/signIn/`+props._address)
      .then(res => {
        // console.log("res.data.data.incomingRequest ->", res.data)
        setMovieCopy(res.data.data.incomingRequest);
      }).catch((e) => {
        console.log(e);
      })
  }
  if (!requestDataCopy[0] || requestDataCopy[0].productId != "-1") {

    return (
      <>
        {/* <ChakraProvider theme={theme}>
    <HeaderCSearch/>
    </ChakraProvider> */}
        {/* <Carousal/> */}
        {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
        {/* <ConfirmTable /> */}
        <AssetsManufacturedCarousal _address={props._address}/>
        <RequestTable _address={props._address} _usertype={props._usertype} _data={requestDataCopy} columnHeader={['Username', 'Product Code', 'Action']} />

      </>
    );
  }
};

export default Home