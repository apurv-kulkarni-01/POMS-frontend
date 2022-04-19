import React from 'react'
import Header from "../components/Header";
import AssetsOwnedCarousal from "../components/AssetsOwnedCarousal";
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
    <AssetsOwnedCarousal/>
    <RequestTable columnHeader={['Username','Product Code','Action']}/>
    <ConfirmTable />
    
      </>  
  );
};

export default Home