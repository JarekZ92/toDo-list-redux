import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ListOfTasks from "./views/ListOfTasks";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ListOfTasks />
      </MuiThemeProvider>
    );
  }
}

export default App;
