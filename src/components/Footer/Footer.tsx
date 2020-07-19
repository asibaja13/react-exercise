import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AuthButton from "../AuthButton/AuthButton";
import { SelectedAssociateContext } from "../../context/SelectedAssociates";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const selectedAssociate = useContext(SelectedAssociateContext);
  const auth = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <AuthButton showButton={true}></AuthButton>
          </Typography>
          <Typography>
            {auth.username && selectedAssociate.associate?.first_name? `${selectedAssociate.associate?.first_name} ${selectedAssociate.associate?.last_name} ${selectedAssociate.associate?.email}` : '' }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
