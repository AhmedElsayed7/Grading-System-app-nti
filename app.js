const yargs = require('yargs');
const student =require('./data') ; 
// add command 
yargs.command({
    command:'Add',
    describe:'Add student',
    builder:{
        id:{
             describe:'id of The Student',
             demandOption:true,
             type:'number'
        },
        name:{
            describe:'Name of The Student',
            demandOption:true,
            type:'string'
        },
        degrees:{
            describe:'degrees of The Student',
            demandOption:true,
            type:'array'
        },
        comments:{
            describe:'Teacher comments on the degree',
            demandOption:false,
            type:'string'
        }
    },
    handler:(x)=>{
        student.addData(x.id,x.name,x.degrees,x.comments)
    }
});

// remove command 
yargs.command({
    command:'remove',
    describe:'remove student',
    builder:{
        id:{
             describe:'id of The Student',
             demandOption:true,
             type:'number'
        },
        name:{
            describe:'Name of The Student',
            demandOption:'false',
            type:'string'
        },
        degrees:{
            describe:'degrees of The Student',
            demandOption:false,
            type:'array'
        },
        comments:{
            describe:'Teacher comments on the degree',
            demandOption:false,
            type:'string'
        }
    },
    handler : (x)=>{
        student.removeData(x.id)
    }
})
// read command 
yargs.command ({
    command:'read',
    describe:'Readnig students details ',
    builder:{
        id:{
            describe:'id of The Student',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'Name of The Student',
            demandOption:'false',
            type:'string'
        },
        degrees:{
            describe:'degrees of The Student',
            demandOption:false,
            type:'array'
        },
        comments:{
            describe:'Teacher comments on the degree',
            demandOption:false,
            type:'string'
        }
    },
    handler:(x)=>{
      student.readData(x.id);

    }
})
// list command
yargs.command({
    command:'list',
    describe:'list of the student ',
    handler:()=>{
        student.listData()
    }
})
yargs.parse();