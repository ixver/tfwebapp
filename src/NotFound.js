import {Link} from "react-router-dom";
import {Box, Heading, Text, Container, Button} from "@chakra-ui/react";

const NotFound = () => {
	return (
		<Container maxW="container.lg">
			<Box>
				<Box>
					<Heading as="h1">Not found</Heading>
					<Text>The page you&apos;re looking for was not found.</Text>
				</Box>

				<Box my={6} align="center">
					<Link to="/">
						<Button variant="ghost">Go Back</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default NotFound;
