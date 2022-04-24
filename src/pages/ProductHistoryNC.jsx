import React from 'react'
import Header from "../components/Header";
// import Carousal from "../components/carousal";
// import RequestTable from '../components/RequestTable'
// import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { useParams } from 'react-router-dom';


const ProductHistoryNC = () => {
  let { productID } = useParams();


  return (
    <>

      {/* <Header/> */}
      {/* <Carousal/> */}
      {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
      {/* <ConfirmTable /> */}
      {/* <h1>{productID}</h1> */}
      <ProductCard />
      <HistoryTable _productID={productID}/>
    </>
  );
};

export default ProductHistoryNC