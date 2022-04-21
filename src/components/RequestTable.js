// Using this component
// <RequestTable columnHeader={['1','2','3']}/>
//for Product Request page only use <RequestTable columnHeader={['Username','Product Code','Action']}/>
//pagination is disabled

import DataTable from "react-data-table-component";
import requestData from "../data/requestData";
import { Button, ButtonGroup, ChakraProvider, Heading } from '@chakra-ui/react'
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

  function rejectRequest(row) {
    // console.log("delete " + row._id);
    const result = requestDataCopy.filter((movie) => {
      return movie._id !== row._id;
    });
    setMovieCopy(result);
  }

  const [requestDataCopy, setMovieCopy] = useState(requestData);

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