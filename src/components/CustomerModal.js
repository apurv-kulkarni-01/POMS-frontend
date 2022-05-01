import {
    Box, useDisclosure, Button, ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl, FormLabel, Input, Text 
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import PM from '../contracts/ProductManager.json'
import { ethers } from 'ethers';

const CustomerModal = (props) => {
    const address = props.address
  
    // const address ='adsadsa'
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [nameErr, setNameErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()


    const createCustomerHandler = async () => {
        await registerOnBlockchain();
        axios.post("http://localhost:5000/api/customer/createCustomer", {
            customerAddress: address,
        })
            .then(function (res) {
                // console.log("inside customer modal handler");
                // console.log(res);
                onClose();
            }).catch(e => {
                console.log('Customer registration error', e);
            })
    }

    const registerOnBlockchain = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const feeData = await provider.getFeeData();
        // console.log(ethers.utils.formatUnits(feeData.maxFeePerGas,'gwei'));
        // console.log(feeData);
        const PMcontract = new ethers.Contract(PM.address, PM.abi, signer);
        const tx = await PMcontract.createCustomer(Name, Phone,
            // {
            //     maxFeePerGas: feeData.maxFeePerGas,
            //     maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
            // }
        );
        let receipt = tx.wait()
        console.log('Customer registered successfully. TxHash => ',receipt.transactionHash);
    }

    function customerNameHandler(event){
        let custName = event.currentTarget.value;
        if(custName===""){
            // console.log("customer name is not invalid");
            setNameErr(true);
        } else {
            setNameErr(false);
            setName(custName);
        }

        
    }

    function customerPhoneHandler(event){
        let custPhone = event.currentTarget.value;
        if(custPhone==="" || custPhone.length<10){
            // console.log("Customer phone number is not invalid");
            setPhoneErr(true);
        } else{
            setPhoneErr(false);
            setPhone(custPhone);
        }

    }
    




    return (
        <Box p={4} >
            <Box as='button' onClick={onOpen} border='1px solid #2D3748' py={51} px={26} textAlign="left" w='255px' >
                <Text fontSize='18px' fontWeight='normal' lineHeight='32px' textAlign="left" >Enroll as</Text>
                <Text fontWeight='black' fontSize='28px' lineHeight='32px' >Customer</Text>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl" >
                <ModalOverlay bg='blackAlpha.600' />
                <ModalContent bg="#E1E3E5" py={100}  >
                    {/* <ModalHeader textAlign="center" fontSize={12} fontWeight='thin' >Oops you are not a manufacturer</ModalHeader> */}
                    <ModalHeader textAlign="center" fontWeight='bold' >Apply to be a Customer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>
                    <FormControl w='50%' m='auto' isRequired lineHeight={1.5} color="#2D3748">
                        <FormLabel htmlFor='company-name' fontWeight='medium'
                        >Name</FormLabel>
                        <Input bg="white" border='1px solid #E2E8F0' id='customer-name' placeholder='John Doe' /*onChange={e => setName(e.currentTarget.value)}*/ onChange={customerNameHandler}/>
                        {nameErr?<Text color="red">Please enter a valid name</Text>: ""}
                        <FormLabel mt={4} htmlFor='company-prefix' fontWeight='medium' >Phone</FormLabel>
                        <Input type="text" pattern="[0-9]*" bg="white" border='1px solid #E2E8F0' id='company-prefix' placeholder='93223 92322' /*onChange={e => setPhone(e.currentTarget.value)}*/ onChange={customerPhoneHandler} maxLength="10" />
                        {phoneErr?<Text color="red">Please enter a valid phone number</Text>: ""}
                        <ButtonGroup>
                            <Button
                                mt={10}
                                colorScheme='green'
                                // isLoading={props.isSubmitting}
                                type='submit'
                                onClick={createCustomerHandler}
                            >
                                Apply
                            </Button>
                            <Button
                                mt={10}
                                variant='ghost'
                                mr={3}
                                onClick={onClose}
                                colorScheme='red'
                            >
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </FormControl>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default CustomerModal;