import {useState, useEffect} from "react";

import {Box, Link, Button, IconButton, Tooltip, useColorModeValue, useColorMode} from "@chakra-ui/react";

import {SunIcon, MoonIcon} from "@chakra-ui/icons";

import {AnimatePresence, motion} from "framer-motion";

export const HomeButton = ({loc, lbl}) => {
	return (
		<Box mb={{base: "1rem", md: "0rem"}}>
			<Link to={loc} fontSize="lg" variant="showcase-nav" px={0} mx="1rem" color={useColorModeValue("bodyLight", "bodyDark")}>
				{lbl}
			</Link>
		</Box>
	);
};

export const NavButton = ({loc, lbl, order}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<Link to={loc} variant="showcase-nav" px={0} mx="1rem" pb=".1rem" fontSize="2vh" colorScheme={useColorModeValue("light", "dark")}>
				{lbl}
			</Link>
			{/* <Button p={0} variant="ghost" px={0} mx="1rem" pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Button> */}
		</Box>
	);
};

export const FooterNavButton = ({loc, lbl, order}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<Link to={loc} px={0} pb=".1rem" fontSize="2vh" colorScheme={useColorModeValue("light", "dark")}>
				<Button variant="ghost" p={0} px={0} pb=".1rem">
					{lbl}
				</Button>
			</Link>
		</Box>
	);
};

export const LinkButton = ({loc, lbl, order, target, leftIcon, colorScheme}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<Link
				_hover=""
				href={loc}
				target={target}
				px={0}
				// mx="1vh"
				pb=".2vh"
				// variant="showcase-nav"
				// fontFamily="subtitleFont"
				// letterSpacing=".11rem"
				// colorScheme={useColorModeValue("light", "dark")}
			>
				<Button variant="ghost" p={0} px={0} pb=".1rem" fontSize="2vh" leftIcon={leftIcon} colorScheme={colorScheme}>
					{lbl}
				</Button>
			</Link>
		</Box>
	);
};

export const ResumeButton = ({lbl, order}) => {
	const [resumeOn, setResumeOn] = useState(false);
	const [currentColor, setCurrentColor] = useState("bodyDark2ndAlt");

	let linkColor = useColorModeValue("bodyLight2nd", "bodyDark2nd");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	return (
		<>
			<Box order={order} mb={{base: "1rem", md: "0rem"}}>
				<Link variant="showcase-nav" px={0} mx="1rem" pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Link>
				{/* <Button p={0} variant="ghost" px={0} mx="1rem" pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Button> */}
			</Box>

			{/* {resumeOn && (
				<Modal onClose={() => setResumeOn(!resumeOn)} isOpen={() => setResumeOn(!resumeOn)} isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Modal Title</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Img src="/sample resume.png" minH="28rem" minW="100%" alt="uploaded pic" zIndex={2} />
						</ModalBody>
					</ModalContent>
				</Modal>
			)} */}
		</>
	);
};

export const ThemeToggleButton = (props) => {
	const {toggleColorMode} = useColorMode();
	const schemeIcon = useColorModeValue(<SunIcon fontSize="1.1rem" />, <MoonIcon fontSize="1.1rem" />);
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	return (
		<Box order={props.order} mx="1rem">
			<Tooltip label="Toggle Color Mode" placement="top" hasArrow>
				<motion.div initial={{y: 16, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -16, opacity: 0}} transition={{duration: 0.48}}>
					<Box px={0} m={0} _hover={{color: linkHvrColor, bg: linkHvrBGColor}}>
						<IconButton
							// variant="ghost"
							variant="colormodetoggle"
							aria-label="toggle theme"
							icon={schemeIcon}
							onClick={() => toggleColorMode()}
						></IconButton>
					</Box>
				</motion.div>
			</Tooltip>
		</Box>
	);
};
