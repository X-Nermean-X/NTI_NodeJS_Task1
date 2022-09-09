const fs = require('fs');

const loadStudents = () => {
    try{
        // array of json
        const data_students = fs.readFileSync("data_students.json").toString()
        // json --> object
        return JSON.parse(data_students)
    }
    catch(e){
        return []
    } 
}
const saveStudents = (data_students) => {
    // console.log(data_students) // 3
    fs.writeFileSync("data_students.json", JSON.stringify(data_students))
}

// add student
const addStudent = (id, name, degree, comment) => {
    const student = loadStudents()
    // console.log(student)

    const duplicate_Id = student.find((x) => {
        return x.id === id
    })
    console.log(duplicate_Id); // empty array []

    var total = 0
    for(let i=0; i<degree.length; i++){
        total += degree[i]
    }

    if(!duplicate_Id){
        student.push({
            id,
            name,
            total,
            comment,
        })
        saveStudents(student)
        console.log("Student is saved successfully")
    }
    else{
        console.log("Error >> id is duplicated")
    }
}


// update student data
const updateStudent = (id, name) => {
    const student = loadStudents()

    const StudentToDelete = student.find((x) => {
        return x.id === id
    })

    let index_student = student.indexOf(StudentToDelete)
    // console.log(index_Student)
    
    if(index_student != -1){
        student[index_student].name = name // splice(index, remove_count)
        saveStudents(student)
        console.log("Student was updated successfully")
    }
    else{
        console.log("Student wasn't found")
    }
}

// delete student
const deleteStudent = (id) => {
    const student = loadStudents()

    const StudentToDelete = student.find((x) => {
        return x.id === id
    })

    let index_student = student.indexOf(StudentToDelete)
    // console.log(index_Student)
    
    if(index_student != -1){
        student.splice(index_student, 1) // splice(index, remove_count)
        saveStudents(student)
        console.log("Student is deleted")
    }
    else{
        console.log("Student wasn't found")
    }
}

// read student data
const readStudent = (id) => {
    const student = loadStudents()

    const findStudent = student.find((x) => {
        return x.id === id
    })
    if(!findStudent){
        console.log("Student not found")
    }
    else{
        console.log(findStudent.name)
    }
}

// list students' data
const listStudents = () => {
    const student = loadStudents()
    for(var i=0; i<student.length; i++){
        console.log("Name: " + student[i].name + "\t total: " + student[i].total)
    }
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    readStudent,
    listStudents,
}

// Testing:
/**
 * node node/server.js
 * node node/server.js add --id=1 --name="a" --degree=10 5 10 --comment="Good"
 * node node/server.js add --id=2 --name="b" --degree=10 5 5
 * node node/server.js add --id=3 --name="c" --degree=10 10 10
 * node node/server.js add --id=3 --name="c" --degree=10 10 2
 * node node/server.js update --id=3 --name="e"
 * node node/server.js update --id=5 --name="e"
 * node node/server.js delete --id=2
 * node node/server.js delete --id=5
 * node node/server.js read --id="1"
 * node node/server.js list
 */



// Notes for uploading on github:-
/**
 * terminal >> git init
 * root of your project --> .gitignore >> create file with this extension without a name
 * write in the upove file >> ./node_modules
 * open github desktop --> add existing repository
 */

