module.exports = (sequelize, Sequelize) => {
     Category = sequelize.define ("category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,''
        },
        name: {
            type: Sequelize.STRING,
        },

    })
    return Category;
}