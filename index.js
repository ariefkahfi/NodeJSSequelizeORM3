const Sequelize = require("sequelize");

const sequelize = new Sequelize("s_orm1","arief","123",{
    dialect:"mysql",
    operatorsAliases:false
});

const PersonModel = sequelize.define("person",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"person_id"
    },
    name:{
        type:Sequelize.STRING
    }
},{
    tableName:"person",
    timestamps:false
});

// building non-persistent instance
// PersonModel.build({
//     name:"hello_aa1"
// }).save().then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// });

// values of an instance
// PersonModel.findAll().then(person=>{
//     person.forEach((val)=>{
//         console.log(val.get({
//             plain :true
//         }));
//     });
// }).catch(err=>{
//     console.log(err);
// })


