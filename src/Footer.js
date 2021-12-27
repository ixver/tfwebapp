import {Container, Flex, Grid, GridItem, Box, Text, Icon, useColorModeValue} from "@chakra-ui/react";
import {FooterNavButton, LinkButton} from "./Buttons";
const Footer = () => {
	let dividColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	const colorScheme = useColorModeValue("dark", "light");
	return (
		<Box pt="2.8rem" variant="">
			<Container maxW="container.xl" centerContent>
				<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{base: "2vh", md: "2vh"}} mb="4rem" w="100%" m="auto">
					<GridItem colSpan={{base: 12, md: 4}}></GridItem>
					<GridItem colSpan={{base: 12, md: 8}} mb="4.8rem">
						<Flex direction={{base: ["column"], md: ["column"]}} w="100%" alignItems="end" justifyContent="end" mb="6vh">
							<LinkButton loc="https://www.github.com/" target="_blank" lbl={<>view source code</>} colorScheme={colorScheme} />
						</Flex>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
