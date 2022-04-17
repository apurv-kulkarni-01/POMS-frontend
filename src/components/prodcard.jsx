import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider} from '@chakra-ui/react';
// import "./index.css";
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "@mui/material/Link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@material-ui/core/Dialog';
import Cardelem from "./cardelem";
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
const Input = styled('input')({
  display: 'none',
});
const useStyles = makeStyles({
  card: {
    }
});


export default function Carousal() {
  const classes = useStyles();
const [data, setData] = useState([1,2]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState();
 
console.log("the data is ", data);

  const handleDialogOpen = (character) => {
    setIsDialogOpen(true);
    setActiveCharacter(character);
  };
  return (
  <>
  <div style={{position:"absolute",top:"214px",left:"971px"}}>
  <Card sx={{ maxWidth: 265, height: "265px",borderRadius:15
 }}>
 <CardMedia
          component="img"
          height="265px"
          maxWidth="100"
          image={require("./static/images/cards/aba.jpg")}
          alt="green iguana"

        />
 </Card>

<Card elevation={0} sx={{mt:"6px", maxWidth: 280, height: "220px"
 }} >
              <CardActionArea>
       
        <CardContent>
          <Typography
            fontSize="17px"
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Company Name: {"\u00A0"}
          </Typography>
          <Typography
            fontFamily="Cursive"
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
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Current Owner:{"\u00A0"} 
          </Typography>
          <Typography
            fontFamily="Cursive"
            display="inline"
            fontSize="20px"
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            Abhishek Jha
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions marginLeft = "2px" display= "flex">
            <Stack direction="row" spacing={0} m={1} mt={1}>
               
              <label htmlFor="contained-button-file" >
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button color="success" variant="contained" component="span">
                  Add Product
                </Button>
              </label>
             
            </Stack>        </CardActions>
            </Card>
  </div>
            

 </>
  );


}
