import React from 'react'
import HeaderC from '../components/HeaderC'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const ProductHistory = () => {

  
  return (
    <div>
        <HeaderC/>
        <HistoryTable></HistoryTable>
        <ProductCard></ProductCard>
    </div>
  )
}

export default ProductHistory