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
    var provider, signer;
    // const address ='adsadsa'
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")

    const { isOpen, onOpen, onClose } = useDisclosure()

    const createCustomerHandler = async () => {
        await registerOnBlockchain();
        axios.post("http://localhost:5000/api/customer/createCustomer", {
            customerAddress: address,
        })
            .then(function (res) {
                console.log("inside customer modal handler");
                console.log(res);
                onClose();
            }).catch(e => console.log(e))
    }

    const registerOnBlockchain = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const feeData = await provider.getFeeData();
        const PMcontract = new ethers.Contract(PM.address, PM.abi, signer);
        const tx = await PMcontract.createCustomer(Name, Phone,
            {
                maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
                maxPriorityFeePerGas: ethers.utils.parseUnits('40', 'gwei')
            }
        );
        console.log(tx.hash);
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
                        <Input bg="white" border='1px solid #E2E8F0' id='company-name' placeholder='John Doe' onChange={e => setName(e.currentTarget.value)} />
                        <FormLabel mt={4} htmlFor='company-prefix' fontWeight='medium' >Phone</FormLabel>
                        <Input bg="white" border='1px solid #E2E8F0' id='company-prefix' placeholder='93223 92322' onChange={e => setPhone(e.currentTarget.value)} />
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