const db = require('./db');

const Cadastroteste = db.sequelize.define('users', { //users é o nome da tabela
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
});

//Cadastroteste.sync({force: true})

module.exports = Cadastroteste