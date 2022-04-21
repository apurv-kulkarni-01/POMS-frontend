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

export default function RequestTable(props) {
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
    const result = requestDataCopy.filter((movie) => {
      return movie._id !== row._id;
    });
    setMovieCopy(result);
  }

  const [requestDataCopy, setMovieCopy] = useState(requestData);

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