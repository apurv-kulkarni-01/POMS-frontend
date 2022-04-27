import React from 'react'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { useParams } from 'react-router-dom';

const ProductHistory = (props) => {

  const { productID } = useParams();


  return (
    <div>
      {/* <ChakraProvider>
          <Header />
        </ChakraProvider> */}
      {/* <h1>{productID}</h1> */}
      <HistoryTable _productID={productID}></HistoryTable>
      <ProductCard _address={props._address} _productID={productID}></ProductCard>
    </div>
  )
}

export default ProductHistory