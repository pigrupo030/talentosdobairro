const db = require('./db');

const Cadastro = db.sequelize.define('informacoes', {
    name: {
        type: db.Sequelize.STRING
    },
    lastname: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    address: {
        type:db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    complemento: {
        type: db.Sequelize.STRING
    },
    city: {
        type: db.Sequelize.STRING
    },
    state: {
        type: db.Sequelize.STRING
    },
    
    password: {
        type: db.Sequelize.STRING
    }
});

//Cadastro.sync({force: true})

module.exports = Cadastro