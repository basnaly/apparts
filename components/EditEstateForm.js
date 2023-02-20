import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import GeneralEstateForm from "./GeneralEstateForm";
import DetailEstateForm from "./DetailEstateForm";
import {
	CancelButton,
	SaveButton,
} from "../styles/StyledComponents";
import { DialogActions } from "@mui/material";
import { DataEstateProvider } from "./DataEstateContext";
import DynamicInputImage from "./DynamicInputImage";
import DialogContactAgent from "./DialogContactAgent";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const EditEstateForm = ({ el, mutate }) => {

    const [currency, setCurrency] = useState(el?.currency);
	const [unit, setUnit] = useState(el?.unit);
	const [price, setPrice] = useState(el?.price);
	const [bedrooms, setBedrooms] = useState(el?.bedrooms);
	const [bathrooms, setBathrooms] = useState(el?.bathrooms);
	const [area, setArea] = useState(el?.area);
	const [address, setAddress] = useState(el?.address);
	const [estateType, setEstateType] = useState(el?.estatetype);
	const [estateAction, setEstateAction] = useState(el?.estateaction);

	const [yearBuild, setYearBuild] = useState(el?.yearbuild);
	const [heating, setHeating] = useState(el?.heating);
	const [cooling, setCooling] = useState(el?.cooling);
	const [parking, setParking] = useState(el?.parking);

	const [images, setImages] = useState(el?.images);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [status, setStatus] = useState("");

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

    const saveEditedEstate = async () => {
		const response = await fetch(`/api/appart-data/${el.id}`, {
			method: "POST",
			body: JSON.stringify({
				estate: {
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
        // mutate()
		setTimeout(() => setIsDialogOpen(false), 1000);
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
			<SaveButton
				onClick={openDialog}
				variant="outlined"
				className="mx-3"
			>
				Edit
			</SaveButton>

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

					<DialogContactAgent />
				</div>

				<hr className="mx-2 my-0" />

				<DialogContent className="d-flex flex-column">
					<div className="d-flex flex-column overflow-auto">
						<GeneralEstateForm />
						<DetailEstateForm />
						<DynamicInputImage />
					</div>
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mb-3">
					<SaveButton
						onClick={saveEditedEstate}
						variant={"outlined"}
						className="mx-3"
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

export default EditEstateForm;
