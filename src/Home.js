import {Container, Box} from "@chakra-ui/react";

import HomeSection from "./HomeSection";

const Home = () => {
	return (
		<Box pt="6rem">
			{/* <DesignGridVisual /> */}
			<Container maxW="container.xl">
				{/* layout */}
				<HomeSection />
			</Container>
		</Box>
	);
};

export default Home;
