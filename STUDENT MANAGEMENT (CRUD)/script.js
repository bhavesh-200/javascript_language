let students = [
    { id: 1, name: 'Varyani Bhavesh', age: 20 },
    { id: 2, name: 'AARSH PATEL', age: 22 }
];

function createStudent(id, name, age) {
    const newStudent = { id, name, age };
    students.push(newStudent);
    console.log('Student added:', newStudent);
}

function readStudents() {
    console.log('Students List:');
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`);
    });
}

function updateStudent(id, newName, newAge) {
    const student = students.find(student => student.id === id);
    if (student) {
        student.name = newName;
        student.age = newAge;
        console.log('Student updated:', student);
    } else {
        console.log('Student not found');
    }
}

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        const removedStudent = students.splice(index, 1);
        console.log('Student removed:', removedStudent);
    } else {
        console.log('Student not found');
    }
}

createStudent(3, 'JAY KUMAR', 25);

readStudents();

updateStudent(1, 'BHAVESH VARYANI', 21);

deleteStudent(2);

readStudents();