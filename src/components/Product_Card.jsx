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
useEffect(
  ()=>{
    async function getCurrentOwnerChain(){
      try {
        const productId = props._productID;
        const PMContract = new ethers.Contract(PM.address, PM.abi, new ethers.providers.AlchemyProvider("maticmum"));
        const tx = await PMContract.getCurrentOwner(parseInt(productId))
        console.log('current owner', tx);
      }
      catch (e){console.log(e)}
  }
  getCurrentOwnerChain();
  },
  []
)

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
            Company Name: {"\u00A0"}
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
            ROLEX
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
            Abhishek Jha
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions marginLeft="2px" display="flex">
        <Stack direction="row" spacing={0} m={1} mt={1}>

          {/* <label htmlFor="contained-button-file" > */}
          {/* <Input accept="image/*" id="contained-button-file" multiple type="file" /> */}
          <Button color="success" variant="contained" component="span">
            Request Product
          </Button>
          {/* </label> */}

        </Stack>        </CardActions>
    </Card>

  </>
);


}
