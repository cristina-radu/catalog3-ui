
export class Teacher {
  id:number;
  firstName: string;
  lastName: string;
  birthDate:string;
  salary:number;

  constructor(id:number, firstName: string, lastName: string, birthDate: string, salary:number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.salary = salary;
  }
}
