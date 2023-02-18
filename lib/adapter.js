const PostgresAdapter = (client, options = {}) => {
	return {
		async createUser(user) {
			try {
				const sql = `INSERT INTO provider_users (name, email, email_verified, image, role)
                            VALUES ($1, $2, $3, $4, $5)
                            RETURNING id, name, email, email_verified, image, role`;
				let result = await client.query(sql, [
					user.name,
					user.email,
					user.emailVerified,
					user.image,
                    user.role,
				]);
				return result.rows[0]; 
			} catch (error) {
				console.log(error);
				return;
			}
		},

        async getUser(id) {
            try {
                const sql = `SELECT * FROM provider_users WHERE id = $1`
                let result = await client.query(sql, [id])
                return result.rows[0]
            } catch (error) {
				console.log(error);
				return;
            }
        },

        async getUserByEmail(email) {
            try {
                const sql = `SELECT * FROM provider_users WHERE email = $1`
                let result = await client.query(sql, [email])
                return result.rows[0]
            } catch (error) {
                console.log(error)
                return
            }
        },

        async getUserByAccount({ providerAccountId, provider}) {
            try {
                const sql = `SELECT pu.* FROM provider_users pu join accounts a ON pu.id = a.user_id 
                WHERE a.provider_id = $1 AND a.provider_account_id = $2`

                const result = await client.query(sql, [provider, providerAccountId])
                return result.rows[0]
            } catch (error) {
                console.log(error)
            }
        },

        async updateUser(user) {
            try {
            } catch (error) {
                console.log(error)
                return
            }
        },

        async linkAccount(account) {
            try {
                const sql = `INSERT INTO accounts (
                    user_id,
                    provider_id,
                    provider_type,
                    provider_account_id,
                    access_token,
                    access_token_expires
                )
                VALUES ($1, $2, $3, $4, $5, to_timestamp($6))`

                const params = [
                    account.userId,
                    account.provider,
                    account.type,
                    account.providerAccountId,
                    account.access_token,
                    account.expires_at,
                ];

                await client.query(sql, params)
                return account
            } catch (error) {
                console.log(error)
                return
            }
        },

        async createSession({ sessionToken, userId, expires }) {
            try {
                const sql = `INSERT INTO sessions (user_id, expires, session_token)
                VALUES ($1, $2, $3)`

                await client.query(sql, [ userId, expires, sessionToken ])
                return { sessionToken, userId, expires }
            } catch (error) {
                console.log(error)
                return
            }
        },

        async getSessionAndUser(sessionToken) {
            try {
                let result 
                result = await client.query(
                    `SELECT * FROM sessions WHERE session_token = $1`,
                    [sessionToken]
                )

                let session = result.rows[0]
                
                result = await client.query(
                    `SELECT * FROM provider_users WHERE id = $1`,
                    [session.user_id]
                )

                let user = result.rows[0]

                return { session, user}

            } catch (error) {
                console.log(error)
                return
            }
        },

        async updateSession({ sessionToken }) {
            console.log("updateSession", sessionToken)
            return
        },

        async deleteSession({ sessionToken }) {
            try {
                const sql = `DELETE FROM sessions WHERE session_token = $1`
                await client.query(sql, [sessionToken])
            } catch (error) {
                console.log(error)
                return
            }
        },
	};
};

export default PostgresAdapter;
