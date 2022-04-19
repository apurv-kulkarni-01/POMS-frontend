import React from 'react'
import HeaderC from '../components/HeaderC'
import AdminTable from '../components/AdminTable'


const AdminDashboard = () => {


    return (
        <div>
            <HeaderC />
            <AdminTable columnHeader={['Company Name', 'Company Prefix', 'Action']} />
        </div>
    )
}

export default AdminDashboard