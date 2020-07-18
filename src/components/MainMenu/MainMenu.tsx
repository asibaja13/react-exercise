import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import LoginModal from '../LoginModal/LoginModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToAssociates = () => {
    setAnchorEl(null);
    history.push("/associates");
  };
  const navigateToHome = () => {
    setAnchorEl(null);
    history.push("/");
  };
  const openLoginModal = () => {
    setAnchorEl(null);
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  console.log(isOpenModal, 'MainMenu');
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome! Please Login.
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={navigateToHome}>Home</MenuItem>
        <MenuItem onClick={openLoginModal}>LogIn</MenuItem>
        <MenuItem onClick={navigateToAssociates}>Associates</MenuItem>
      </Menu>

      <LoginModal open={isOpenModal} handleClosed={handleCloseModal}></LoginModal>
    </div>
  );
}
