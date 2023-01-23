import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import InfoForm from "./InfoForm";
import PicturesForm from "./PicturesForm";
import DetailsForm from "./DetailsForm";
import { CancelButton, FormButton, SaveButton } from "../styles/MuiStyles";
import { DialogActions } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const dialogForm = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const openOrderItems = () => {
		openDialog();
	};

	return (
		<React.Fragment>
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
				<DialogTitle
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="pb-1 m-1"
				>
					Apparts
				</DialogTitle>

				<hr className="mx-2 my-0" />

				<DialogContent className="d-flex flex overflow-auto">
					<div className="d-flex flex-column overflow-auto">
						<InfoForm />
                        <DetailsForm />	
					</div>

					<PicturesForm />
				</DialogContent>

                <DialogActions className="d-flex align-items-center justify-content-center mb-3">
					<SaveButton
						// onClick={saveFilter}
						variant={"outlined"}
						className=" mx-3"
						// disabled={!property || detail === ""}
					>
						Save
					</SaveButton>

					<CancelButton
						// onClick={closeDialog}
						variant={"outlined"}
						className=" mx-3"
					>
						Cancel
					</CancelButton>
				</DialogActions>
			
			</Dialog>
		</React.Fragment>
	);
};

export default dialogForm;
