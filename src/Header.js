import {Container, Flex, Box, Spacer, Link, Button, useColorModeValue} from "@chakra-ui/react";
import {ThemeToggleButton} from "./Buttons";
import AccountControls from "./AccountControls";

import {motion} from "framer-motion";

const Header = () => {
	const colorSchemeA = useColorModeValue("dark", "light");
	return (
		<Box py={4}>
			<Container maxW="container.xl">
				<motion.div
					initial={{opacity: 0, y: "-48vh"}}
					animate={{opacity: 1, y: "0vh"}}
					transition={{duration: 0.48, damping: 11, type: "spring", ease: "easeIn", when: "beforeChildren"}}
				>
					{/* layout */}
					<Flex direction={{base: ["column"], sm: ["row"]}} align="center">
						<Box order={{base: 2, sm: 2}}></Box>

						<Spacer order={{base: 3, sm: 3}} flex={1} />

						<ThemeToggleButton order={{base: 5, sm: 4}} />
						<Box order={{base: 4, sm: 5}}>
							<AccountControls />
						</Box>
					</Flex>
				</motion.div>
			</Container>
		</Box>
	);
};

export default Header;
