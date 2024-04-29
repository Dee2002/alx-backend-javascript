function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    const grade = newGrades.find(grade => grade.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A'
    };
  });
}

export default updateStudentGradeByCity;
