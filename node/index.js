const express = require('express')
const app = express()

const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/insert/:name', (req, res) => {
    const name = req.param('name')
    const insert = "INSERT INTO people(name) VALUES ('" + name + "')"
    connection.query(insert)
    res.send('<h1>' + name + ' foi salvo no banco de dados.</h1><a href="/">Voltar a lista.</a>')
})

app.get('/', (req, res) => {
    connection.query("SELECT * FROM people", function (err, result, fields) {
        var out = '<h1>Full Cycle Rocks!</h1>'
        out += '<strong>People List</strong>'
        out += '<ul>'
        result.forEach(result => {
            out += '<li>' + result.name + '</li>'
        });
        out += '</ul>'
        res.send(out)
    });
})

app.listen(port, () => {
    console.log('Running on port: ' + port)
})