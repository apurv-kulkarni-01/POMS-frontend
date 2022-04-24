// import PM from './ProductManager.json';
import PM from './TestPM.json';
import { ethers } from 'ethers'
import React from 'react'

async function ProductHistory(productID) {
    const address = PM.address;
    const abi = PM.abi;
    const PMContract = new ethers.Contract(address, abi, new ethers.providers.AlchemyProvider("maticmum"));
   productID= ethers.BigNumber.from(productID.toString()).toHexString()
    // console.log('inside product history', productID);
    let productHistory = await PMContract.queryFilter(
        PMContract.filters.Transfer(null, null, productID),
        'earliest',
        'latest'
    )

    return productHistory;
}

export default ProductHistory