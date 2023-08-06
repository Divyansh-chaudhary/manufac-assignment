import { Component } from "react";
import { EmployeeChartProps } from "../interfaces/interface";
import { EmployeeNode } from "./EmployeeNode";

export class EmployeeChart extends Component<EmployeeChartProps> {
  state = {
    employeeID: 0,
    supervisorID: 0,
  };

  onEmployeeClick = (employeeID: number) => {
    if (this.state.employeeID === employeeID) this.setState({ employeeID: 0 });
    else this.setState({ employeeID });
  };

  onSupervisorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ supervisorID: Number(event.target.value) });
  };

  onMove = () => {
    const { employeeID, supervisorID } = this.state;
    this.props.onMoveEmployee(employeeID, supervisorID);
    this.setState({ employeeID: 0, supervisorID: 0 });
  };

  render() {
    const { ceo } = this.props;
    const { employeeID, supervisorID } = this.state;

    return (
      <div>
        <h2 className="text-center">Employee Organization Chart</h2>
        <div className="flex gap-1 justify-center">
          <button
            className="btn"
            onClick={this.props.onUndo}
            disabled={!this.props.onUndo}
          >
            Undo
          </button>
          <button
            className="btn"
            onClick={this.props.onRedo}
            disabled={!this.props.onRedo}
          >
            Redo
          </button>
        </div>
        <div style={{ height: "30px", marginTop: "20px" }}>
          {employeeID > 0 && (
            <div>
              <label>Move employee {employeeID} to supervisor:</label>
              <select value={supervisorID} onChange={this.onSupervisorChange}>
                <option value={0}>Select Supervisor</option>
                {ceo.subordinates.map((subordinate) => (
                  <option
                    key={subordinate.uniqueId}
                    value={subordinate.uniqueId}
                  >
                    {subordinate.name}
                  </option>
                ))}
              </select>
              <button onClick={this.onMove}>Move</button>
            </div>
          )}
        </div>
        <div style={{ padding: "2rem" }}>
          <EmployeeNode employee={ceo} onEmployeeClick={this.onEmployeeClick} />
        </div>
      </div>
    );
  }
}
