import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

import CallToAction from "../src/ui/CallToAction";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from 'react-images';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  }
}));

export default function CompletedProjects(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const images = [{ source: '/assets/Vij1.jpg' },
  { source: '/assets/Vij2.jpg' },
  { source: '/assets/Vij6.jpg' } ,
  { source: '/assets/Vij3.jpg' } ,
  { source: '/assets/Vij4.jpg' },
  { source: '/assets/Vij5.jpg' }];
 
  return (
      <React.Fragment>
            <Typography variant="h1" style={{marginTop : "1em" , fontSize : "5em"}} align="center">
            CompletedProjects
          </Typography>
      
    <Grid container direction="row" >
        <Grid item lg style={{marginTop : "2em"}}>
           <Carousel views={images} />;
        </Grid>
        <Grid container item direction="column" lg 
        style={{marginTop : "2em" , marginLeft : "2em"}} justify="center">
           <Grid item style={{marginBottom : "2em"}}>
           <Typography variant="h3">
               Place : Vijaynagar , Bangalore
            </Typography>
           </Grid>
           <Grid item style={{marginBottom : "2em"}}>
           <Typography variant="h3">
               Dimensions : 30 X 40
            </Typography>
           </Grid>
           <Grid item style={{marginBottom : "2em"}}>
           <Typography variant="h3">
               Status : Completed On 1st Dec 2019
            </Typography>
           </Grid>
           <Grid item>
           <Typography variant="h3">
               Remarks : 6 Houses
            </Typography>
           </Grid>
        </Grid>
    </Grid>
    </React.Fragment>
  );
}
