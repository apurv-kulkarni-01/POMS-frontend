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
const [data, setData] = useState([1,2,3,4,5,6,7,8]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState();
  
console.log("the data is ", data);

  const handleDialogOpen = (character) => {
    setIsDialogOpen(true);
    setActiveCharacter(character);
  };
  return (
  <Carousel show={4.3} infinite={false} slide={3} responsive={true} transition={0.5} swiping={true} triggerClickOn={900} useArrowKeys={true} 
  leftArrow={
  <ArrowBackIosNewIcon sx={{mt:"245px", backgroundColor: "lightblue",borderRadius:"20px", border:"1px", padding:'20px' }
  }></ArrowBackIosNewIcon>} 
  rightArrow={
  <ArrowForwardIosIcon sx={{mt:"245px", backgroundColor: "lightblue",borderRadius:"20px", border:"1px", padding:'20px' }}></ArrowForwardIosIcon>
  }>

        {data.map(character => (
          <Cardelem name={character}/>  
        ))}
           
</Carousel>

  );

}
