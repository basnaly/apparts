import bcrypt from "bcryptjs";
import { pool } from "./sqldb";

const createUser = async (email, name, password) => {

	const newUser = {
		id: email,
        name,
		email,
		password: bcrypt.hashSync(password),
	};

	const result = await pool.query(
		`INSERT INTO local_users (id, name, email, password) VALUES ($1, $2, $3, $4)`,
		[newUser.id, newUser.name, newUser.email, newUser.password]
	);

    console.log(result)

    return newUser
};

export default createUser;
