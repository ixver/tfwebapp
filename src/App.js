import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./styles/ChakraTheme.js";

import {firestoreDb as db} from "./models/firebase/config";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import NotFound from "./NotFound";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<div className="App">
					<Header />
					<div>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route>
								<NotFound />
							</Route>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</ChakraProvider>
	);
}

export default App;
