import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DataEstateContext } from "./DataEstateContext";

const DetailEstateForm = () => {
	const {
		yearBuild,
		setYearBuild,
		heating,
		setHeating,
		cooling,
		setCooling,
		parking,
		setParking,
		price,
		area,
		unit,
		currency,
	} = useContext(DataEstateContext);

	const pricePerUnit = (price / area).toFixed(2);

	return (
		<Box
			className="d-flex align-items-center flex-column overflow-auto mt-2"
			component="form"
			sx={{
				"& > :not(style)": { width: "50ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<div className="d-flex align-items-center justify-content-center mb-3 mt-2">
				<TextField
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
					// className="me-4"
					// sx={{ width: "150px" }}
					color="dimgray"
					size="small"
					id="outlined-parking"
					label="Parking"
					variant="outlined"
					value={parking}
					onChange={(e) => setParking(e.target.value)}
				/>
			</div>
			<TextField
				className="mb-3"
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
				//className="me-4"
				// sx={{ width: "150px" }}
				color="dimgray"
				size="small"
				id="outlined-cooling"
				label="Cooling"
				variant="outlined"
				value={cooling}
				onChange={(e) => setCooling(e.target.value)}
			/>

			<div className="d-flex align-items-center justify-content-center mt-3 mb-2">
				{price && area
					? `Price per 1 ${unit} is ${currency} ${pricePerUnit}`
					: "Fill the price and/or area first"}
			</div>
		</Box>
	);
};

export default DetailEstateForm;
