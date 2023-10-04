// task_4/main.ts
import * as Subjects from './js/subjects';

const cpp = new Subjects.Cpp();
console.log("C++");
cpp.setTeacher(Subjects.cppTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
console.log("Java");
java.setTeacher(Subjects.cppTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
console.log("React");
react.setTeacher(Subjects.cppTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
