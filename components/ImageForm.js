import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ImageStyled } from "@/styles/StyledComponents";

const ImageForm = ({ value, onChange }) => {

	return (
		<Box
			className="d-flex flex-column w-100"
			component="form"
			noValidate
			autoComplete="off"
		>
			<div className="d-flex align-items-center justify-content-center w-100 my-2">
				<TextField
					className="w-100 mb-2"
					color="dimgray"
					size="small"
					id="outlined-picture"
					label="Add image"
					variant="outlined"
					value={value}
					onChange={onChange}
				/>
			</div>
			{ 
				value !== "" ?
				<ImageStyled src={value} />
				: ""
			}
			
		</Box>
	);
};

export default ImageForm;
