import React, { useState, useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { LoginModalContext } from "../../context/LoginModalContext";
import AuthButton from "../AuthButton/AuthButton";

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
  const auth = useContext(AuthContext);
  const loginModal = useContext(LoginModalContext);
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
  const authButtonClicked = () => {
    setAnchorEl(null);
  }

  const handleCloseModal = () => {
    if (loginModal.setOpen) {
      loginModal.setOpen(false);   
    }
  }

  const getLoginModalValue = () => {
    return loginModal.open ? loginModal.open : false ;
  }

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
            {auth.username? `Welcome! ${auth.username}` : 'Welcome! Please Login.'}
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
        <MenuItem onClick={authButtonClicked}>
          <AuthButton showButton={false}></AuthButton>
        </MenuItem>
        {auth.username? (<MenuItem onClick={navigateToAssociates}>Associates</MenuItem>) : null}
        
      </Menu>

      <LoginModal open={getLoginModalValue()} handleClosed={handleCloseModal}></LoginModal>
    </div>
  );
}
