const {DataTypes } = require('sequelize');

module.exports =  (sequelize)=>{ 
     sequelize.define('activities', {
        id :{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        name :{
            type: DataTypes.STRING,
            allowNull: false
        },
        dificulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false
        },
        duration:{
            type: DataTypes.INTEGER
        },
        season:{
            type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
            allowNull:false
        },
        country:{
            type : DataTypes.STRING,
            
        }
        
    },{timestamps: false});
}
