import React, {useState} from "react";
import {Center, Flex, Box, Text, Button, Heading} from "@chakra-ui/react";
import {motion, LayoutGroup} from "framer-motion";
import {CamView1, CamView2, CamView3} from "./CamViews";

function chooseRandomItem(someList) {
	const choice = someList[Math.floor(Math.random() * someList.length)];
	return choice;
}

const HomeItem = ({itemData, user, camMode}) => {
	var colorSchemes = {
		a: ["brandADark", "brandALight"],
		b: ["brandBDark", "brandBLight"],
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
				delayChildren: 0.28,
				staggerChildren: 0.28,
				type: "spring",
				ease: "easeIn",
				damping: 11,
				duration: 0.17,
			},
		},
	};
	const tagAnim = {
		hiding: {
			opacity: 0,
			scale: 0,
		},
		showing: {
			opacity: 1,
			scale: 1,
			transition: {
				ease: "easeIn",
				type: "spring",
				damping: 11,
				duration: 1.6,
			},
		},
	};
	const colorSchemeChoice = chooseRandomItem(Object.keys(colorSchemes));
	// maxW={{base: "22rem", md: "48vh"}}

	return (
		<Flex direction={["column"]} h="100%" w="100%" justifyContent="center" alignItems="center" position="relative">
			<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, ease: "easeIn", duration: 0.8}}>
				{/* <Box variant="worksample-item-text" color="bodyDark2ndAlt" textAlign="center" m="auto" p={0}> */}
				<motion.div variants={itemAnim}>
					{user && user.uid ? (
						<Box>
							{!camMode && (
								<Flex direction={["column"]}>
									<Heading>set camera mode</Heading>
								</Flex>
							)}
							{/* {camMode == "1" && <CamView1 />} */}
							{camMode == "2" && <CamView2 />}
							{camMode == "3" && <CamView3 />}
						</Box>
					) : (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{delay: 1, ease: "easeIn", duration: 0.8, repeatDelay: 1, repeat: Infinity, repeatType: "mirror"}}
						>
							<Box>
								<Text
									textAlign="center"
									fontWeight="semibold"
									position="absolute"
									m="auto"
									top="50%"
									left="50%"
									zindex={100}
									color="white"
									fontSize="4vh"
								>
									login to view
								</Text>
							</Box>
						</motion.div>
					)}
				</motion.div>
				{/* </Box> */}
			</motion.div>
		</Flex>
	);
};

export default HomeItem;
