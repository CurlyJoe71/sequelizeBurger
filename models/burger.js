moduel.exports = (sequelize, dataTypes) => {
    const Burger = sequelize.define('burgers', {
        burger_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        devoured: {
            defaultValue: false,
            type: BOOLEAN
        }
    });
    return Burger;
};