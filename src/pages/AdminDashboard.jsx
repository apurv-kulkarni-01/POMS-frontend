import React from 'react'
import HeaderCSearch from '../components/HeaderCSearch'
import AdminTable from '../components/AdminTable'
import { ChakraProvider } from '@chakra-ui/react'


const AdminDashboard = () => {


    return (
        <div>
            <ChakraProvider>
                <HeaderCSearch />
            </ChakraProvider>
            
            <AdminTable columnHeader={['Company Name', 'Company Prefix', 'Action']} />
        </div>
    )
}

export default AdminDashboard