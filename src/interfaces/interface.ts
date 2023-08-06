export interface Employee {
  uniqueId: number;
  name: string;
  subordinates: Employee[];
}

export interface IEmployeeOrgApp {
  ceo: Employee;
  move(employeeID: number, supervisorID: number): void;
  undo(): void;
  redo(): void;
}

export interface EmployeeNodeProps {
  employee: Employee;
  onEmployeeClick: (employeeID: number) => void;
}

export interface EmployeeChartProps {
  ceo: Employee;
  onMoveEmployee: (employeeID: number, supervisorID: number) => void;
  onUndo: () => void;
  onRedo: () => void;
}
