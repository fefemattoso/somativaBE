const con = require('../connection/mysql');

const createCliente = (req, res) => {
    const { cpf, nome_cliente } = req.body;
    const sql = "INSERT INTO Cliente (cpf, nome_cliente) VALUES (?, ?)";
    con.query(sql, [cpf, nome_cliente], (err, result) => {
        if (err) {
            if (err.code == "ER_DUP_ENTRY")
                res.status(400).json("CPF já cadastrado");
            else
                res.status(500).json(err);
        } else {
            res.status(201).json(req.body);
        }
    });
};

const readClientes = (req, res) => {
    const sql = "SELECT * FROM Cliente";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateCliente = (req, res) => {
    const { nome_cliente } = req.body;
    const cpf = req.params.cpf;
    const sql = "UPDATE Cliente SET nome_cliente = ? WHERE cpf = ?";
    con.query(sql, [nome_cliente, cpf], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Cliente atualizado com sucesso' });
        }
    });
};

const deleteCliente = (req, res) => {
    const cpf = req.params.cpf;
    const sql = "DELETE FROM Cliente WHERE cpf = ?";
    con.query(sql, [cpf], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Cliente deletado com sucesso' });
        }
    });
};

module.exports = {
    createCliente,
    readClientes,
    updateCliente,
    deleteCliente
};
