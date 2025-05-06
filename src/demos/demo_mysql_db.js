import { createConnection } from 'mysql';

// Colocar los datos correspondientes a su BD local.
// node demo_mysql_db.js

const con = createConnection({
	host: "localhost",
	user: "juang",
	password: "miperrorin10"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});