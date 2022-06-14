const Sequelize = require("sequelize")

const sequelize = new Sequelize("talentosdobairro", "projetointegrador", "123456", { //conexão com o banco de dados mysql
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){ //mensagem de conexão estabelecida ou não
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar a conexão com BD: ' + err)
})

module.exports= { //exportando o sequelize
    Sequelize: Sequelize,
    sequelize: sequelize
};