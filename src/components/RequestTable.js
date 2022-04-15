// import ReactDOM from "react-dom";

import DataTable from "react-data-table-component";
import requestData from "../data/requestData";
import {  Button, ButtonGroup } from '@chakra-ui/react'
// import theme from './theme/index';
import "../index.css";
import { useState } from "react";

export default function RequestTable() {
    const columns = [
      {
        name: "Username",
        selector: (row) => row.walletAddress,
        width: "370px",
        // sortable: true
      },
      {
        name: "Product Code",
        selector: (row) => row.productId,
        width: "460px",      
        // sortable: true
      },
      {
        name: "Action",
        button: true,
        cell: (row) => (
          <ButtonGroup variant='outline' spacing='3'>
            <Button fontSize='16px' fontWeight="semibold" colorScheme='accept' variant="solid">Accept</Button>
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
  
    function rejectRequest(row) {
      console.log("delete " + row._id);
      const result = requestDataCopy.filter((movie) => {
        return movie._id !== row._id;
      });
      setMovieCopy(result);
    }
  
    const [requestDataCopy, setMovieCopy] = useState(requestData);
  
    return (
      <div className="requestDataTable">
        <DataTable
          columns={columns}
          data={requestDataCopy}
          pagination
          noHeader
          fixedHeader
          fixedHeaderScrollHeight={"286px"}
          customStyles={customStyles}
        />
      </div>
  
    );
  }