export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(student => student.location === city)
    .map(student => {
      let gradeObj = newGrades.find(g => g.studentId === student.id);
      let grade = gradeObj ? gradeObj.grade : null;
      return { ...student, grade: grade };
    });
}
