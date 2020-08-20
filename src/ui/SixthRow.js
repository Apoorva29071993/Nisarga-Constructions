import React from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import Head from "next/head";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

export default function SixthRow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    {
      icon: "/assets/buildIcon.svg",
      iconAlt: "building construction site",
      iconMaxWidth: { maxWidth: matchesMD ? 700 : 1000 },
      backgroundColor: "#FBB03B",
      title: "Construction",
      paragraphs: [
        `Here’s where we get down to business.`,
        `Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until ready to be connected to the next piece.`,
        `Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.`,
        `Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.`,
        `Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.`
      ]
    }
  ];

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Nisarga Constructions | Home Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | The Revolution"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/revolution" />
        <link rel="canonical" key="canonical" href="arc.com/revolution" />
      </Head>

      {sections.map(section => (
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.rowContainer}
          justify={matchesMD ? "center" : undefined}
          style={{ backgroundColor: section.backgroundColor, height: "90em" }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            lg
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
                style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
              >
                {section.title}
              </Typography>
            </Grid>
            <Grid item>
              {section.paragraphs.map(text => (
                <Typography
                  align={matchesMD ? "center" : undefined}
                  variant="body1"
                  style={{ color: "#fff", maxWidth: "20em" }}
                  paragraph
                >
                  {text}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <LazyLoadImage
              threshold={400}
              src={section.icon}
              alt={section.iconAlt}
              width="100%"
              style={{ maxWidth: section.iconMaxWidth }}
            />
          </Grid>
        </Grid>
      ))}

      </Grid>
  );
}
