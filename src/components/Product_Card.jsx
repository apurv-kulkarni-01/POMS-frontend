import React, { useState, useEffect } from "react";
// import "./index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { ethers } from 'ethers';
import Stack from '@mui/material/Stack';
import PM from '../contracts/ProductManager.json'
import axios from "axios";

const Input = styled('input')({
  display: 'none',
});
const useStyles = makeStyles({
  card: {
    position: "absolute",
    top: "214px"
  }
});


export default function ProductCard(props) {
  const classes = useStyles();
  const [data, setData] = useState([1, 2]);

  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [activeCharacter, setActiveCharacter] = useState();

  // console.log("the data is ", data);

  // const handleDialogOpen = (character) => {
  //   setIsDialogOpen(true);
  //   setActiveCharacter(character);
  // };
  const [blockchainOwner, setOwner] = useState('');


  useEffect(
    () => {
      async function getCurrentOwnerChain() {
        try {
          const productId = props._productID;
          const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum"));
          let owner = await PMContract.getCurrentOwner(parseInt(productId))
          setOwner(owner.toLowerCase());
          // console.log('current owner', blockchainOwner, 'props',);
          // metamaskAdd = 
        } catch (e) { console.log(e) }
      }
      getCurrentOwnerChain()
    },
    []
  )

  const requestBtnHandler = () => {
    axios.post("http://localhost:5000/api/customer/addRequest/" + blockchainOwner.toLowerCase(), {
      walletAddress: props._address,
      productId: props._productID,
    })
      .then(function (res) {
        console.log("Request Sent to Owner =>", blockchainOwner);
        console.log(res);
        // onClose();
      }).catch(e => console.log(e))

  }


    return (
      <>

        <Card className={classes.card} sx={{
          marginLeft: "971px", maxWidth: 265, height: "265px", borderRadius: 15
        }}>
          <CardMedia
            component="img"
            height="265px"
            maxWidth="100"
            image={require("./static/images/cards/aba.jpg")}
            alt="green iguana"

          />
        </Card>

        <Card elevation={0} sx={{
          marginLeft: "971px", maxWidth: 280, height: "220px", position: "absolute", top: "487px"
        }} >
          <CardActionArea>

            <CardContent>
              <Typography
                fontSize="17px"
                // fontFamily="Cursive"
                variant="body2"
                color="text.secondary"
              >
                Company Prefix: {"\u00A0"}
              </Typography>
              <Typography
                // fontFamily="Cursive"
                display="inline"
                fontSize="20px"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                {String(props._productID).slice(0,3)}
              </Typography>

              <Typography
                mt="5px"
                fontSize="17px"
                // fontFamily="Cursive"
                variant="body2"
                color="text.secondary"
              >
                Current Owner:{"\u00A0"}
              </Typography>
              <Typography
                // fontFamily="Cursive"

                display="inline"
                fontSize="20px"
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="semibold"
              >
                {blockchainOwner}
                {/* Abhishek Jha */}
              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions marginLeft="2px" display="flex">
            <Stack direction="row" spacing={0} m={1} mt={1}>

              {/* <label htmlFor="contained-button-file" > */}
              {/* <Input accept="image/*" id="contained-button-file" multiple type="file" /> */}
              {/* && (blockchainOwner.toString() != props._address.toString()) */}
              {(props._address) ?
                <Button color="success" variant="contained" component="span" onClick={() => requestBtnHandler()}>
                  Request Product
                </Button> : " "
              }
              {/* </label> */}

            </Stack>        </CardActions>
        </Card>

      </>
    );


}
