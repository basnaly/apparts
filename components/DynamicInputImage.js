import ImageForm from "./ImageForm";
import React, { useState, useContext } from "react";
import { AddIconStyled } from "../styles/StyledComponents";
import { DataEstateContext } from "./DataEstateContext";

const DynamicInputImage = () => {

	const { images, setImages } = useContext(DataEstateContext);

	const [inputs, setInputs] = useState(['']);

	const addInputField = () => {
		if (inputs.length < 10) {
			setInputs((prev) => [...prev, "" ]);
		}
	};

	const changeInputValue = (index, newValue) => {
		setInputs((prev) => {
			const newPrev = JSON.parse(JSON.stringify(prev));
			newPrev[index] = newValue; // in 2-nd input.value = 'abc'
			
			const imageList = newPrev
				.filter((el) => el !== "")
			console.log(imageList);
			
			setImages(imageList);
			return newPrev; // [arr with all inputs incl changed]
		});
	};

	return (
		<div className="d-flex align-items-center justify-content-center">
			{inputs.map((el, i) => (
				<ImageForm
					key={i}
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

export default DynamicInputImage;
