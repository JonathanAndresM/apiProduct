import { createConnection } from 'mysql';

// Colocar los datos correspondientes a su BD local.
// node demo_mysql_db.js para probar.

const con = createConnection({
	host: "localhost",
	user: "mysql",
	password: "mysql"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});