module.exports = (sequelize, Sequelize) => {
    const sqlcreate = sequelize.define("Mee-ras", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return sqlcreate;
  };