import { Text, Stack, VStack, Box, Button,IconButton, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, {useState} from "react";
import Modal from "react-modal";
import {CloseIcon} from '@chakra-ui/icons';


Modal.setAppElement('#root')
export default function UserOption() {
    const [modal1IsOpen, setModal1IsOpen] = useState(false)
    const [modal2IsOpen, setModal2IsOpen] = useState(false)
    return(
        <VStack p={50}>
            <Text as="b" fontSize="xl">Select option to continue further</Text>
            <Stack direction="row" spacing='100px'>
                <Button onClick={()=> setModal1IsOpen(true)}>
                    Enroll as Manufacturer
                </Button>
                <Button onClick={()=> setModal2IsOpen(true)}>
                    Enroll as Customer

                </Button>
                <Modal isOpen={modal1IsOpen} /*shouldCloseOnOverlayClick={true}*/ onRequestClose={() => setModal1IsOpen(false)}>
                    <VStack p={25}>
                        <IconButton background="white" ml={1325} icon={<CloseIcon />} onClick={()=>setModal1IsOpen(false)}/> 
                        <Text fontSize='xl' color="#2D3748" lineHeight={2}>Oops you are not a manufacturer</Text>
                        <Text fontSize='5xl' color="#2D3748" lineHeight={2}>Apply to be a Manufacturer</Text>
                        <FormControl isRequired pl={300} pr={300} lineHeight={3.5} color="#2D3748">
                            <FormLabel htmlFor='company-name'>Company name</FormLabel>
                            <Input id='company-name' placeholder='Name' />
                            <FormLabel htmlFor='company-prefix'>Company prefix</FormLabel>
                            <Input id='company-prefix' placeholder='Prefix' />
                            <Button
                                mt={10}
                                colorScheme='teal'
                                // isLoading={props.isSubmitting}
                                type='Apply'
                            >
                                Apply
                            </Button>
                        </FormControl>
                    </VStack>
                </Modal>
                <Modal isOpen={modal2IsOpen} /*shouldCloseOnOverlayClick={true}*/ onRequestClose={() => setModal2IsOpen(false)}>
                    <VStack p={25}>
                        <IconButton background="white" ml={1325} icon={<CloseIcon />} onClick={()=>setModal2IsOpen(false)}/>
                        {/* <Text fontSize='xl' color="#2D3748" lineHeight={2}>Oops you are not a manufacturer</Text> */}
                        <Text fontSize='5xl' color="#2D3748" lineHeight={2}>Apply to be a Customer</Text>
                        <FormControl isRequired pl={300} pr={300} lineHeight={3.5} color="#2D3748">
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input id='name' placeholder='Name' />
                            <FormLabel htmlFor='phone'>Phone</FormLabel>
                            <Input id='phone' placeholder='Phone' />
                            <Button
                                mt={10}
                                colorScheme='teal'
                                // isLoading={props.isSubmitting}
                                type='Apply'
                            >
                                Apply
                            </Button>
                            </FormControl>
                    </VStack>
                </Modal>
            
            </Stack>
        </VStack>
    );
}

