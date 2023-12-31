import { Employee } from "./interfaces/interface";

// Sample data to initialize the EmployeeOrgApp and render the UI
export const ceo: Employee = {
  uniqueId: 1,
  name: "John Smith",
  subordinates: [
    {
      uniqueId: 2,
      name: "Margot Donald",
      subordinates: [
        {
          uniqueId: 3,
          name: "Cassandra Reynolds",
          subordinates: [
            {
              uniqueId: 4,
              name: "Mary Blue",
              subordinates: [],
            },
            {
              uniqueId: 5,
              name: "Bob Saget",
              subordinates: [
                {
                  uniqueId: 6,
                  name: "Tina Teff",
                  subordinates: [
                    { uniqueId: 7, name: "Will Turner", subordinates: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      uniqueId: 8,
      name: "Tyler Simpson",
      subordinates: [
        {
          uniqueId: 9,
          name: "Harry Tobs",
          subordinates: [
            {
              uniqueId: 12,
              name: "Thomas Brown",
              subordinates: [],
            },
          ],
        },
        { uniqueId: 10, name: "George Carrey", subordinates: [] },
        { uniqueId: 11, name: "Gary Styles", subordinates: [] },
      ],
    },
    {
      uniqueId: 13,
      name: "Ben Willis",
      subordinates: [],
    },
    {
      uniqueId: 14,
      name: "Georgina Flangy",
      subordinates: [{ uniqueId: 15, name: "Sophie Turner", subordinates: [] }],
    },
  ],
};
