import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CURRENCIES, ESTATE_TYPES, UNITS } from "../utils/constants";
import { MenuItem } from "@mui/material";
import { ContactButton } from "../styles/MuiStyles";

const InfoForm = () => {

	const [currency, setCurrency] = useState("$");
	const [unit, setUnit] = useState("sqm");
	const [price, setPrice] = useState(0);
	const [bedrooms, setBedrooms] = useState(1);
	const [bathrooms, setBathrooms] = useState(1);
	const [area, setArea] = useState(0);
	const [address, setAddress] = useState("");
	const [estateType, setEstateType] = useState("Appartment");

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
			<div className="d-flex">
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
					{CURRENCIES.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
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

			<div className="d-flex">
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
                    inputProps={{"data-lpignore": "true"}}
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

			<div className="d-flex">
				<TextField
					id="outlined-address"
                    sx={{ width: "300px" }}
                    color="dimgray"
				    size="small"
					label="Address"
					variant="outlined"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>

            <div className="d-flex justify-content-center">
                <ContactButton variant={"outlined"} >
                    Contact agent
                </ContactButton>
            </div>

            <hr />
            
		</Box>
	);
};

export default InfoForm;
