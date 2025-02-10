const { pool } = require("../config/db");
const { User } = require("../model/user");

async function buscarUsuarios() {
  const result = await User.findByPk(1);

  return result;
}

module.exports = { buscarUsuarios };
