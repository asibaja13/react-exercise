import React, { createContext, useState } from "react";
import Associate from "../interfaces/associate";

type SelectedProps = {
  setAssociate: Function;
  associate: Associate;
};

export const SelectedAssociateContext = createContext<Partial<SelectedProps>>({});

export const SelectedAssociateProvider = (props: any) => {
  const [associate, setAssociate] = useState({
    first_name: '',
    last_name: '',
    id: 0,
    email: '',
    Department: ''
  });

  return (
    <SelectedAssociateContext.Provider value={{ associate, setAssociate }}>
      {props.children}
    </SelectedAssociateContext.Provider>
  );
};