import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
    //color: "#e5e7e4eb",
    color: "white",
    fontSize: "xx-large",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    background: "#100d18",
    height: "100%",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  listItem: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
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
  const drawerRef = useRef(null);

  const classes = useStyles();

  const handleOutsideClick = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div" ref={drawerRef}>
      <Divider />
      <List className={classes.list}>
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
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar variant="dense" className={classes.marginAuto}>
            <IconButton onClick={() => setOpen(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuRoundedIcon className={classes.menuIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="top" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
