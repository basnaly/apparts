import { pool } from "./sqldb";

const checkUserExists = async (email) => {
    
    const users = 
		await pool.query(`SELECT * FROM local_users WHERE email = '${email}'`);

    return users?.rowCount > 0
}

export default checkUserExists