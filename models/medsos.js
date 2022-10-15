'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Medsos extends Model {
        static associate(models) {
            Medsos.belongsTo(models.User,{
                foreignKey:'UserId'
            });
        }
    }
    Medsos.init({
        medsos_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "medsos cannot be omitted",
                },
                notEmpty: {
                    msg: "medsos cannot be an empty string",
                }
            },
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Username cannot be omitted",
                },
                notEmpty: {
                    msg: "Username cannot be an empty string",
                }
            },
        },
        UserId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notNull: {
                    msg: "UserId cannot be omitted",
                },
                notEmpty: {
                    msg: "UserId cannot be an empty string",
                },
            }
        }
    },{
        sequelize,
        modelName: 'Medsos',
    });
    return Medsos;
};