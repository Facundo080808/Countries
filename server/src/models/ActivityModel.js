const {DataTypes , Sequelize} = require('sequelize');

module.exports =  (sequelize)=>{ return sequelize.define('activity', {
        id :{
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        }
        
    });
}
