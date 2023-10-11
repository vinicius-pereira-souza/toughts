const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize("toughts2", process.env.DB_USER, "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
