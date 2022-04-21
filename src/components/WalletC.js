import React from "react";
import { Box, Radio } from "@chakra-ui/react";

export default function WalletNC(props) {
    return (
        <Box {...props}>
            <Radio colorScheme='green' defaultChecked size='sm'>Wallet Connected</Radio>
        </Box>
    );
}
