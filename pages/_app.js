import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import { BodyStyled, MainStyled } from "../styles/MuiStyles";
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
			</Head>
			<MainStyled>
				<Header />
				<BodyStyled>
					<Component {...pageProps} />
				</BodyStyled>
			</MainStyled>
		</ThemeProvider>
	);
}
