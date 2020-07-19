import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";

export default function LoginModal(props: {
  open: boolean;
  handleClosed: Function;
}) {
  const [username, setUsername] = useState("");
  const auth = useContext(AuthContext);

  const updateUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    if (auth.setLogin) {
      auth.setLogin(username);
    }
    setUsername("");
    props.handleClosed();
  };

  const handleCancel = () => {
    setUsername("");
    props.handleClosed();
  };

  return (
    <form>
      <Dialog open={props.open}>
        <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={updateUsername}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary" autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
