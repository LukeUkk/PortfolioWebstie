import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#100d18",
    margin: 0,
    flexDirection: "row-reverse",
  },
  menuIcon: {
    color: "#e5e7e4eb",
    fontSize: "xx-large",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    background: "#100d18",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
    textAlign: "center"
  },
  marginAuto: {
    margin: "auto",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/PortfolioWebsite" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/Resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/Projects" },
  // { listIcon: <ContactMail />, listText: "Contact", listPath: "/Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">

      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar variant="dense" className={classes.marginAuto} >
            <IconButton onClick={() => setOpen(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuRoundedIcon className={classes.menuIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="top" onClose={() => setOpen(false)}>
        {/* {sideList()} */}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
