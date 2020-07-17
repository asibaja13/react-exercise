import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function Footer(props) {
  return (
    <TableRow>
      <TableCell>{props.row.id}</TableCell>
      <TableCell>{props.row.first_name}</TableCell>
      <TableCell>{props.row.last_name}</TableCell>
      <TableCell>{props.row.email}</TableCell>
      <TableCell>{props.row.Department}</TableCell>
    </TableRow>
  );
}
