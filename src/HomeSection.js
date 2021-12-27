import React, {useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {Flex, Grid, GridItem, Text, Box, Button, Image} from "@chakra-ui/react";
import {motion} from "framer-motion";

import HomeItem from "./HomeItem";

const HomeSection = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	const [camMode, setCamMode] = useState();
	const setCamModeA = () => {
		setCamMode("1");
	};
	const setCamModeB = () => {
		setCamMode("2");
	};
	const setCamModeC = () => {
		setCamMode("3");
	};

	const outerAnimContainer = {
		hiding: {},
		showing: {
			transition: {
				// when: "beforeChildren",
				delayChildren: 0.28,
				staggerChildren: 0.68,
			},
		},
	};
	const itemAnim = {
		hiding: {
			opacity: 0,
			// scale: 0,
			y: -160,
		},
		showing: {
			opacity: 1,
			// scale: 1,
			y: 0,
			transition: {
				type: "spring",
				ease: "easeIn",
				damping: 11,
				duration: 0.17,
			},
		},
	};
	return (
		<motion.div variants={outerAnimContainer} initial="hiding" animate="showing">
			<Flex direction={["column"]} textAlign={{base: "center", md: "left"}} pb="8rem">
				<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{base: "2vh", md: "2vh"}}>
					{/* SUBDIVISION 1 */}
					<GridItem colSpan={{base: 12, lg: 2}}></GridItem>

					{/* SUBDIVISION 1 */}
					<GridItem colSpan={{base: 12, lg: 10}} zIndex={2}>
						{/* CAMERA */}
						<Flex
							direction={["column"]}
							h="48vh"
							bg="black"
							alignItems="center"
							justifyContent="center"
							mb="4vh"
							borderWidth=".28vh"
							borderColor="white"
						>
							<HomeItem user={user} camMode={camMode} />
						</Flex>

						<Flex direction={["column"]} alignItems={{base: "center", md: "start"}} pt="4vh">
							{user && user.uid && (
								<Box w="100%" mb="6vh">
									<motion.div variants={itemAnim}>
										<Flex direction={{base: ["column"], md: ["row"]}} justifyContent="center" gap="2vh">
											<Button
												variant="outline"
												colorScheme="black"
												onClick={() => setCamModeB()}
												borderWidth=".28vh"
												px="3.3vh"
												py="2vh"
												fontSize="2vh"
											>
												FACE POSE
											</Button>
											<Button
												variant="outline"
												colorScheme="black"
												onClick={() => setCamModeC()}
												borderWidth=".28vh"
												px="3.3vh"
												py="2vh"
												fontSize="2vh"
											>
												HAND POSE
											</Button>
										</Flex>
									</motion.div>
								</Box>
							)}
						</Flex>
						{user && user.uid && camMode == "2" && (
							<motion.div variants={itemAnim}>
								<Flex direction={["column"]} alignItems="center">
									<Text mb="6vh" fontSize="2vh" maxW="68vh" textAlign="center" lineHeight="4vh">
										Vertical mouth opening (relative to the mouth width) is tracked. When minimum opening condition is met, it triggers
										color turbulence.
									</Text>
								</Flex>
							</motion.div>
						)}
						{user && user.uid && camMode == "3" && (
							<Flex direction={["column"]} alignItems="center">
								<motion.div variants={itemAnim}>
									<Flex direction={["row"]} justifyContent="center" alignItems="center" flexWrap={true} maxW="68vh" mb="4vh">
										<Image display="inline-block" height="16vh" src="handshakainstr.jpg" />
										<Image display="inline-block" height="16vh" src="handspockinstr.jpg" />
										<Image display="inline-block" height="16vh" src="handevilinstr.png" />
									</Flex>
									<Flex direction={["column"]} alignItems="center" maxW="68vh" mb="4vh">
										<Text mb="6vh" fontSize="2vh" maxW="68vh" textAlign="center" lineHeight="4vh">
											Using the parameters from handpose and fingerpose models, 3 custom hand pose classes have been defined. When a class
											is detected and confidence requirements met, a corresponding gif image appears. <br />
											<br />
											<strong>Note:</strong> The orientation of the forearm and hand can alter the finger positions, so please keep this
											in mind. Also, speed and precise detections are some known limitations of the current models.
										</Text>
									</Flex>
								</motion.div>
							</Flex>
						)}
					</GridItem>
				</Grid>
			</Flex>
		</motion.div>
	);
};

export default HomeSection;
