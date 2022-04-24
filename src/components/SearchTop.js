import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Input, Button, HStack } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export default function SearchTop() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    return (
        <HStack w="686px" spacing="0">
            <Input id="search" placeholder="Track product using Code" onChange={event => setSearch(event.currentTarget.value)} />
            <Button background="gray.700" color="white" leftIcon={<BiSearch />} variant="solid" onClick={() => { navigate('/history/' + search); setSearch(""); }} >
                Search
            </Button>
        </HStack>
    )
}
