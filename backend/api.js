const express = require ('express');
const executaQuery = require('./dbconect');
const cors = require('cors');
const api = express();
api.use(cors())
api.use(express.json())
api.use(express.urlencoded({ extended: true}))

// Sonserina
api.get('/sonserina', (req, res)=>{
    let query = 'SELECT * FROM hogwarts.alunos where casa like "%sonserina%";';
    executaQuery(query, res);
})

// lufa_lufa
api.get('/lufa', (req, res)=>{
    let query = 'SELECT * FROM hogwarts.alunos where casa like "%lufa%";';
    executaQuery(query, res);
})

// corvinal
api.get('/corvinal', (req, res)=>{
    let query = 'SELECT * FROM hogwarts.alunos where casa like "%corvinal%";';
    executaQuery(query, res);
})

// grifinoria
api.get('/grifinoria', (req, res)=>{
    let query = 'SELECT * FROM hogwarts.alunos where casa like "%grifinoria%";';
    executaQuery(query, res);
})



api.post('/adicionarAluno', (req, res)=>{
    console.log(req.body);
    let query =`INSERT INTO hogwarts.alunos (nome, varinha, descendencia, materia_preferida, casa, serie) VALUES ('${req.body.nome}','${req.body.varinha}','${req.body.descendencia}','${req.body.materia_preferida}','${req.body.casa}','${req.body.serie}');`;
    executaQuery(query, res);
})

api.post("/atualizar/:idalunos", (req, res)=>{
    let idalunos = req.params.idalunos;
    let query = `UPDATE hogwarts.alunos SET nome ='${req.body.nome}', varinha='${req.body.varinha}', descendencia ='${req.body.descendencia}', materia_preferida ='${req.body.materia_preferida}', casa ='${req.body.casa}', serie ='${req.body.serie}' WHERE idalunos='${idalunos}'`;
    executaQuery(query, res);
})

api.get("/apagar/:idalunos", (req, res)=>{
    let idalunos = req.params.idalunos;
    let query = `DELETE FROM hogwarts.alunos WHERE (idalunos='${idalunos}')`
    executaQuery(query, res);
})

api.listen(8080, ()=>{
    console.log('Api na porta 8080');
})
