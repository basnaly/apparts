let bcrypt = require("bcryptjs");
import { pool } from "./sqldb";

const verifyPassword = async (email, password) => {

    const user = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
    console.log(user.rows)
    
    if (user.rowCount === 0 ) {
        throw new Error("User not found");
    }

    let passwordIsValid = bcrypt.compareSync(password, user.rows[0].password)

    if (!passwordIsValid) {
        throw new Error("The password is not valid");
    }

    return user.rows[0]
}

export default verifyPassword