const express = require('express');
const routes = express.Router();

const Cliente = require('../controller/cliente');
const Telefone = require('../controller/telefone');
const Veiculo = require('../controller/veiculo');
const Aluguel = require('../controller/aluguel');

routes.get('/', (req, res) => {
    res.json("API Alugueis");
});

routes.post('/clientes', Cliente.createCliente);
routes.get('/clientes', Cliente.readClientes);
routes.put('/clientes/:cpf', Cliente.updateCliente);
routes.delete('/clientes/:cpf', Cliente.deleteCliente);

routes.post('/telefones', Telefone.createTelefone);
routes.get('/telefones', Telefone.readTelefones);
routes.put('/telefones/:cpf', Telefone.updateTelefone);
routes.delete('/telefones/:cpf', Telefone.deleteTelefone);

routes.post('/veiculos', Veiculo.createVeiculo);
routes.get('/veiculos', Veiculo.readVeiculos);
routes.put('/veiculos/:placa', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

routes.post('/alugueis', Aluguel.createAluguel);
routes.get('/alugueis', Aluguel.readAlugueis);
routes.put('/alugueis/:id', Aluguel.updateAluguel);
routes.delete('/alugueis/:id', Aluguel.deleteAluguel);

module.exports = routes;
