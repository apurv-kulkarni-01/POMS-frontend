import React from "react";
import { Box, Radio } from "@chakra-ui/react";

export default function WalletNC(props) {
    return (
        <Box {...props}>
            <Radio isInvalid isDisabled size='sm'>Wallet Not Connected</Radio>
        </Box>
    );
  }
