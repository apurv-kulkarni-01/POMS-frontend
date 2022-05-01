import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Box, Button, Flex, Image, Input, Stack,Text,HStack } from "@chakra-ui/react";
import track from "../Images/track.png"
import metamask from "../Images/Metamask.png"
import request from "../Images/request.png"
import wait from "../Images/wait.png"
import confirm from "../Images/confirm.png"
import cong from "../Images/cong.png"
import { BiSearch } from "react-icons/bi";


const InfoUser =() =>{
    return(
        <ChakraProvider>
            <Box>
                <HStack></HStack>
            </Box>
            <Box>

            {/* section -  1 */}


                <Box w="100%" h="100vh" bg="gray.50">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={2} mt={100} as="b">Track ownership of the product</Text>
                            <Flex mt={55}>
                                <Input type="text" pattern="[0-9]*" id="search" placeholder="Track product using Code" /*onChange={event => setSearch(event.currentTarget.value)}*/ />
                                <Button background="gray.700" color="white"  leftIcon={<BiSearch />} variant="solid" /*onClick={() => { navigate('/history/' + search); setSearch(""); }}*/ >
                                    Search
                                </Button>
                            </Flex>
                        </Box>
                        <Box p="100">
                            <Image src={track} />
                        </Box>
                    </Stack>
                </Box>

                {/* section  -  2 */}


                <Box w="100%" h="100vh" bg="gray.700">
                    <Stack direction="row" height="100vh" >
                        <Box p="100" w="50%">
                            <Image src={metamask}  />
                        </Box>
                        <Box width="50%"  padding="100" textAlign="right">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={2} mt={100} color="white">One click login with metamask</Text>
                            <Button image={metamask} mt={55}>Login with Metamask</Button>
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  3 */}


                <Box w="100%" h="100vh" bg="gray.50">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={2} mt={100}>Request product</Text>
                            
                        </Box>
                        <Box p="100" w="60%">
                            <Image src={request}  />
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  4 */}

                <Box w="100%" h="100vh" bg="gray.700">
                    <Stack direction="row" height="100vh" >
                        <Box p="90" w="50%">
                            <Image src={wait}  />
                        </Box>
                        <Box width="50%"  padding="100" textAlign="right">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={2} mt={100} color="white">Wait for product confirmation</Text>
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  5 */}


                <Box w="100%" h="100vh" bg="gray.50">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={3} mt={100}>Confirm product reception</Text>
                            
                        </Box>
                        <Box p="100" w="50%">
                            <Image src={confirm}  />
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  6 */}

                <Box w="100%" h="100vh" bg="gray.700">
                    <Stack direction="row" height="100vh" >
                        <Box p="90" w="50%" mt={100}>
                            <Image src={cong}  />
                        </Box>
                        <Box width="50%"  padding="100" textAlign="right">
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={3} mt={100} color="white">Congrats!!</Text>
                            <Text fontFamily="Montserrat" fontSize='6xl' noOfLines={3}  color="white">you are the owner now!</Text>
                        </Box>
                    </Stack>
                </Box>

            </Box>
        </ChakraProvider>
    )
    
}

export default InfoUser