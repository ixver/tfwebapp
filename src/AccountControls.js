import React, {useState, useEffect} from "react";
import {Button, IconButton, Tooltip, useColorModeValue} from "@chakra-ui/react";
import {MdTransitEnterexit} from "react-icons/md";
import {useAuthUser, signInWithGoogle} from "./manageAuths";

const AccountControls = () => {
	const {auth, user} = useAuthUser();
	const buttonSchemeA = useColorModeValue("dark", "light");
	const buttonSchemeB = useColorModeValue("dark", "light");
	return user ? (
		auth.currentUser && (
			<Tooltip label="logout" placement="top" hasArrow>
				<IconButton aria-label="logout" icon={<MdTransitEnterexit fontSize="2.8rem" />} onClick={() => auth.signOut()} colorScheme={buttonSchemeA} />
			</Tooltip>
		)
	) : (
		<Button variant="outline" borderWidth=".28vh" colorScheme={buttonSchemeB} aria-label="login" onClick={signInWithGoogle} px="4vh" py="2vh">
			LOGIN
		</Button>
	);
};

export default AccountControls;
