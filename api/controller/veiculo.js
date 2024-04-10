const con = require('../connection/mysql');

const createVeiculo = (req, res) => {
    const { placa, modelo, marca, tipo, diaria } = req.body;
    const sql = "INSERT INTO Veiculo (placa, modelo, marca, tipo, diaria) VALUES (?, ?, ?, ?, ?)";
    con.query(sql, [placa, modelo, marca, tipo, diaria], (err, result) => {
        if (err) {
            if (err.code == "ER_DUP_ENTRY")
                res.status(400).json("Placa já cadastrada");
            else
                res.status(500).json(err);
        } else {
            res.status(201).json(req.body);
        }
    });
};

const readVeiculos = (req, res) => {
    const sql = "SELECT * FROM Veiculo";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateVeiculo = (req, res) => {
    const { modelo, marca, tipo, diaria } = req.body;
    const placa = req.params.placa;
    const sql = "UPDATE Veiculo SET modelo = ?, marca = ?, tipo = ?, diaria = ? WHERE placa = ?";
    con.query(sql, [modelo, marca, tipo, diaria, placa], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Veículo atualizado com sucesso' });
        }
    });
};

const deleteVeiculo = (req, res) => {
    const placa = req.params.placa;
    const sql = "DELETE FROM Veiculo WHERE placa = ?";
    con.query(sql, [placa], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Veículo deletado com sucesso' });
        }
    });
};

module.exports = {
    createVeiculo,
    readVeiculos,
    updateVeiculo,
    deleteVeiculo
};
