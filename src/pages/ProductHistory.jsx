import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import HeaderC from '../components/HeaderC'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const ProductHistory = () => {

  
  return (
    <div>
        <ChakraProvider>
          <HeaderC/>
        </ChakraProvider>
        <HistoryTable></HistoryTable>
        <ProductCard></ProductCard>
    </div>
  )
}

export default ProductHistory