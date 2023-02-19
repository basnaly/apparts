import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import {
	BranchComponentStyledGreen,
	CancelButton,
	ContactButton,
    DialogActionsStyled,
} from "../styles/StyledComponents";
import useSWR from "swr";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const fetcher = async () => {
	const response = await fetch("/api/appart-branches");
	const data = await response.json();
	return data;
};

const DialogContactAgent = () => {

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const { data, error } = useSWR("branchList", fetcher);

	if (error) return "An error was occur";
	if (!data) return "Loading..";

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<div>
			<ContactButton
				className="me-4"
				variant={"outlined"}
				onClick={openDialog}
			>
				Contact agent
			</ContactButton>

			<Dialog
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth='true'
                sx={{ mx: 'calc(50vw - 470px)'}}
                
			>
				<DialogContent className="d-flex justify-content-center flex-wrap overflow-auto flex-row ">
					{data.rows.map((el) => (
						<BranchComponentStyledGreen el={el} key={el.id} />
					))}
				</DialogContent>

				<DialogActionsStyled className="d-flex align-items-center justify-content-center mb-3">
					<CancelButton onClick={closeDialog} variant={"outlined"}>
						Close
					</CancelButton>
				</DialogActionsStyled>
			</Dialog>
		</div>
	);
};

export default DialogContactAgent;
