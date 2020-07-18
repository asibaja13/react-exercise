import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AssociatesTable from "./Table";
import { getAssociates } from '../../services/associate.service';
import Associate from "../../interfaces/associate";

interface Props {

}
interface State {
  associates: Array<Associate>
}

export default class Associates extends Component<Props, State> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      associates: []
    };
  }

  async componentWillMount() {
    const associates = await getAssociates();
    this.setState({
      associates
    })
    
  }

  render() {
    const { associates } = this.state;
    return (
      <Paper>
        <AssociatesTable associates={associates} />
      </Paper>
    );
  }
}
