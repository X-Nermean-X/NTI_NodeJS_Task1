const yargs = require("yargs")
const x_students = require("./students")

/**
 * npm init -y        or        npm init -y (in case i agree with the default settings i.e. Enter all)
 * npm i validator
 * npm i >> in case node_modules was deleted (retrieve node_modules)
 * npm i yargs
 */

// add
yargs.command({
    command:"add",
    describe:"add data",
    builder:{
        id:{
            type:"number",
            demandOption:true
        },
        name:{
            type:"string",
            demandOption:true
        },
        degree:{
            type:"array",
            demandOption:true
        },
        comment:{
            type:"string",
        },
    },
    handler:() => {
        x_students.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degree, yargs.argv.comment)
    }
})

// Delete
yargs.command({
    command:"delete",
    describe:"delete data",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }
    },
    handler:() => {
        x_students.deleteStudent(yargs.argv.id)
    }
}) 

// Read
yargs.command({
    command:"read",
    describe:"read data",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }
    },
    handler:() => {
        x_students.readStudent(yargs.argv.id)
    }
})

// List
yargs.command({
    command:"list",
    describe:"list data >> name & total",
    handler:() => {
        x_students.listStudents()
    }
})

// Update
yargs.command({
    command:"update",
    describe:"update data",
    builder:{
        id:{
            type:"number",
            demandOption:true
        },
        name:{
            type:"string",
            demandOption:true
        }
    },
    handler:() => {
        x_students.updateStudent(yargs.argv.id, yargs.argv.name)
    }
})

yargs.parse()
