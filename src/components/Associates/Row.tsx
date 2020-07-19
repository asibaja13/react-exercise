import React, { useContext } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";
import Associate from "../../interfaces/associate";
import { SelectedAssociateContext } from "../../context/SelectedAssociates";

const Name = styled.span((props: { markRed: boolean }) => ({
  color: props.markRed ? "red" : "black",
}));

export default function Row({ associate }: { associate: Associate }) {
  const selectedAssociate = useContext(SelectedAssociateContext);
  const hasNullAttributes = Object.values(associate).some((v) => v === null);

  const setSelectedAssociate = () => {
    if(selectedAssociate.setAssociate && !hasNullAttributes) {
      selectedAssociate.setAssociate(associate);
    }
  }

  return (
    <TableRow style={{cursor: hasNullAttributes ? 'not-allowed' : 'pointer'}} onClick={setSelectedAssociate}>
      <TableCell>
        <Name
          markRed={hasNullAttributes}
        >{`${associate.first_name} ${associate.last_name}`}</Name>
      </TableCell>
      <TableCell>{associate.Department}</TableCell>
    </TableRow>
  );
}
