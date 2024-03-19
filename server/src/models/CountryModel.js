const {DataTypes} = require('sequelize');

module.exports = (sequelize) => { return sequelize.define('country', {
        id:{
            type: DataTypes.STRING(3),
            primaryKey: true,
            allowNull : false
        },
        name:{
            type: DataTypes.STRING,  
            allowNull : false
        },
        img:{
            type: DataTypes.STRING,
            allowNull : false
        },
        continent:{
            type: DataTypes.STRING,
            allowNull : false
        },
        capital:{
            type: DataTypes.STRING,
            allowNull : false
        },
        Subregion:{
            type: DataTypes.STRING,
            allowNull : false
        },
        area:{
            type: DataTypes.INTEGER,
            allowNull : false
        },
        population:{
            type: DataTypes.INTEGER,
            allowNull : false
        }
    },{timestamps: false }
    )   
}
 