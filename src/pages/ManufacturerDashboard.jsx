import React from 'react'
import Header from "../components/Header";
import AssetsManufacturedCarousal from "../components/AssetsManufacturedCarousal";
import RequestTable from '../components/RequestTable'
import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const Home = () => {
  return (
    <>
    <Header/>
    {/* <Carousal/> */}
    {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
    {/* <ConfirmTable /> */}
    <AssetsManufacturedCarousal/>
    <RequestTable columnHeader={['Username','Product Code','Action']}/>
    
      </>  
  );
};

export default Home