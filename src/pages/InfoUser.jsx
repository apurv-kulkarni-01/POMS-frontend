import React,{useState} from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Box, Button, Flex, Image, Input, Stack,Text,HStack, Spacer } from "@chakra-ui/react";
import track from "../Images/track.png"
import metamask from "../Images/Metamask.png"
import request from "../Images/request.png"
import wait from "../Images/wait.png"
import confirm from "../Images/confirm.png"
import cong from "../Images/cong.png"
import logo from "../Images/logo_poms_white.png"
import { BiSearch } from "react-icons/bi";
import Header from "../components/Header"
import theme from '../theme/index'
import { useNavigate } from "react-router-dom";

const InfoUser =() =>{
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    return(
        <ChakraProvider theme={theme}>
            {/* <HStack p="2" bg="gray.700" >
                <a href="#" ><Image src={logo} boxSize="50px"/></a>
                <Spacer />
                <Stack direction="row" spacing="10">
                    <a href="#knowmore" ><Text color="white" as="b">Know more</Text></a>
                    <a href="#abtus" ><Text color="white" as="b">About us</Text></a>
                </Stack>
                <Spacer />
                <Button bg="green.400" color="white" alignContent="center">Get started</Button>
            </HStack> */}

            <Box>

            {/* section -  1 */}


                <Box w="100%" h="100vh" bg="gray.50">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={2} mt={100} as="b">Track ownership of the product</Text>
                            <Flex mt={55}>
                                <Input type="text" pattern="[0-9]*" id="search" placeholder="Track product using Code" onChange={event => setSearch(event.currentTarget.value)} border='1px' borderColor='black.200' />
                                <Button background="gray.700" color="white"  leftIcon={<BiSearch />} variant="solid" onClick={() => { navigate('/history/' + search); setSearch(""); }} >
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
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={2} mt={100} color="white">One click login with metamask</Text>
                            <Button mt={55} mx={30} bg="green.400" color="white">Get started</Button>
                            <Button mt={55} onClick="#knowmore" ><a href="#knowmore">Know more</a></Button>
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  3 */}


                <Box w="100%" h="100vh" bg="gray.50" id="knowmore">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={2} mt={100}>Request Product</Text>
                            
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
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={2} mt={100} color="white">Wait for product confirmation</Text>
                        </Box>
                    </Stack>
                </Box>


                {/* section  -  5 */}


                <Box w="100%" h="100vh" bg="gray.50">
                    <Stack direction="row" height="100vh" >
                        <Box width="50%"  padding="100" textAlign="left">
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={3} mt={100}>Confirm product reception</Text>
                            
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
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={3} mt={100} color="white">Congrats!!</Text>
                            <Text fontFamily="Inter" fontSize='6xl' noOfLines={3}  color="white">you are the owner now!</Text>
                        </Box>
                    </Stack>
                </Box>


                <Box w="100%" h="300px" bg="gray.50" textAlign="center">
                    <Text fontFamily="Inter" fontSize='6xl' paddingTop={90} id="abtus">About us</Text>
                </Box>

                <Box w="100%" bg="gray.700">
                <Text fontFamily="Inter" fontSize='6xl' color="white" textAlign="center" pt={90}>Team members</Text>
                    <HStack p={125} spacing={20}>
                        <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQEDmA5FMNecLA/profile-displayphoto-shrink_400_400/0/1632377872259?e=1657152000&v=beta&t=1zS5d6WV4Je2rhX7LM9IxuWA5RmH8jnwcHULoung7t0" borderRadius='full' boxSize='300px' />
                        <Box>
                            <Text fontFamily="Inter" fontSize='6xl'  color="white">Apurv Kulkarni</Text>
                            <a href="https://www.linkedin.com/in/apurv-kulkarni/"><Text fontFamily="Inter" fontSize='md'   color="white">LinkedIn</Text></a>
                        </Box>
                    </HStack>
                    <HStack p={125} spacing={20}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" borderRadius='full' boxSize='300px' />
                        <Box>
                            <Text fontFamily="Inter" fontSize='6xl'  color="white">Apurv Kulkarni</Text>
                            <a href="https://www.linkedin.com/in/apurv-kulkarni/"><Text fontFamily="Inter" fontSize='md'   color="white">LinkedIn</Text></a>
                        </Box>
                    </HStack>
                    <HStack p={125} spacing={20}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" borderRadius='full' boxSize='300px' />
                        <Box>
                            <Text fontFamily="Inter" fontSize='6xl'  color="white">Apurv Kulkarni</Text>
                            <a href="https://www.linkedin.com/in/apurv-kulkarni/"><Text fontFamily="Inter" fontSize='md'   color="white">LinkedIn</Text></a>
                        </Box>
                    </HStack>
                    <HStack p={125} spacing={20}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" borderRadius='full' boxSize='300px' />
                        <Box>
                            <Text fontFamily="Inter" fontSize='6xl'  color="white">Apurv Kulkarni</Text>
                            <a href="https://www.linkedin.com/in/apurv-kulkarni/"><Text fontFamily="Inter" fontSize='md'   color="white">LinkedIn</Text></a>
                        </Box>
                    </HStack>
                </Box>


            </Box>
        </ChakraProvider>
    )
    
}

export default InfoUser