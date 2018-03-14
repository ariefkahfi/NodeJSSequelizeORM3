const Sequelize = require("sequelize");
const sequelize = new Sequelize("s_orm2","arief","123",{
    dialect:"mysql",
    operatorsAliases:false
});

const PersonModel = sequelize.define("person",{
    personId:{
        type:Sequelize.STRING,
        primaryKey:true,
        field:"person_id"
    },
    personName:{
        type:Sequelize.STRING,
        field:"person_name"
    }
},{
    tableName:"person",
    timestamps:false
});

const RoomModel = sequelize.define("room",{
    roomId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"room_id"
    },
    roomName:{
        type:Sequelize.STRING,
        unique:true,
        field:"room_name"
    }
},{
    tableName:"room",
    timestamps:false,
    underscored:true
});

// ONE TO ONE
// belongsTo sourceModel.belongsTo(targetModel)
// foreignKey on sourceModel 
// RoomModel.belongsTo(PersonModel,{
//     foreignKey:{
//         name:"person_id"
//     }
// });

// belongsTo
// PersonModel.create({
//     personId:"P002",
//     personName:"aa2"
// }).then(p=>{
//     RoomModel.create({
//         roomName:"ROOM_2"
//     }).then(room=>{
//         room.setPerson(p)
//     })
// }).catch(e=>{
//     console.log(e);
// });

// hasOne sourceModel.hasOne(targetModel)
// foreignKey on targetModel
PersonModel.hasOne(RoomModel,{
    foreignKey:{
        name:"person_id"
    }
});



// hasOne
// PersonModel.create({
//     personId:"P002",
//     personName:"aa2"
// }).then(p=>{
//     RoomModel.create({
//         roomName:"ROOM_2"
//     }).then(room=>{
//         p.setRoom(room);
//     })
// }).catch(e=>{
//     console.log(e);
// });
// ONE TO ONE







