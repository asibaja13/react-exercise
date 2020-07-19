import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/AuthContext";
import { LoginModalContext } from "../../context/LoginModalContext";
import { useHistory } from "react-router-dom";
import { SelectedAssociateContext } from "../../context/SelectedAssociates";

export default function AuthButton(props: { showButton: boolean }) {
  const auth = useContext(AuthContext);
  const loginModal = useContext(LoginModalContext);
  const selectedAssociate = useContext(SelectedAssociateContext);
  const history = useHistory();

  const handleLogin = () => {
    if (loginModal.setOpen) {
      loginModal.setOpen(true);
    }
  };

  const handleLogout = () => {
    if (loginModal.setOpen && auth.setLogin && selectedAssociate.setAssociate) {
      auth.setLogin("");
      selectedAssociate.setAssociate({});
      history.push("/");
    }
  };

  if (!props.showButton) {
    return (
      <>
        {auth.username ? (
          <span onClick={handleLogout}>Logout</span>
        ) : (
          <span onClick={handleLogin}>Login</span>
        )}
      </>
    );
  }

  return (
    <>
      {auth.username ? (
        <Button onClick={handleLogout} variant="contained">
          Logout
        </Button>
      ) : (
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      )}
    </>
  );
}
