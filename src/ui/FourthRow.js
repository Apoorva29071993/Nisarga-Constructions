import React from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { LazyLoadImage,  LazyLoadComponent } from "react-lazy-load-image-component";

const useStyles = makeStyles(theme => ({
  learnButton: {
    borderColor: "black",
    borderWidth: 2,
    textTransform: "none",
    color: "#00203FFF",
    borderRadius: 10,
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: "1.5rem",
    height: 65,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  background: {
    backgroundImage: "red",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "22em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/infoBackground.svg")`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
}));

export default function FourthRow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
  <Grid container direction="row" justify="center"
  style={{ marginTop : "100px" , backgroundColor : "teal"}} >
 
 {/* Start 1st row*/}
        <Grid item >
                <Typography variant="h3" align="center"
                    style={{ fontSize: matchesSM ? "1.25rem" : "7rem" ,
                    color : "#00203FFF" ,
                        }}
                    >
                Why Choose Jakati's
                </Typography>
        </Grid> 
 {/* End 1st row*/}   

 {/* Start 2nd row*/}
   <Grid container style={{marginTop : "50px"}} alignItems="center" justify="space-between">
    
    <Grid item >
        <img src="/assets/bulb.svg" alt="grey spotted puppy"
          width="80rem"  height="100rem"
             style={{ maxWidth: matchesMD ? 300 : undefined  }}
         />
    </Grid>
    <Grid item style={{marginLeft : "20px"}}>
    <Grid container direction="column" >
        <Grid item >
                <Typography variant="h2" align="flex-start"
                    style={{ fontSize: matchesSM ? "1.25rem" : "2.5rem" ,
                    color : "#00203FFF" ,
                        }}
                    >
                Safe Money Transaction
                </Typography>
        </Grid> 
        <Grid item >
                <Typography variant="paragraph" align="flex-start"
                    style={{ fontSize: matchesSM ? "1.25rem" : "1.25rem" ,
                    color : "#00203FFF" ,
                        }}
                    >
                We work on escrmodel . No Advance to contractors .<br/> Safe Money Transactions
                </Typography>
        </Grid>
    </Grid>   
    </Grid> 


    <Grid item >
        <img src="/assets/bell.svg" alt="grey spotted puppy"
          width="100rem"  height="100rem"
             style={{ maxWidth: matchesMD ? 300 : undefined  }}
         />
    </Grid>
    <Grid item >
    <Grid container direction="column" >
        <Grid item >
                <Typography variant="h2" align="flex-start"
                    style={{ fontSize: matchesSM ? "1.25rem" : "2.5rem" ,
                    color : "#00203FFF" ,
                        }}
                    >
                Transparency
                </Typography>
        </Grid> 
        <Grid item >
                <Typography variant="subtitle2" align="flex-start"
                    style={{ fontSize: matchesSM ? "1.25rem" : "1.25rem" ,
                    color : "#00203FFF" ,
                        }}
                    >
                Clear And Detail quotation and <br/>
                construction contracts.
                </Typography>
        </Grid>
    </Grid>   
    </Grid> 

    </Grid>
 {/* End 2nd row*/}

 

  
    </Grid>   
  );
}
