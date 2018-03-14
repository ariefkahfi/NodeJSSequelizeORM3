const Sequelize = require("sequelize");
const sequelize = new Sequelize("s_orm3","arief","123",{
    dialect:"mysql",
    operatorsAliases:false
});

const StudentModel = sequelize.define("student",{
    studentId:{
        type:Sequelize.STRING,
        primaryKey:true,
        field:"student_id"
    },
    studentName:{
        type:Sequelize.STRING,
        allowNull:false,
        field:"student_name"
    },
    studentAddress:{
        type:Sequelize.STRING,
        allowNull:false,
        field:"student_address"
    }
},{
    tableName:"student",
    timestamps:false
});

const ClassModel = sequelize.define("class",{
    class_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"class_id"
    },
    className:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
        field:"class_name"
    }
},{
    tableName:"class",
    timestamps:false
});

ClassModel.hasMany(StudentModel,{
    foreignKey:"class_id",
    as: "students"  
});
StudentModel.belongsTo(ClassModel,{
    foreignKey : "class_id"
});

StudentModel.findById("S001").then(s=>{
    return s.getClass()
}).then(getCls=>{
    console.log(JSON.stringify(getCls));
}).catch(e=>{
    console.log(e);
});

// StudentModel.create({studentId:"S001",studentName : "aa1",studentAddress : "addr_aa1"})
//     .then(st=>{
//         ClassModel.findById(1).then(cModel=>{
//             st.setClass(cModel);
//         })
//     })
//     .catch(e=>{
//         console.log(e);
//     })

// ClassModel.findById(1).then(c=>{
//     return c.getStudents()
// }).then(students=>{
//     console.log(JSON.stringify(students));
// }).catch(e=>{
//     console.log(e);
// })

// async function tes(){
//     await sequelize.sync({force : true });
//     let b1 = await StudentModel.create({ studentId : "S007" , studentName : "aa7", studentAddress : "addr_aa7"});
//     let b2 = await StudentModel.create({ studentId : "S008" , studentName : "aa8", studentAddress : "addr_aa8"});
//     let classAA1 = await ClassModel.create({className : "Class_AA1"});

//     return classAA1.setStudents([b1,b2]);
// }

// tes().then(val=>{
//     console.log(JSON.stringify(val));
// }).catch(err=>{
//     console.log(err);
// });
