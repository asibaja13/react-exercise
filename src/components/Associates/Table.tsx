import React from "react";
import TableRow from "@material-ui/core/TableRow";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableBody
} from "@material-ui/core";
import Row from "./Row";
import Associate from "../../interfaces/associate";

export default function AssociatesTable(props: { associates: Array<Associate>}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.associates.map(associate => (
            <Row associate={associate} key={associate.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
