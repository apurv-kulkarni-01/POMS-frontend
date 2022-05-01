// Using this component
// <ConfirmTable />
//pagination is disabled

import DataTable from "react-data-table-component";
// import requestData from "../data/requestData";
import { Button, ChakraProvider, Heading } from '@chakra-ui/react'
import "../index.css";
import { useState } from "react";
import theme from "../theme/index";
import axios from 'axios';
import PM from '../contracts/ProductManager.json'
import { ethers } from 'ethers';


export default function ConfirmTable(props) {
  const columns = [
    {
      name: 'Product Code',
      selector: (row) => row.productId,
      width: "370px",
      // sortable: true
    },

    {
      name: 'Action',
      button: true,
      cell: (row) => (
        <Button fontSize='16px' fontWeight="semibold" colorScheme="accept" variant='solid' onClick={() => acceptProduct(row)}>Confirm</Button>
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
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',

      },
    },
  };

  async function acceptProduct(row) {


    // console.log("user type is", props)
    await confirmProductlLockchain(row);
    // await registerOnBlockchain();
    axios.post("http://localhost:5000/api/customer/confirmProduct/" + props._address, {
      productId: row.productId
    })
      .then(function (res) {
        console.log("Product request accepeted");
        // console.log(res);
        // console.log("confirm " + row._id);
        const result = requestDataCopy.filter((movie) => {
          return movie._id !== row._id;
        });
        setMovieCopy(result);
        // onClose();
      }).catch(e => console.log(e))

  }

  const confirmProductlLockchain = async (row) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // const feeData = await provider.getFeeData();
      // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas,'gwei'));
      const PMcontract = new ethers.Contract(PM.address, PM.abi, signer);
      const tx = await PMcontract.receiveProduct(
        row.productId,
        // {
        //   maxFeePerGas: feeData.maxFeePerGas,
        //   maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
        // }
      );
      const receipt = await tx.wait();
      // console.log('receipt is: ', receipt);
      console.log('Product received: TxHash => ', receipt.transactionHash);
    }
    catch (e) {
      console.log(e);
    }
  }
  const [requestDataCopy, setMovieCopy] = useState(props._data);

  return (

    <ChakraProvider theme={theme}>
      <Heading
        fontSize="32px"
        // fontFamily="Cursive"
        fontWeight="semibold"
        pos="absolute"
        top='955px'
        left='131px'
        color='darkGray'
      >
        Confirm Product Reception
      </Heading>
      <div className="confirmDataTable">
        <DataTable
          columns={columns}
          data={requestDataCopy}
          //   pagination
          noHeader
          fixedHeader
          fixedHeaderScrollHeight={"286px"}
          customStyles={customStyles}
        />
      </div>
    </ChakraProvider>
  );
}