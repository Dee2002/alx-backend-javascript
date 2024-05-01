/* Define interface printTeacherFunction */
interface printTeacherFunction
{
  (firstName: string, lastName: string): string;
}

/* Function to print teacher */
const printTeacher: printTeacherFunction = (firstName, lastName) =>
{
  return `${firstName[0]}. ${lastName}`;
};

/* Example usage */
console.log(printTeacher("John", "Doe")); /* Output: J. Doe */
