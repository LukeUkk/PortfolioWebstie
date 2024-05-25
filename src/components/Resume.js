import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Particles from "./Particles";
import Typed from "react-typed";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#131426d6",
    margin: "0% 10% 0% 10%",
    borderRadius: "4px",
    border: "1px solid #131426d6",
    minHeight: "95.62vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,

    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
        minHeight: "83vh",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    borderRadius: "8px",
    position: "relative",
    margin: "5rem 3rem 5rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
      "&:nth-of-type(4n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
        padding: "0% 10% 0% 10%",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  paddingBottom: {

  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Particles />

      <Typography variant="h4" align="center" className={classes.heading } BlinkMacSystemFont>
          Working Experience
        <Typography variant="body1" align="center" className={classes.body1}>
            Breif Overview
        </Typography>
      </Typography>

      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["FullStack Web Developer"]} typeSpeed={50} />
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Effective Consumable Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
              I worked with the MD on the design of the <i>GreenAgenda</i> web page, the website was made using wordpress.org. Also while I was employed here, I redesigned their customer facing website to make it modern & responsive. This was an important task as their website was the main source of income.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
             <Typed strings={["FullStack Web Developer"]} typeSpeed={50} />

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            DIVA Telecom
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             I was employed by Diva to finish creating their Laravel based internal management system, which each employee used daily. 
             The project started at the beginning of 2017 and it wasn't kept uptodate so I gained alot of experience when it came to debugging other peoples code after upgrading. 
             Also while at the company I was tasked with planing and making a promotional landing page, converting the design teams mockups into a usable web application, this ended up generating sales.
          </Typography>
        </Box>



        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["Software Developer"]} typeSpeed={50} />
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
            ESP Projects
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Co-Led the development efforts for the Laravel/Vue.js-based intranet system, unlocking its full potential and transitioning it into a scalable SaaS product primed for resale. Simultaneously, collaborated on crafting tailored Laravel applications for clients, integrating diverse APIs to meet unique business needs. Instrumental in expanding the company's software offerings and delivering tailored solutions to clients.
          </Typography>
        </Box>
        
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        > 
          2023
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["Software Developer"]} typeSpeed={50} />
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
            One Call
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Thrived as a member of a global team at OneCall Insurance, contributing as a full-stack developer. Led autonomous projects from inception to deployment, navigating complex requirements and collaborating seamlessly across borders. Facilitated productive meetings to align project goals and drive innovation, ensuring timely delivery of robust solutions that enhanced the company's digital infrastructure.
          </Typography>
        </Box>


        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["BACKEND DEVELOPER|"]} typeSpeed={50} />
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
            Rejuvenate Digital
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Contributed as a full-stack developer at a leading digital agency specializing in e-commerce websites for mid to large companies, including renowned brands like Vintage Cash Cow. Focused primarily on backend development, handling APIs and database retrieval, while also engaging in frontend tasks. Played a pivotal role in delivering robust and scalable e-commerce solutions that drive client success.
          </Typography>
        </Box>
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        > 
          2024
        </Typography>

      </Box>
    </Box>
  );
};

export default Resume;
