const { Client } = require("pg");

export const client = new Client({
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	host: process.env.SQL_HOST,
	database: process.env.SQL_DATABASE,
	port: 5432,
});

client.connect();

export const getEstateList = async () => {

	const estateList = 
		await client.query(`SELECT * FROM apparts`);

	return estateList;
};
