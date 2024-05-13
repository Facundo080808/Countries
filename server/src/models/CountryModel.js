const {DataTypes} = require('sequelize');

module.exports = (sequelize) => { return sequelize.define('countries', {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull : false,
            field:'id'
        },
        name:{
            type: DataTypes.STRING,  
            allowNull : false,
            field:'nombre'
        },
        image_url:{
            type: DataTypes.STRING,
            allowNull : false,
            field:'imagendelabandera'
        },
        continent:{
            type: DataTypes.STRING,
            allowNull : false,
            field:'continente'
        },
        capital:{
            type: DataTypes.STRING,
            allowNull : false,
            field:'capital'
        },
        subregion:{
            type: DataTypes.STRING,
            defaultValue : 'unknown',
            field:'subregion'
        },
        area:{
            type: DataTypes.FLOAT,
            defaultValue : 0,
            field:'area'
        },
        population:{
            type: DataTypes.INTEGER,
            allowNull : false,
            field:'poblacion'
        }
    },{timestamps: false,
        modelName:'countries',
        tableName:'countries'
    }
    )   
}
 