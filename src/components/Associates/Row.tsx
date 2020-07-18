import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Associate from "../../interfaces/associate";

export default function Footer({ associate }: { associate: Associate }) {
  return (
    <TableRow>
      <TableCell>{associate.id}</TableCell>
      <TableCell>{associate.first_name}</TableCell>
      <TableCell>{associate.last_name}</TableCell>
      <TableCell>{associate.email}</TableCell>
      <TableCell>{associate.Department}</TableCell>
    </TableRow>
  );
}
