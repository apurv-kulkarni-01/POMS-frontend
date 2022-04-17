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
const useStyles2 = makeStyles({
  card: {
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    
  }
});

export default function Cardelem(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  if (props.name == "1"){
    return (
            <div style={{position:"absolute", top:"235px"}}>
              <Card elevation = {0} sx={{maxWidth: 255, height: "163px"}} >
              </Card>
            </div>
         
  );
  }else if(props.name == "2"){
    return  <div style={{position:"absolute", top:"235px"}}>
    <Card className={classes2.card} sx={{maxWidth: 255, height: "163px", border: 2}} > 
             <Box sx={{width: 214, height: 121, m:2.4, mt: 2.2, border: '1px dashed grey' }}>
                  <Stack direction="row" alignItems="center" spacing={2} m={2.5} mt={4}>
                    <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <AddIcon display="block"/>
                    </IconButton>
                  </label>
                  <label htmlFor="contained-button-file" >
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span">
                      Add Product
                    </Button>
                  </label>
                  
                </Stack>        
            </Box>
            </Card>
            </div>
  }
  else{
    return <div style={{position:"absolute", top:"235px"}}>
    <Card className={classes.card} elevation={20} sx={{maxWidth: 255, height: "163px", border: 2
 }} >
      <CardActionArea>
        <CardContent align="center">
          <Typography
            fontFamily="Cursive"
            display="inline"
            fontSize="15px"
            fontWeight="normal"
            gutterBottom
            variant="h6"
            component="div"
          >
            Product Code: {"\u00A0"}
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
            fontFamily="Cursive"
            variant="body2"
            color="text.secondary"
          >
            Current Owner:{"\u00A0"} KP
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          ml="80px"
          mt="30px"
          href="#"
          underline="none"
          fontWeight="bold"
          fontFamily="Cursive"
        >
          {"\u00A0"}
          {"\u00A0"} {"Owner History"}
          
        </Link>
        <ArrowForwardIcon fontSize='small' color="primary" sx={{mt:"36px"}}/>
      </CardActions>
    </Card>
    </div>
  }
}
