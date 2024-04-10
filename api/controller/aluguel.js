const con = require('../connection/mysql');

const createAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    const sql = "INSERT INTO Aluguel (placa, cpf, reserva, retirada, devolucao, subtotal) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(sql, [placa, cpf, reserva, retirada, devolucao, subtotal], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(req.body);
        }
    });
};

const readAlugueis = (req, res) => {
    const sql = "SELECT * FROM Aluguel";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const updateAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    const id = req.params.id;
    const sql = "UPDATE Aluguel SET placa = ?, cpf = ?, reserva = ?, retirada = ?, devolucao = ?, subtotal = ? WHERE id = ?";
    con.query(sql, [placa, cpf, reserva, retirada, devolucao, subtotal, id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Aluguel atualizado com sucesso' });
        }
    });
};

const deleteAluguel = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Aluguel WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Aluguel deletado com sucesso' });
        }
    });
};

const readAlugueisReservados = (req, res) => {
    const sql = "SELECT * FROM vw_alugueis_reservados";
    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
};

const readAlugueisEmAndamento = (req, res) => {
    const sql = "SELECT * FROM vw_alugueis_em_andamento";
    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
};

const readRelatorioCompletoAlugueis = (req, res) => {
    const sql = "SELECT * FROM vw_todos_os_alugueis_com_status";
    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
};

module.exports = {
    createAluguel,
    readAlugueis,
    updateAluguel,
    deleteAluguel,
    readAlugueisReservados,
    readAlugueisEmAndamento,
    readRelatorioCompletoAlugueis
};
