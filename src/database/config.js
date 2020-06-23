const sql = require('mssql');

let dbConfig = {
	server: 'siteindividual.database.windows.net',
	user: 'marcelo',
	password: 'Tayler52',
	database: 'marcelo',
	"options": {
		"encrypt": true,
		"enableArithAbort": true
	}
}

let conn = new sql.ConnectionPool(dbConfig);

conn.connect((err) => {
	if (err) throw err;
	console.log('Banco de Dados Concectado com Sucesso')
})

module.exports = conn;