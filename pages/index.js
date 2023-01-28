import Image from "next/image";
import img from "../public/estate.png";
import Box from "@mui/material/Box";
import { SearchIconStyled, TextFieldStyled } from "../styles/StyledComponents";
import { useState } from "react";
import useSWR from "swr";
import EstateComponent from "../components/EstateComponent";

const fetcher = async () => {

	const response = await fetch("/api/appart-data");
	const data = await response.json();
	return data;
};

const Home = () => {

	const { data, error } = useSWR("estateList", fetcher);

	const [filteredEstates, setFilteredEstates] = useState([]);

	console.log(error);

	if (error) return "An error was occur";
	if (!data) return "Loading..";

	const findFilteredEstates = (e) => {
		const filteredData = data.filter((el) =>
			el.address.toLowerCase().includes(e.target.value)
		);
		setFilteredEstates(filteredData)
		console.log(filteredData);
	};

	return (
		<div className="d-flex flex-column text-align-center w-100">
			<Box
				component="form"
				noValidate
				autoComplete="off"
				className="d-flex flex-column align-items-center mt-2 position-relative"
			>
				<div className="position-relative">
					<TextFieldStyled
						color="dimgray"
						id="outlined-basic"
						label="Enter an address, neigborhood, city"
						variant="outlined"
						onChange={findFilteredEstates}
					/>

					<SearchIconStyled onClick={findFilteredEstates} />
				</div>
				<div className="d-flex flex-wrap overflow-auto">
				{filteredEstates.length !== 0 ? (
					filteredEstates.map((el) => (
						<EstateComponent el={el} />
					))
				) : (
					<Image
						src={img}
						placeholder="blur"
						blurDataURL="../public/estate.png"
						alt="estate"
						width="650"
						height="450"
						className="flex-shrink-0 my-4"
					/>
				)}
				</div>
			</Box>
		</div>
	);
};

export default Home;
