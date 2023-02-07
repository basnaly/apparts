import { CURRENCIES, UNITS } from "@/utils/constants";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import React, { useContext } from "react";
import { DataBuyContext } from "./DataBuyContext";
import { TitleBuyStyled } from "@/styles/StyledComponents";

const GeneralBuyForm = () => {
	const {
		currency,
		setCurrency,
		priceMin,
		setPriceMin,
		priceMax,
		setPriceMax,
		unit,
		setUnit,
		areaMin,
		setAreaMin,
		areaMax,
		setAreaMax,
		bedroomsMin,
		setBedroomsMin,
		bedroomsMax,
		setBedroomsMax,
		bathroomsMin,
		setBathroomsMin,
		bathroomsMax,
		setBathroomsMax,
		isHome,
		setIsHome,
		isCottage,
		setIsCottage,
		isAppartment,
		setIsAppartment,
	} = useContext(DataBuyContext);

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
			<div className="d-flex justify-content-center">
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
					sx={{ width: "200px" }}
					color="dimgray"
					size="small"
					id="outlined-price-min"
					label="Price min"
					variant="outlined"
					type="number"
					inputProps={{
						max: priceMax,
					}}
					error={+priceMin > +priceMax}
					value={priceMin}
					onChange={(e) => setPriceMin(e.target.value)}
				/>

				<TextField
					sx={{ width: "200px" }}
					color="dimgray"
					size="small"
					id="outlined-price-max"
					label="Price max"
					variant="outlined"
					type="number"
					inputProps={{
						min: priceMin,
					}}
					error={+priceMax < +priceMin}
					value={priceMax}
					onChange={(e) => setPriceMax(e.target.value)}
				/>
			</div>

			<div className="d-flex justify-content-center">
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

				<TextField
					className="me-4"
					sx={{ width: "200px" }}
					color="dimgray"
					size="small"
					id="outlined-areaMin"
					label="Area min"
					variant="outlined"
					type="number"
					inputProps={{
						max: areaMax,
					}}
					error={+areaMax < +areaMin}
					value={areaMin}
					onChange={(e) => setAreaMin(e.target.value)}
				/>

				<TextField
					sx={{ width: "200px" }}
					color="dimgray"
					size="small"
					id="outlined-areaMax"
					label="Area max"
					variant="outlined"
					inputProps={{
						min: areaMin,
					}}
					error={+areaMax < +areaMin}
					value={areaMax}
					onChange={(e) => setAreaMax(e.target.value)}
				/>
			</div>

			<div className="d-flex justify-content-center">
				<TextField
					className="me-4"
					sx={{ width: "130px" }}
					color="dimgray"
					size="small"
					id="outlined-bedroomsMin"
					label="Bedrooms min"
					variant="outlined"
					inputProps={{
						max: bedroomsMax,
					}}
					error={+bedroomsMax < +bedroomsMin}
					value={bedroomsMin}
					onChange={(e) => setBedroomsMin(e.target.value)}
				/>

				<TextField
					className="me-4"
					sx={{ width: "130px" }}
					color="dimgray"
					size="small"
					id="outlined-bedroomsMax"
					label="Bedrooms max"
					variant="outlined"
					inputProps={{
						min: bedroomsMin,
					}}
					error={+bedroomsMin > +bedroomsMax}
					value={bedroomsMax}
					onChange={(e) => setBedroomsMax(e.target.value)}
				/>

				<TextField
					className="me-4"
					sx={{ width: "130px" }}
					color="dimgray"
					size="small"
					id="outlined-bathroomsMin"
					label="Bathrooms min"
					variant="outlined"
					inputProps={{
						max: bathroomsMax,
					}}
					error={+bathroomsMax < +bathroomsMin}
					value={bathroomsMin}
					onChange={(e) => setBathroomsMin(e.target.value)}
				/>

				<TextField
					sx={{ width: "130px" }}
					color="dimgray"
					size="small"
					id="outlined-bathroomsMax"
					label="Bathrooms max"
					variant="outlined"
					inputProps={{
						min: bathroomsMin,
					}}
					error={+bathroomsMin > +bathroomsMax}
					value={bathroomsMax}
					onChange={(e) => setBathroomsMax(e.target.value)}
				/>
			</div>

			<div className="d-flex align-items-center justify-content-center m-0">
				<TitleBuyStyled className="me-3">Estate type:</TitleBuyStyled>
				<FormGroup className="d-flex flex-row">
					<FormControlLabel
						control={
							<Checkbox
								color="scarlet"
								checked={isHome}
								onChange={(e) => setIsHome(e.target.checked)}
							/>
						}
						label="Home"
					/>
					<FormControlLabel
						control={
							<Checkbox
								color="scarlet"
								checked={isCottage}
								onChange={(e) => setIsCottage(e.target.checked)}
							/>
						}
						label="Cottage"
					/>
					<FormControlLabel
						control={
							<Checkbox
								color="scarlet"
								checked={isAppartment}
								onChange={(e) =>
									setIsAppartment(e.target.checked)
								}
							/>
						}
						label="Appartment"
					/>
				</FormGroup>
			</div>
		</Box>
	);
};

export default GeneralBuyForm;
