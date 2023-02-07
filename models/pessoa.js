const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
  nome: String,
  CPF: String,
})

const Pessoa =  mongoose.Model('Pessoa', pessoaSchema);

module.exports = Pessoa;

