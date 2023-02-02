import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ImageForm = ({ value, onChange }) => {

	return (
		<Box
			className="d-flex flex-column"
			component="form"
			noValidate
			autoComplete="off"
		>
			<div className="d-flex align-items-center justify-content-center my-2">
				<TextField
					className="me-4"
					color="dimgray"
					size="small"
					id="outlined-picture"
					label="Add image"
					variant="outlined"
					value={value}
					onChange={onChange}
				/>
			</div>

			<img src={value} />
		</Box>
	);
};

export default ImageForm;
