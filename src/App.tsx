import { Component } from "react";
import { EmployeeChart } from "./components/EmployeeChart";
import EmployeeOrgApp from "./components/EmployeeOrgApp";
import { ceo } from "./data";

class App extends Component {
  private employeeOrgApp: EmployeeOrgApp;

  constructor(props: any) {
    super(props);
    this.employeeOrgApp = new EmployeeOrgApp(ceo);
  }

  moveEmployee = (employeeID: number, supervisorID: number) => {
    this.employeeOrgApp.move(employeeID, supervisorID);
    this.forceUpdate();
  };

  undo = () => {
    this.employeeOrgApp.undo();
    this.forceUpdate();
  };

  redo = () => {
    this.employeeOrgApp.redo();
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <EmployeeChart
          ceo={this.employeeOrgApp.ceo}
          onMoveEmployee={this.moveEmployee}
          onUndo={this.undo}
          onRedo={this.redo}
        />
      </div>
    );
  }
}

export default App;
