import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/HeaderCSearch'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import ProductHistoryBC from '../contracts/FetchProductHistory'

const ProductHistory = () => {

  const { productID } = useParams();


  return (
    <div>
      {/* <ChakraProvider>
          <Header />
        </ChakraProvider> */}
      {/* <h1>{productID}</h1> */}
      <HistoryTable _productID={productID}></HistoryTable>
      <ProductCard></ProductCard>
    </div>
  )
}

export default ProductHistory