const con = require('../connection/mysql');

const createTelefone = (req, res) => {
    const { cpf, numero } = req.body;
    const sql = "INSERT INTO Telefone (cpf, numero) VALUES (?, ?)";
    con.query(sql, [cpf, numero], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(req.body);
        }
    });
};

const readTelefones = (req, res) => {
    const sql = "SELECT * FROM Telefone";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateTelefone = (req, res) => {
    const { numero } = req.body;
    const cpf = req.params.cpf;
    const sql = "UPDATE Telefone SET numero = ? WHERE cpf = ?";
    con.query(sql, [numero, cpf], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Telefone atualizado com sucesso' });
        }
    });
};

const deleteTelefone = (req, res) => {
    const cpf = req.params.cpf;
    const sql = "DELETE FROM Telefone WHERE cpf = ?";
    con.query(sql, [cpf], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Telefone deletado com sucesso' });
        }
    });
};

module.exports = {
    createTelefone,
    readTelefones,
    updateTelefone,
    deleteTelefone
};
