import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/HeaderCSearch'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const ProductHistory = () => {

  
  return (
    <div>
        {/* <ChakraProvider>
          <Header />
        </ChakraProvider> */}
        <HistoryTable></HistoryTable>
        <ProductCard></ProductCard>
    </div>
  )
}

export default ProductHistory