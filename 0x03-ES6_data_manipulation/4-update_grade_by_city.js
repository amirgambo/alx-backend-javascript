export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(student => student.location === city)
    .map(student => {
      let gradeObj = newGrades.find(g => g.studentId === student.id);
      let grade = gradeObj ? gradeObj.grade : 'N/A'; // Set to 'N/A' if no grade found
      return { ...student, grade: grade };
    });
}
