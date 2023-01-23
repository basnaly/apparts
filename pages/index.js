import Image from "next/image";
import img from "../public/estate.png";
import Box from "@mui/material/Box";
import { SearchIconStyled, TextFieldStyled } from "../styles/MuiStyles";

const Home = () => {
	return (
		<div className="d-flex flex-column text-align-center">
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
					/>

					<SearchIconStyled />
				</div>

				<Image
					src={img}
					placeholder="blur"
					blurDataURL="../public/estate.png"
					alt="estate"
					width="650"
					height="450"
					className="flex-shrink-0 my-4"
				/>
			</Box>
		</div>
	);
};

export default Home;
