import React from 'react'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { useParams } from 'react-router-dom';

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