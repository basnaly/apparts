import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextFieldStyled } from "../styles/MuiStyles";

const DetailsForm = () => {
	
	const [yearBuild, setYearBuild] = useState("");
	const [heating, setHeating] = useState("");
	const [cooling, setCooling] = useState("");
	const [parking, setParking] = useState("");

	// const pricePerUnit = price / area

	return (
		<Box
			className="d-flex flex-column overflow-auto"
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "50ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextFieldStyled
				className="me-4"
				color="dimgray"
				size="small"
				// sx={{ width: "150px" }}
				id="outlined-yearBuild"
				label="Build in"
				variant="outlined"
				value={yearBuild}
				onChange={(e) => setYearBuild(e.target.value)}
			/>

			<TextField
				className="me-4"
				// sx={{ width: "150px" }}
				color="dimgray"
				size="small"
				id="outlined-heating"
				label="Heating"
				variant="outlined"
				value={heating}
				onChange={(e) => setHeating(e.target.value)}
			/>

			<TextField
				className="me-4"
				// sx={{ width: "150px" }}
				color="dimgray"
				size="small"
				id="outlined-cooling"
				label="Cooling"
				variant="outlined"
				value={cooling}
				onChange={(e) => setCooling(e.target.value)}
			/>

			<TextField
				className="me-4"
				// sx={{ width: "150px" }}
				color="dimgray"
				size="small"
				id="outlined-parking"
				label="Parking"
				variant="outlined"
				value={parking}
				onChange={(e) => setParking(e.target.value)}
			/>

			<div>
				Price per 1 "unit"
			</div>
		</Box>
	);
};

export default DetailsForm;
