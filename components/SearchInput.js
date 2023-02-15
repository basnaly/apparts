import Box from "@mui/material/Box";
import { SearchIconStyled, TextFieldStyled } from "../styles/StyledComponents";

const SearchInput = ({ findFilteredEstates }) => {

	return (
		
		<Box
			// component="form"
			noValidate
			autoComplete="off"
			className="d-flex flex-column align-items-center mt-4 position-relative"
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
		</Box>
	);
};

export default SearchInput;
