import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AssociatesTable from "./Table";

export default class Associates extends Component {
  getAssociates = () => {
    const associates = [];
    for (let i = 0; i < 20; i++) {
      associates.push({
        id: i,
        first_name: "Adaline",
        last_name: "Zanni",
        email: "azanni0@kickstarter.com",
        Department: "Training"
      });
    }
    return associates;
  };

  render() {
    return (
      <Paper>
        <AssociatesTable associates={this.getAssociates()} />;
      </Paper>
    );
  }
}
