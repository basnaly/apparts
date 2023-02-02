import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { AddIconStyled } from "../styles/StyledComponents";
import { DataBuyContext } from "./DataBuyContext";

const DynamicInputAddRequest = () => {

	const { addRequest, setAddRequest } = useContext(DataBuyContext);
	const [inputs, setInputs] = useState([""]);

	const addInputField = () => {
		if (inputs.length < 10) {
			setInputs((prev) => [...prev, ""]);
		}
	};

	const changeInputValue = (index, newValue) => {
		// 'gh' -> input 1 = index in arr = 0 where arr = ['ab', 'cd', 'ef']

		setInputs((prev) => {
			const newPrev = JSON.parse(JSON.stringify(prev));
			// newPrev = copy of ['ab', 'cd', 'ef']
			newPrev[index] = newValue; // ['ab', 'cd', 'ef'][0] = 'gh' -> ['gh', 'cd', 'ef']

			const addRequestList = newPrev.filter((el) => el !== "");
			// ['gh', 'cd', 'ef'].filter(el => el !== "") remove ""
			console.log(addRequestList);

			setAddRequest(addRequestList);
			return newPrev; // ['gh', 'cd', 'ef']
		});
	};

	return (
		<div className="d-flex align-items-center overflow-auto">
			{inputs.map((el, i) => (
				<TextField
					key={i}
					className="me-3"
					sx={{ width: "250px" }}
					color="dimgray"
					size="small"
					id="outlined-add-request"
					label="Add request"
					variant="outlined"
					value={el}
					onChange={(e) => changeInputValue(i, e.target.value)}
				/>
			))}

			<AddIconStyled
				onClick={addInputField}
				disabled={inputs.length === 10}
			/>
		</div>
	);
};

export default DynamicInputAddRequest;
