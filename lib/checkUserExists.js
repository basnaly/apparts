import { pool } from "./sqldb";

const checkUserExists = async (email) => {
    
    const users = 
		await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
        console.log(users)
    return users?.rowCount > 0
}

export default checkUserExists