import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import { BodyStyled, MainStyled } from "../styles/StyledComponents";
import { myTheme } from "../styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={myTheme}>
			<Head>
				<title>Apparts</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="sell rent buy estate application"
				/>
			</Head>
			<MainStyled className="d-flex flex-column overflow-auto">
				<Header />
				<BodyStyled className="d-flex overflow-auto">
					<Component {...pageProps} />
				</BodyStyled>
			</MainStyled>
		</ThemeProvider>
	);
}
