// Using this component
// <RequestTable columnHeader={['1','2','3']}/>
//for Product Request page only use <RequestTable columnHeader={['Username','Product Code','Action']}/>
//pagination is disabled

import DataTable from "react-data-table-component";
import { Button, ButtonGroup, ChakraProvider, Heading } from '@chakra-ui/react'
import "../index.css";
import { useState, useEffect } from "react";
import theme from "../theme";
import axios from 'axios';
import PM from '../contracts/ProductManager.json'
import { ethers } from 'ethers';


export default function RequestTable(props) {
  // console.log("promise: ", requestData())
  const [requestDataCopy, setMovieCopy] = useState(props._data);
  var customer;
  var manufacturer;

  const reuestAccepted = async (row) => {
    try {
      console.log("user type is", props._usertype)
      if (props._usertype == "manufacturer") {
        customer = "false"
        manufacturer = "true"
      } else {
        customer = "true"
        manufacturer = "false"
      }
      await shipProductOnChain(row);
      axios.post("http://localhost:5000/api/customer/acceptProductRequest/" + row.walletAddress, {
        walletAddress: props._address,
        productId: row.productId,
        isCustomer: customer,
        isManufacturer: manufacturer

      })
        .then(function (res) {
          console.log("request accepeted");
          console.log(res);
          // onClose();
          const result = requestDataCopy.filter((movie) => {
            return movie._id !== row._id;
          });
          setMovieCopy(result);
        }).catch(e => console.log(e))
    }
    catch (e) {
      console.log(e);
    }
  }
  const shipProductOnChain = async (row) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // const feeData = await provider.getFeeData();
    // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas,'gwei'));
    const PMcontract = new ethers.Contract(PM.address, PM.abi, signer);
    const tx = await PMcontract.shipProduct(row.walletAddress, row.productId,
      // {
      //   maxFeePerGas: feeData.maxFeePerGas,
      //   maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
      // }
    );
    const receipt =await tx.wait();

    console.log('product has been shipped to: ', row.walletAddress, '\ntx hash', receipt.transactionHash);
  }
  const declineRequest = (row) => {
    // await registerOnBlockchain();
    axios.post("http://localhost:5000/api/customer/declineProductRequest/" + row.walletAddress, {
      walletAddress: props._address,
      productId: row.productId,
      isCustomer: customer,
      isManufacturer: manufacturer

    })
      .then(function (res) {
        console.log("request accepeted");
        console.log(res);
        // onClose();
        const result = requestDataCopy.filter((movie) => {
          return movie._id !== row._id;
        });
        setMovieCopy(result);
        console.log('product declined ');
      }).catch(e => console.log(e))

  }

  // console.log("ok", requestDataCopy)

  const columns = [
    {
      name: props.columnHeader[0],
      selector: (row) => row.walletAddress,
      width: "370px",
      // sortable: true
    },
    {
      name: props.columnHeader[1],
      selector: (row) => row.productId,
      width: "460px",
      // sortable: true
    },
    {
      name: props.columnHeader[2],
      button: true,
      cell: (row) => (
        <ButtonGroup variant='outline' spacing='3'>
          <Button fontSize='16px' fontWeight="semibold" colorScheme='accept' variant="solid" onClick={() => reuestAccepted(row)}>Accept</Button>
          <Button fontSize='16px' fontWeight="semibold" colorScheme="red" variant='outline' onClick={() => declineRequest(row)}>Reject</Button>
        </ButtonGroup>
      ),
      width: "auto",
    }
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '54px', // override the row height
        fontWeight: 'medium',
        fontSize: '14px',
      },
    },
    headRows: {
      style: {
        fontSize: '13px',
      },
    },
    headCells: {
      style: {
        padding: '10px', // override the cell padding for head cells
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#4A5568',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        color: '#2D3748',
      },
    },
  };


  return (
    <ChakraProvider theme={theme}>
      <Heading
        fontSize="32px"
        // fontFamily="Cursive"
        fontWeight="semibold"
        pos="absolute"
        top='508'
        left='131px'
        color='darkGray'
      >
        Incoming Product Requests
      </Heading>

      <div className="requestDataTable">
        <DataTable
          columns={columns}
          data={requestDataCopy}
          // pagination
          noHeader
          fixedHeader
          fixedHeaderScrollHeight={"286px"}
          customStyles={customStyles}
        />
      </div>
    </ChakraProvider>
  );
}