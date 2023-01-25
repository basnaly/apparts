import ImageForm from "./ImageForm";
import React, { useState, useContext } from "react";
import { AddIconStyled } from "../styles/StyledComponents";
import { DataContext } from "./DataContext";

const DynamicInputImage = () => {

	const { images, setImages } = useContext(DataContext);

	const [inputs, setInputs] = useState([{ value: "" }]);

	const addInputField = () => {
		if (inputs.length < 10) {
			setInputs((prev) => [...prev, { value: "" }]);
		}
	};

	const changeInputValue = (index, newValue) => {
		setInputs((prev) => {
			const newPrev = JSON.parse(JSON.stringify(prev));
			newPrev[index].value = newValue; // in 2-nd input.value = 'abc'
			console.log(newPrev);
			const imageList = newPrev
				.filter((el) => el.value !== "")
				.map((el) => el.value);
			console.log(imageList);
			setImages(imageList);
			return newPrev; // [arr with all inputs incl changed]
		});
	};

	return (
		<div className="d-flex flex-column align-items-center overflow-auto">
			{inputs.map((el, i) => (
				<ImageForm
					key={i}
					value={el.value}
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
