import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextFieldStyled } from "../styles/MuiStyles";

const PicturesForm = () => {

	const [picture, setPicture] = useState("");

	return (
		<Box
			className="d-flex flex-column"
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "300px" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextFieldStyled
				className="me-4"
				color="dimgray"
				size="small"
				//sx={{ width: "150px" }}
				id="outlined-picture"
				label="Picture"
				variant="outlined"
				value={picture}
				onChange={(e) => setPicture(e.target.value)}
			/>

			<img src={picture} />
		</Box>
	);
};

export default PicturesForm;
