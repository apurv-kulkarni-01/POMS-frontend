// import { IconButton } from "@chakra-ui/button";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Flex, VStack, Heading, Switch } from "@chakra-ui/react";

import { Modal } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserDashboard from "./pages/UserDashboard";
// import NavBar from "./components/Header";
import Landing from "./pages/Landing"
import UserSettings from "./pages/UserSettings"
import ProductHistory from "./pages/ProductHistory"
import ProductHistoryNC from "./pages/ProductHistoryNC"
import Home from "./pages/Home"
import HomeWalletC from "./pages/HomeWalletC"
import AdminDashboard from "./pages/AdminDashboard";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import Header from "./components/Header";
import axios from "axios";

function App() {

    const [userdata, setUserdata] = useState({
        address: "",
        Balance: 0,
      });
      
const [userType, setUser] = useState([]);
const getUser = () => {
    axios.get("http://localhost:5000/api/customer/signIn/manufac")
    .then((res) => {
        console.log(res.data.message);
        const userType = res.data.message;
        setUser(userType);
    });
};

useEffect(()=> getUser(),[])


    return (
        <>
            <Router>
            <Header _setdata={setUserdata} _data={userdata} _userType={userType}/>  
                <Routes>
                    <Route path='/' element={userdata.address? <Navigate to='/home' /> : <Landing />} />
                    <Route path='/home' element={userdata.address? <Home _userType={userType} /> : <Landing />} />
                    <Route path='/customer' element={<UserDashboard />} />
                    <Route path='/manufacturer' element={<ManufacturerDashboard />} />
                    <Route path='/settings' element={<UserSettings />} />
                    <Route path='/admin' element={<AdminDashboard />} />
                    <Route path='/history' element={userdata.address? <ProductHistory/> : <ProductHistoryNC />} />
                    <Route path='/history/:productID' element={userdata.address? <ProductHistory/> : <ProductHistoryNC />} />

                    {/* <Route path='/' element={<Landing />} /> */}

                    {/* <Home/> */}
                    {/* <HomeWalletC/> */}
                    {/* <AdminDashboard/> */}
                    {/* <ManufacturerDashboard/> */}
                    {/* <UserDashboard /> */}
                    {/* <ProductHistory/> */}
                    {/* <ProductHistoryNC/> */}
                    {/* <UserSettings /> */}
                </Routes>
            </Router></>
    )
}

export default App;
