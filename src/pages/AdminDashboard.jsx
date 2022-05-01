import React, { useState, useEffect } from 'react'
import HeaderCSearch from '../components/HeaderCSearch'
import AdminTable from '../components/AdminTable'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import {ethers} from 'ethers'

const AdminDashboard = (props) => {
    const [requestDataCopy, setMovieCopy] = useState([{ _id: "625978ba7a4ebaaac35d59c0", walletAddress: "8e9bdf54-0b5a-4157-9cae-1cfffaf8849c", productId: "-1" }]);
    const data = props._data
    const btnhandler = async () => {
        // Asking if metamask is already present or not
        const ethereum = window.ethereum
        if (ethereum) {
            // res[0] for fetching a first wallet
            ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
                const address = res[0];
                ethereum.request({
                    method: "eth_getBalance",
                    params: [address, "latest"]
                })
                    .then((balance) => {
                        props._setdata({ address: res[0], Balance: ethers.utils.formatEther(balance) });


                        // setPMContract(new ethers.Contract(address, abi, new ethers.providers.AlchemyProvider("maticmum")));
                        // console.log('this is admindashboard: ');
                    }).catch((e) => console.log(e.message))
                // console.log(data);
            }).catch((e) => {
                console.log(e.message)
            });
        } else {
            alert("install metamask extension!!");
        }
    };


    useEffect(
        () => {
            getManufacDetails()
            btnhandler()
        }, [])


    const getManufacDetails = () => {
        axios.get(`http://localhost:5000/api/customer/signIn/0x215617803F8d8a4F46f8F59382972257135766A2`)
            .then(res => {
                // console.log("res.data.data.incomingRequest ->", res.data.data.incomingRequest)
                setMovieCopy(res.data.data.incomingRequest);
            }).catch((e) => {
                console.log(e);
            })
    }
    if (!requestDataCopy[0] || requestDataCopy[0].productId != "-1") {

        return (
            <>
                {/* <ChakraProvider theme={theme}>
        <HeaderCSearch/>
        </ChakraProvider> */}
                {/* <Carousal/> */}
                {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
                {/* <ConfirmTable /> */}
                <AdminTable _data={requestDataCopy} columnHeader={['Company Name', 'Company Prefix', 'Action']} />

            </>
        );
    }

    return (
        <div>
            {/* <ChakraProvider>
                <HeaderCSearch />
            </ChakraProvider> */}


        </div>
    )
}

export default AdminDashboard