import React, { useState } from "react";
import {
	getCsrfToken,
	getProviders,
	getSession,
	signIn,
} from "next-auth/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Switch, TextField } from "@mui/material";
import PasswordInputComponent from "@/components/PasswordInputComponent";
import { CredentialStyled, SignButtonStyled } from "@/styles/StyledComponents";

import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = ({ providers }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const [checked, setChecked] = useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	// console.log(providers);

	const logIn = () => {
		signIn("credentials", { email, password, isLogin: "login" });
	};

	const register = () => {
		signIn("credentials", { email, password, name, isLogin: "register" });
	};

	return (
		<div className="vw-100">
			{Object.values(providers)
				.filter((el) => el.id !== "credentials")
				.map((el) => {
					return (
						<div
							key={el.name}
							className="d-flex flex-column align-items-center mt-3"
						>
							<SignButtonStyled
								className="m-2"
								variant="outlined"
								onClick={() => signIn(el.id)}
							>
								{el.name === "GitHub" ? (
									<GitHubIcon className="me-2" />
								) : (
									<GoogleIcon className="me-2" />
								)}
								Sign in with {el.name}
							</SignButtonStyled>
						</div>
					);
				})}

			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				className="d-flex align-items-center justify-content-center mt-3"
			>
				<Typography as="div">
					<CredentialStyled>Sign Up</CredentialStyled>
				</Typography>
				<Switch
					checked={checked}
					onChange={handleChange}
					inputProps={{ "aria-label": "ant design" }}
					color="scarlet"
				/>
				<Typography as="div">
					<CredentialStyled>Sign In</CredentialStyled>
				</Typography>
			</Stack>

			<Box
				className="d-flex flex-column align-items-center"
				data-testid="form-container"
			>
				<div className="d-flex ">
					<Typography
						as="div"
						className="d-flex align-items-center justify-content-center"
						id="modal-modal-description"
						sx={{ mt: 2, width: "100%" }}
					>
						{checked === true ? (
							""
						) : (
							<TextField
								className="mx-3"
								variant="outlined"
								id="outlined-name"
								label="Name"
								type="name"
								color="scarlet"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						)}

						<TextField
							className="regist mx-3"
							variant="outlined"
							id="outlined-email"
							label="Email"
							type="email"
							color="scarlet"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<PasswordInputComponent
							password={password}
							setPassword={setPassword}
						/>
					</Typography>
				</div>

				{checked === true ? (
					<SignButtonStyled
						onClick={logIn}
						variant="outlined"
						className="mt-4"
					>
						Log in
					</SignButtonStyled>
				) : (
					<SignButtonStyled
						onClick={register}
						variant="outlined"
						className="mt-4"
					>
						Register
					</SignButtonStyled>
				)}
			</Box>
		</div>
	);
};

export default SignIn;

export const getServerSideProps = async (context) => {
	const { req } = context;
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: { destination: "/" },
		};
	}

	return {
		props: {
			providers: await getProviders(context),
			csrfToken: await getCsrfToken(context),
		},
	};
};
