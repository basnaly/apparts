import React, { useContext } from "react";
import { DataBuyContext } from "./DataBuyContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DynamicInputAddRequest from "./DynamicInputAddRequest";
import { TitleBuyStyled } from "@/styles/StyledComponents";

const DetailBuyForm = () => {
	const {
		preferAreaEstate,
		setPreferAreaEstate,
		yearBuildMin,
		setYearBuildMin,
		yearBuildMax,
		setYearBuildMax,
		floorMin,
		setFloorMin,
		floorMax,
		setFloorMax,
		parkingMin,
		setParkingMin,
		parkingMax,
		setParkingMax,
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
			<div className="d-flex align-items-center justify-content-center mb-3">
				<TitleBuyStyled className="me-3">Prefer area estate: </TitleBuyStyled>
				<TextField
					className="me-5"
					sx={{ width: "300px" }}
					color="dimgray"
					size="small"
					id="outlined-prefer-area-estate"
					label="Prefer area estate"
					variant="outlined"
					value={preferAreaEstate}
					onChange={(e) => setPreferAreaEstate(e.target.value)}
				/>
			</div>

			<div className="d-flex align-items-center justify-content-center">
				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-year-build-min"
					label="Min build year"
					variant="outlined"
					inputProps={{
						max: yearBuildMax
					}}
					error={ +yearBuildMax < +yearBuildMin }
					value={yearBuildMin}
					onChange={(e) => setYearBuildMin(e.target.value)}
				/>

				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-year-build-max"
					label="Max build year"
					variant="outlined"
					inputProps={{
						min: yearBuildMin
					}}
					error={ +yearBuildMin > +yearBuildMax }
					value={yearBuildMax}
					onChange={(e) => setYearBuildMax(e.target.value)}
				/>
			</div>

			<div className="d-flex align-items-center justify-content-center">
				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-floor-min"
					label="Min floor"
					variant="outlined"
					inputProps={{
						max: floorMax
					}}
					error={ +floorMax < +floorMin }
					value={floorMin}
					onChange={(e) => setFloorMin(e.target.value)}
				/>

				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-floor-max"
					label="Max floor"
					variant="outlined"
					inputProps={{
						min: floorMin
					}}
					error={ +floorMin > +floorMax }
					value={floorMax}
					onChange={(e) => setFloorMax(e.target.value)}
				/>
			</div>

			<div className="d-flex align-items-center justify-content-center">
				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-parking-min"
					label="Min parking"
					variant="outlined"
					inputProps={{
						max: parkingMax
					}}
					error={ +parkingMax < +parkingMin }
					value={parkingMin}
					onChange={(e) => setParkingMin(e.target.value)}
				/>

				<TextField
					className="me-5"
					sx={{ width: "195px" }}
					color="dimgray"
					size="small"
					id="outlined-parking-max"
					label="Max parking"
					variant="outlined"
					inputProps={{
						min: parkingMin
					}}
					error={ +parkingMax < +parkingMin }
					value={parkingMax}
					onChange={(e) => setParkingMax(e.target.value)}
				/>
			</div>

			<div className="d-flex align-items-center justify-content-center">
				<DynamicInputAddRequest />
			</div>
		</Box>
	);
};

export default DetailBuyForm;
