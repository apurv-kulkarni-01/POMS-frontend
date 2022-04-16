// Using this component
// <ConfirmTable />
//pagination is disabled

import DataTable from "react-data-table-component";
import requestData from "../data/requestData";
import {  Button, ChakraProvider } from '@chakra-ui/react'
import "../index.css";
import { useState } from "react";
import theme from "../theme";

export default function ConfirmTable() {
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
              fontSize:'14px',
          },
      },
      headRows:{
        style:{
          fontSize:'13px',
        },
      },
      headCells: {
          style: {
              padding: '10px', // override the cell padding for head cells
              fontSize:'13px',
              fontWeight:'bold',
          },
      },
      cells: {
          style: {
              paddingLeft: '8px', // override the cell padding for data cells
              paddingRight: '8px',
              
          },
      },
  };
  
    function acceptProduct(row) {
      console.log("confirm " + row._id);
      const result = requestDataCopy.filter((movie) => {
        return movie._id !== row._id;
      });
      setMovieCopy(result);
    }
  
    const [requestDataCopy, setMovieCopy] = useState(requestData);
  
    return (
        <ChakraProvider theme={theme}>
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