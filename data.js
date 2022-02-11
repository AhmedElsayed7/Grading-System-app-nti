const fs = require('fs')  ;
const { json } = require('stream/consumers');

const addData =(id,name,degrees,comments) =>{
       const students = loadData();
       const duplicateID = students.find((student)=>{
       return student.id === id ;
       })

       let sum = degrees.reduce((acc,elem) =>{
        return acc + elem
       },0)

       // will check if the id is duplicate or not 
       // if id found >> Error dulpicated ID
       // if id not found will add stduent array
      if (!duplicateID){ 
          students.push({
              id , name , degrees , comments , sum
          }) 
          //  save student Data
          saveData(students)
          console.log("saved is done ");
      }
      else {
        console.log("Error duplicated ID ");
      }
    }
const loadData =()=>{

     try {
         const data = fs.readFileSync('studentJson.json').toString();
         return JSON.parse(data);
        //  return objdata ;
     }
     catch (e) {
        return [] ;
     }
}
// we remove by ID only
const removeData = (id) =>{
         const students =loadData();
         const studentToKeep = students.filter((student) =>{
            return student.id !== id

         })
          if (studentToKeep.length !== students.length){
            saveData(studentToKeep) ; 
            console.log("removed success")
          }
          else {
            console.log('ID is not found')
        }

}
const saveData = (students) =>{
           const saveStudent = JSON.stringify(students) ; 
           fs.writeFileSync('studentJson.json',saveStudent)
}
const readData = (id) =>{
        const stduents =loadData();
        const ReadStudent = stduents.find((el) =>{
            return el.id === id
        })
        if (ReadStudent){
            console.log(ReadStudent);
        }
        else {
            console.log('student not found')
        }
}

const listData = () =>{
    const students = loadData()
    students.forEach((x)=>{
        console.log(`student ID: ${x.id}  student name :  ${x.name}, Sum degrees : ${x.sum}`)
    })
}

module.exports = {
    addData,
    listData,
    readData,
    removeData
}