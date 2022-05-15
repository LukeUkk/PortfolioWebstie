import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#1c1919",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
// Make menu icons as the links to each page below
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Twitter />} className={classes.root} onClick={event =>  window.location.href="https://twitter.com/Lukehardcastl3"}/>

      <BottomNavigationAction icon={<Twitter />} className={classes.root} onClick={event =>  window.location.href="https://twitter.com/Lukehardcastl3"}/>
    </BottomNavigation>
  );
};
export default Footer;
