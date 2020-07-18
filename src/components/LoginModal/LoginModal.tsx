import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

export default function LoginModal(props: { open: boolean, handleClosed: Function }) {
  
  const handleLogin = () => {
    props.handleClosed();
  };

  console.log(props.open, 'login modal props');
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClosed()} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
