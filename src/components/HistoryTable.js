// Using this component
// <HistoryTable />
//pagination is disabled
import {useState, useEffect} from 'react'
import theme from "../theme";
import { Link as RouterLink } from 'react-router-dom';
import DataTable from "react-data-table-component";
import "../index.css";
import { Link, ChakraProvider, Text } from "@chakra-ui/react";
import "../data/historyData";
// import historyData from "../data/historyData";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ProductHistoryBC from '../contracts/FetchProductHistory'
import { Tooltip } from '@chakra-ui/react'

export default function HistoryTable({_productID}) {

  const [pending, setPending] = useState(true);
const [history, setHistory] = useState([]);
  useEffect(
    () => {
      ProductHistoryBC(_productID).then((result)=>{
        console.log(result)
        setHistory(result);
        setPending(false)
      }).catch((e)=>console.log(e))
    },
    []
  )

  const columns = [
    {
      name: "From",
      // selector: (row) => truncate(row.args.from),
      cell: (row)=>(
        <>
        <Link
         as={RouterLink}
          // href={"https://mumbai.polygonscan.com/tx/" + row.transactionHash}
          to={'/profile/'+row.args.from}
          // isExternal

        >
        <Tooltip label='View User Profile'>
          {truncate(row.args.from)}
          </Tooltip>
        </Link>
      </>
      )
      // sortable: true
    },
    {
      name: "To",
      // selector: (row) => truncate(row.args.to)
      cell: (row)=>(
        <>
        <Link
         as={RouterLink}
          // href={"https://mumbai.polygonscan.com/tx/" + row.transactionHash}
          to={'/profile/'+row.args.to}
          // isExternal

        >
        <Tooltip label='View User Profile'>
          {truncate(row.args.to)}
          </Tooltip>
        </Link>
      </>
      )
      // sortable: true
    },
    {
      name: "Transaction",
      // selector: (row) => row.transactionHash
      cell: (row) => (
        <>
          <Link
            href={"https://mumbai.polygonscan.com/tx/" + row.transactionHash}
            isExternal

          >
          <Tooltip label='View Transaction on Polygonscan'>
            {truncate(row.transactionHash)}
            </Tooltip>
          </Link>
        </>
      ),
      right: true,
    }
  ];
  function truncate(str) {
    return str.length > 10 ? str.substr(0, 10) + "..." : str;
  }

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
    left: '70px',
    top: '190px',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '48px',
  }
  return (
    <ChakraProvider theme={theme}>
      <Text style={h1Style} color='darkGray' >
        Product Ownership History
      </Text>
      {/* <h1 style={h1Style} ></h1> */}
      <div className="historyTable">
        <DataTable
          // title="Movies"
          noHeader
          columns={columns}
          data={history}
          defaultSortFieldID={1}
          pagination
          fixedHeader
          fixedHeaderScrollHeight={"365px"}
          customStyles={customStyles}
          progressPending={pending}
        />
      </div>
    </ChakraProvider>
  );
}