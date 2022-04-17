import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider} from '@chakra-ui/react';
import { styled } from '@mui/material/styles';

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
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Input = styled('input')({
  display: 'none',
});
const useStyles = makeStyles({
  card: {
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    '&:hover': {
      transition: '0.6s',
      maxWidth: "295px",
      height: "188px",
       boxShadow: "5px 10px grey"
    }
  }
});


export default function Assetelem(props) {
  const classes = useStyles();
  if (props.name == "1"){
  	return (
            <Card elevation = {0} sx={{ mt:"235px", maxWidth: 255, height: "163px"}} >
            </Card>
         
  );
  }
  else{
  	return <Card className={classes.card} elevation={20} sx={{ mt:"235px", maxWidth: 255, height: "163px", border: 2
 }} >
              <CardActionArea>
        
        <CardContent>
          <Typography
            m = "8px"
            fontFamily="Cursive"
            display="inline"
            fontSize="15px"
            fontWeight="normal"
            gutterBottom
            variant="h6"
            component="div"
          >
            Product Code: 
          </Typography>
          <Typography

            fontFamily="Cursive"
            display="inline"
            fontSize="15px"
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            9867081348
          </Typography>
          <Typography
            fontSize="11px"
            m = "8px"
            mt = "12px"
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Name:{"\u00A0"} Abhishek Jha
          </Typography>
          <Typography
            fontSize="11px"
            m = "8px"
      
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Company Code :{"\u00A0"} 9867081348
          </Typography>
          <Typography
            fontSize="11px"
            m = "8px"
            marginTop = "1px"
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Company Name:{"\u00A0"} Rolex
          </Typography>
          <Typography mt="21px" fontSize="15px">
          <Link
          ml="100px"
          mt="100px"
          href="#"
          underline="none"
          fontWeight="bold"
          fontFamily="Cursive"
        >
          {"Owner History"}

          
        </Link>
        
        </Typography>
     


        </CardContent>
      </CardActionArea>
     
            </Card>
  }
}
