const { Pool } = require("pg");

export const pool = new Pool({
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	host: process.env.SQL_HOST,
	database: process.env.SQL_DATABASE,
	port: 5432,
  	connectionTimeoutMillis:0,
	idle_in_transaction_session_timeout:0

});

export const getEstateList = async () => {

	const estateList = 
		await pool.query(`SELECT * FROM apparts`);

	return estateList;
};

export const getEstateListByAction = async (estateaction) => {

	const estateList = 
		await pool.query(`SELECT * FROM apparts WHERE estateaction = '${estateaction}'`);
	
	return estateList;
};

export const getBranchList = async () => {

	const branchList = await pool.query(`SELECT * FROM branch`)

	return branchList
}

