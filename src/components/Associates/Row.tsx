import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";
import Associate from "../../interfaces/associate";

const Name = styled.span((props: { markRed: boolean }) => ({
  color: props.markRed ? "red" : "black",
}));

export default function Row({ associate }: { associate: Associate }) {
  const hasNullAttributes = () => {
    return !Object.values(associate).every((v) => v !== null);
  };

  return (
    <TableRow>
      <TableCell>
        <Name
          markRed={hasNullAttributes()}
        >{`${associate.first_name} ${associate.last_name}`}</Name>
      </TableCell>
      <TableCell>{associate.Department}</TableCell>
    </TableRow>
  );
}
