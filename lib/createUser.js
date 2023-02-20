import bcrypt from "bcryptjs";
import { pool } from "./sqldb";

const createUser = async (email, name, password) => {

	const newUser = {
		id: email,
        name,
		email,
		password: password !== '' ? bcrypt.hashSync(password) : password,
		role: 'basic'
	};

	const result = await pool.query(
		`INSERT INTO local_users (id, name, email, password, role) VALUES ($1, $2, $3, $4, $5)`,
		[newUser.id, newUser.name, newUser.email, newUser.password, newUser.role]
	);

    return newUser
};

export default createUser;
