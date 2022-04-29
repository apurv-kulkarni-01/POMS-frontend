// Using this component
// <RequestTable columnHeader={['1','2','3']}/>
//for Admin page only use <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/>
//pagination is enabled

import DataTable from "react-data-table-component";
import requestData from "../data/requestData";
import { Button, ButtonGroup, ChakraProvider, Text } from '@chakra-ui/react'
import "../index.css";
import { useState } from "react";
import theme from "../theme";
import MM from '../contracts/ManufacturerManager.json'
import axios from "axios";
import { ethers, BigNumber } from "ethers";
export default function RequestTable(props) {

  const [requestDataCopy, setMovieCopy] = useState(props._data);

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
          <Button fontSize='16px' fontWeight="semibold" colorScheme='accept' variant="solid" onClick={() => acceptManufacturer(row)}>Accept</Button>
          <Button fontSize='16px' fontWeight="semibold" colorScheme="red" variant='outline' onClick={() => rejectRequest(row)}>Reject</Button>
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
  const h1Style = {
    position: 'absolute',
    left: '154px',
    top: '130px',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '48px',
  }

  function rejectRequest(row) {
    //   console.log("delete " + row._id);
    axios.post('http://localhost:5000/api/manufacturer/declineManufacturer', {
      manufacturerAddress: row.walletAddress,
      companyCode: row.productId,
    }).then((res) => {
      console.log(res.message);
      const result = requestDataCopy.filter((movie) => {
        return movie._id !== row._id;
      });
      setMovieCopy(result);
    }).catch((e) => { console.log('rejecting manufacturer error', e) })
   
  }

  // const [requestDataCopy, setMovieCopy] = useState(requestData);
  // "_id": "62663f99b48b5b56b42f0e87",
  // "walletAddress": "bkfjhfkd",
  // "productId": "1111"

  const manufacVerified = (row) => {
    // await registerOnBlockchain();
    // console.log(row);
    axios.post("http://localhost:5000/api/manufacturer/verifyManufacturer", {
      manufacturerAddress: row.walletAddress,
      companyCode: row.productId
    })
      .then(function (res) {
        console.log("manufacturer verified");
        console.log(res);
        // onClose();
      }).catch(e => console.log(e))
  }


  const acceptManufacturer = async (row) => {
    try {
      // console.log('start manufac register', row);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // const feeData = await provider.getFeeData();
      let walletAddress = row.walletAddress.toLowerCase();
      const PMcontract = new ethers.Contract(MM.address, MM.abi, signer);
      // console.log('logging feeddata',feeData.maxFeePerGas, 'parseunits',ethers.utils.parseUnits('40','gwei') );
      // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas,"gwei"));
      // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas));
      const tx = await PMcontract.enrollManufacturer(
        walletAddress,
        parseInt(row.productId),    //companycode
        row._id,  //copany name
        1,
        {
          // maxFeePerGas: feeData.maxFeePerGas.add(BigNumber.from('100'))._hex,
          // maxPriorityFeePerGas: feeData.maxPriorityFeePerGas.add(BigNumber.from('100'))._hex,
          // maxFeePerGas: ethers.utils.parseUnits('50','gwei'),
          // maxPriorityFeePerGas: ethers.utils.parseUnits('40','gwei'),
          // maxFeePerGas: feeData.maxFeePerGas,
          // maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
        }
      );
      // tx.wait();
      console.log(tx.hash);
      manufacVerified(row);
      // remove the entry from frontend
      const result = requestDataCopy.filter((movie) => {
        return movie._id !== row._id;
      });
      setMovieCopy(result);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Text style={h1Style} color='darkGray' >
        Incoming Manufacturer Request
      </Text>
      <div className="adminDataTable">
        <DataTable
          columns={columns}
          data={requestDataCopy}
          pagination
          noHeader
          fixedHeader
          fixedHeaderScrollHeight={"486px"}
          customStyles={customStyles}
        />
      </div>
    </ChakraProvider>
  );
}