/* Define interface StudentClassConstructor */
interface StudentClassConstructor
{
  new(firstName: string, lastName: string): StudentClass;
}

/* Define interface StudentClass */
interface StudentClass
{
  workOnHomework(): string;
  displayName(): string;
}

/* Class StudentClass */
class StudentClass implements StudentClass
{
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string
  {
    return "Currently working";
  }

  displayName(): string
  {
    return this.firstName;
  }
}

/* Example usage */
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); /* Output: Currently working */
console.log(student.displayName()); /* Output: John */
