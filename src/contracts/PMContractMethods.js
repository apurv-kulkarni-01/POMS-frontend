import React from 'react'
import { ethers } from 'ethers';


function PMContractMethods() {
    var provider, signer;
    const PMread=null, PMwrite=null;
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            //   await window.ethereum.enable();
            //   ethereum.request({
            //     method: 'eth_accounts'
            //   }).then((res) => {
            //     document.getElementById('address').innerHTML = res[0];
            //   });
            // if (isMetamask) {
            PMwrite = new ethers.Contract(PM.address, PM.abi, signer);
            PMread = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum"));
            console.log(PMwrite);
            // }
            //   return true;
        } catch (error) {
            console.log(error.message);
            //   return false;
        }
    } else { return false; }

    return PMwrite ;
}

export default PMContractMethods

