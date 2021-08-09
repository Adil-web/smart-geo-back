const Sequelize = require("sequelize");
const sequelize = new Sequelize("d7rukdkjmikjmr", "rakdodjneopawa", "5a87ca57afe26da64d1b77ae7b76f86a08cef1f1b332c5927a2dcd5fee4fe175", {
    dialect: "postgres",
    host: "ec2-52-209-171-51.eu-west-1.compute.amazonaws.com",
    define: {
        timestamps: false
    },
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    }
});
// const sequelize = new Sequelize("smart_geo_back", "postgres", "1", {
//     dialect: "postgres",
//     host: "localhost",
//     define: {
//         timestamps: false
//     }
// });
const directory_organization = sequelize.define("directory_organization", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title_rus: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    title_kaz: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address_rus: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address_kaz: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    contacts: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    work_time: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description_rus: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description_kaz: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    region: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    type: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

sequelize.sync().then(()=>{return}).catch(err=> console.log(err));

module.exports = {directory_organization}

