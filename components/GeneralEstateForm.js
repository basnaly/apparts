import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
	CURRENCIES,
	ESTATE_ACTION,
	ESTATE_TYPES,
	UNITS,
} from "../utils/constants";
import { MenuItem } from "@mui/material";
import { DataEstateContext } from "./DataEstateContext";

const GeneralEstateForm = () => {
	
	const {
		currency,
		setCurrency,
		unit,
		setUnit,
		price,
		setPrice,
		bedrooms,
		setBedrooms,
		bathrooms,
		setBathrooms,
		area,
		setArea,
		address,
		setAddress,
		estateType,
		setEstateType,
		estateAction,
		setEstateAction,
	} = useContext(DataEstateContext);

	return (
		<Box
			className="d-flex flex-column"
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "50ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<div className="d-flex align-items-center justify-content-center mb-3">
				<TextField
					className="me-4"
					id="outlined-currency"
					sx={{ width: "100px" }}
					color="dimgray"
					size="small"
					select
					label="Currency"
					value={currency}
					onChange={(e) => setCurrency(e.target.value)}
				>
					{CURRENCIES.map((el) => (
						<MenuItem key={el} value={el}>
							{el}
						</MenuItem>
					))}
				</TextField>

				<TextField
					className="me-4"
					sx={{ width: "150px" }}
					color="dimgray"
					size="small"
					id="outlined-price"
					label="Price"
					variant="outlined"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<TextField
					className="me-4"
					sx={{ width: "150px" }}
					color="dimgray"
					size="small"
					id="outlined-area"
					label="Area"
					variant="outlined"
					value={area}
					onChange={(e) => setArea(e.target.value)}
				/>

				<TextField
					className="me-4"
					id="outlined-unit"
					sx={{ width: "100px" }}
					color="dimgray"
					size="small"
					select
					value={unit}
					label="Unit"
					onChange={(e) => setUnit(e.target.value)}
				>
					{UNITS.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</div>

			<div className="d-flex align-items-center justify-content-center mb-3">
				<TextField
					className="me-4"
					sx={{ width: "100px" }}
					color="dimgray"
					size="small"
					id="outlined-bedrooms"
					label="Bedrooms"
					variant="outlined"
					value={bedrooms}
					onChange={(e) => setBedrooms(e.target.value)}
				/>
				<TextField
					className="me-4"
					sx={{ width: "100px" }}
					id="outlined-bathrooms"
					color="dimgray"
					size="small"
					label="Bathrooms"
					variant="outlined"
					value={bathrooms}
					onChange={(e) => setBathrooms(e.target.value)}
				/>

				<TextField
					inputProps={{ "data-lpignore": "true" }}
					id="outlined-estateType"
					sx={{ width: "200px" }}
					color="dimgray"
					size="small"
					select
					label="Estate type"
					type="text"
					value={estateType}
					onChange={(e) => setEstateType(e.target.value)}
				>
					{ESTATE_TYPES.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</div>

			<div className="d-flex align-items-center justify-content-center">
				<TextField
					className="me-4"
					id="outlined-address"
					sx={{ width: "300px" }}
					color="dimgray"
					size="small"
					label="Address"
					variant="outlined"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>

				<TextField
					inputProps={{ "data-lpignore": "true" }}
					id="outlined-estateAction"
					sx={{ width: "150px" }}
					color="dimgray"
					size="small"
					select
					label="Estate action"
					type="text"
					value={estateAction}
					onChange={(e) => setEstateAction(e.target.value)}
				>
					{ESTATE_ACTION.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</div>

		</Box>
	);
};

export default GeneralEstateForm;
