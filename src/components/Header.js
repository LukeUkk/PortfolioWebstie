import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/homepage/profile.png";
import Particles from "./Particles";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#131426d6",
    margin: "0% 10% 0% 10%",
    border: "1px solid #131426d6",
    minHeight: "95.62vh",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#ebece9",
  },
  subtitle: {
    color: "#04adc5",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: 1,
    borderRadius: "10%",
    minWidth: "17vw",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.mainContainer}>
      <Particles />
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Luke Hardcastle" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Luke Hardcastle"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Software Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
