import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/AuthContext";
import { LoginModalContext } from "../../context/LoginModalContext";

export default function AuthButton() {
  const auth = useContext(AuthContext);
  const loginModal = useContext(LoginModalContext);

  const handleLogin = () => {
    if (loginModal.setOpen) {
      loginModal.setOpen(true);   
    }
  }

  const handleLogout = () => {
    if (loginModal.setOpen && auth.setLogin) {
      auth.setLogin('');
    }
  }
  
  return (
    <div>
            {auth.username ? (
              <Button onClick={handleLogout} variant="contained">Logout</Button>
            ) : (
              <Button onClick={handleLogin} variant="contained">Login</Button>
            )}
    </div>
  );
}