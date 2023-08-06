import { Component } from "react";
import { EmployeeNodeProps } from "../interfaces/interface";

export class EmployeeNode extends Component<EmployeeNodeProps> {
  handleEmployeeClick = () => {
    this.props.onEmployeeClick(this.props.employee.uniqueId);
  };

  render() {
    const { employee } = this.props;

    return (
      <div style={{ padding: "5px" }}>
        <div>
          <span>{employee.name}</span>
          {employee.name !== "John Smith" && (
            <button className="move-btn" onClick={this.handleEmployeeClick}>
              Move
            </button>
          )}
        </div>
        {employee.subordinates.length > 0 && (
          <ul>
            {employee.subordinates.map((subordinate) => (
              <li key={subordinate.uniqueId}>
                <EmployeeNode
                  employee={subordinate}
                  onEmployeeClick={this.props.onEmployeeClick}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
