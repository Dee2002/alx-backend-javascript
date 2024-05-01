/* Define interface Student */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/* Create students */
const student1: Student = { firstName: "John", lastName: "Doe", age: 25, location: "New York" };
const student2: Student = { firstName: "Jane", lastName: "Smith", age: 30, location: "Los Angeles" };

/* Array containing students */
const studentsList: Student[] = [student1, student2];

/* Render table with Vanilla JavaScript */
const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  students.forEach(student => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  });
  document.body.appendChild(table);
};

/* Call renderTable function */
renderTable(studentsList);
