import React, { createContext, useState } from "react";

type ModalProps = {
  open: boolean;
  setOpen: Function;
};

export const LoginModalContext = createContext<Partial<ModalProps>>({});

export const LoginModalProvider = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <LoginModalContext.Provider value={{ open, setOpen }}>
      {props.children}
    </LoginModalContext.Provider>
  );
};
