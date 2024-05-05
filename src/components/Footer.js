import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Twitter from "@material-ui/icons/Twitter";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#100d18",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#e5e7e4eb",
      "&:hover": {
        fill: "rgb(209 201 130)",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Home />} className={classes.root} component={Link} to="/PortfolioWebsite"/>
      <BottomNavigationAction icon={<AssignmentInd />} className={classes.root} component={Link} to="/Resume"/>
      <BottomNavigationAction icon={<Apps />} className={classes.root} component={Link} to="/Projects"/>
      {/* <BottomNavigationAction icon={<Twitter />} className={classes.root} onClick={event =>  window.location.href="https://twitter.com/Lukehardcastl3"}/> */}
    </BottomNavigation>
  );
};
export default Footer;
