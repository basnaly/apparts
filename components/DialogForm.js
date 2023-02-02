import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import GeneralEstateForm from "./GeneralEstateForm";
import DetailEstateForm from "./DetailEstateForm";
import {
	CancelButton,
	ContactButton,
	FormButton,
	SaveButton,
} from "../styles/StyledComponents";
import { DialogActions } from "@mui/material";
import { DataEstateProvider } from "./DataEstateContext";
import DynamicInputImage from "./DynamicInputImage";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const DialogForm = () => {
	const [currency, setCurrency] = useState("$");
	const [unit, setUnit] = useState("sqm");
	const [price, setPrice] = useState(0);
	const [bedrooms, setBedrooms] = useState(1);
	const [bathrooms, setBathrooms] = useState(1);
	const [area, setArea] = useState(0);
	const [address, setAddress] = useState("");
	const [estateType, setEstateType] = useState("Appartment");
	const [estateAction, setEstateAction] = useState("Sell");

	const [yearBuild, setYearBuild] = useState(2000);
	const [heating, setHeating] = useState("");
	const [cooling, setCooling] = useState("");
	const [parking, setParking] = useState("");

	const [images, setImages] = useState([]);

	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [status, setStatus] = useState("");

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const openOrderItems = () => {
		openDialog();
	};

	const saveEstate = async () => {
		const response = await fetch("/api/appart-data", {
			method: "POST",
			body: JSON.stringify({
				newEstate: {
					currency,
					unit,
					price,
					bedrooms,
					bathrooms,
					area,
					address,
					estateType,
					estateAction,
					yearBuild,
					heating,
					cooling,
					parking,
					images,
				},
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		// const data = await response.json()

		if (response.ok) {
			setStatus("The estate was created");
		} else {
			setStatus("Failed to create the estate");
		}

		setTimeout(() => setIsDialogOpen(false), 3000);
	};

	return (
		<DataEstateProvider
			value={{
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
				yearBuild,
				setYearBuild,
				heating,
				setHeating,
				cooling,
				setCooling,
				parking,
				setParking,
				images,
				setImages,
			}}
		>
			<FormButton
				variant={"outlined"}
				className="mx-2"
				onClick={openOrderItems}
			>
				Add estate
			</FormButton>

			<Dialog
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="lg"
			>
				<div className="d-flex align-items-center justify-content-between">
					<DialogTitle
						id="modal-modal-title"
						variant="h6"
						component="h2"
						className="m-0"
					>
						🏠 Apparts {status}
					</DialogTitle>

					<ContactButton className="me-4" variant={"outlined"}>
						Contact agent
					</ContactButton>
				</div>

				<hr className="mx-2 my-0" />

				<DialogContent className="d-flex flex-column overflow-auto flex-lg-row">
					<div className="d-flex flex-column">
						<GeneralEstateForm />
						<DetailEstateForm />
					</div>

					<DynamicInputImage />
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mb-3">
					<SaveButton
						onClick={saveEstate}
						variant={"outlined"}
						className=" mx-3"
					>
						Save
					</SaveButton>

					<CancelButton
						onClick={closeDialog}
						variant={"outlined"}
						className=" mx-3"
					>
						Cancel
					</CancelButton>
				</DialogActions>
			</Dialog>
		</DataEstateProvider>
	);
};

export default DialogForm;
