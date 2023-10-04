// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional dynamic attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the StudentClass and its constructor
class StudentClass implements Teacher {
  constructor(
    public firstName: string,
    public lastName: string,
    public fullTimeEmployee: boolean,
    public location: string
  ) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return `${this.firstName.charAt(0)}. ${this.lastName}`;
  }
}

// Create instances
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Print teacher's name using the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(director1);
console.log(printTeacher('John', 'Doe'));

// Create an instance of StudentClass
const student1 = new StudentClass('Alice', 'Smith', true, 'New York');
console.log(student1.displayName());
