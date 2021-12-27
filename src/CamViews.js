import React, {useRef, useEffect, useState} from "react";
import {Center, Flex, Box, Text, Button} from "@chakra-ui/react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";

import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";

import {superimposeMask, colorFaceChristmasy} from "./facemesh utilities";
import {drawGesture, shakaLHGesture, shakaRHGesture, spockLHGesture, spockRHGesture, evilLHGesture, evilRHGesture} from "./handpose utilities";
import shakaGif from "./images/handshakashow.gif";
import spockGif from "./images/handspockshow.gif";
import evilGif from "./images/handevilshow.gif";

const detectionIntervals = 100;

export const CamView1 = () => {
	const [isLoading, setIsLoading] = useState(true);
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);

	const runFacemesh = async () => {
		const net = await facemesh.load({
			inputResolution: {width: 640, height: 480},
			scale: 0.8,
		});
		setInterval(() => {
			detect(net);
		}, detectionIntervals);
	};
	let videoWidth;
	let videoHeight;
	let ctx;

	const detect = async (net) => {
		if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
			// Get Video
			const video = webcamRef.current.video;

			// Get Video Properties
			videoWidth = webcamRef.current.video.videoWidth;
			videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			// Set canvas width
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;

			// VARIANT
			// Make Detections
			const face = await net.estimateFaces(video);

			// Check
			// console.log(face);

			// Get canvas context
			ctx = canvasRef.current.getContext("2d");
			requestAnimationFrame(() => {
				// drawRandomRectangle, drawTriangles, drawMask, drawMaskBasic, drawFaceBlue, drawFaceParts, drawThingsConditionally
				face && superimposeMask(face, ctx, videoWidth, videoHeight);
				// face && colorFaceConditionally(face, ctx, videoWidth, videoHeight);
			});
		}
	};

	useEffect(() => {
		runFacemesh().then(() => {
			setIsLoading(false);
			console.log("Facemesh model loaded.");
		});
		return () => {
			const maskElement = document.getElementById("mask");
			while (maskElement.firstChild) {
				maskElement.removeChild(maskElement.firstChild);
			}
		};
	}, []);

	return (
		<Box>
			<Box mb="4vh">
				<Webcam
					ref={webcamRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						zindex: 9,
						width: 640,
						height: "100%",
					}}
				/>
				<canvas
					ref={canvasRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						width: 640,
						height: "100%",
						zindex: 9,
					}}
				/>
				{isLoading && (
					<span
						style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							top: "50%",
							left: "50%",
							zindex: 100,
							color: "white",
							fontSize: "4vh",
							fontWeight: 800,
						}}
					>
						model is loading
					</span>
				)}
			</Box>
		</Box>
	);
};

export const CamView2 = () => {
	const [isLoading, setIsLoading] = useState(true);
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);

	const runFacemesh = async () => {
		const net = await facemesh.load({
			inputResolution: {width: 640, height: 480},
			scale: 0.8,
		});
		setInterval(() => {
			detect(net);
		}, detectionIntervals);
	};
	let videoWidth;
	let videoHeight;
	let ctx;

	const detect = async (net) => {
		if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
			// Get Video
			const video = webcamRef.current.video;

			// Get Video Properties
			videoWidth = webcamRef.current.video.videoWidth;
			videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			// Set canvas width
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;

			// VARIANT
			// Make Detections
			const face = await net.estimateFaces(video);

			// Check
			// console.log(face);

			// Get canvas context
			ctx = canvasRef.current.getContext("2d");
			requestAnimationFrame(() => {
				face && colorFaceChristmasy(face, ctx, videoWidth, videoHeight);
			});
		}
	};

	useEffect(() => {
		runFacemesh().then(() => {
			console.log("Facemesh model loaded.");
			setIsLoading(false);
		});
		return () => {
			const maskElement = document.getElementById("mask");
			while (maskElement.firstChild) {
				maskElement.removeChild(maskElement.firstChild);
			}
		};
	}, []);

	return (
		<Box>
			<Box mb="4vh">
				<Webcam
					ref={webcamRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						zindex: 9,
						width: 640,
						height: "100%",
					}}
				/>
				<canvas
					ref={canvasRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						width: 640,
						height: "100%",
						zindex: 9,
					}}
				/>
				{isLoading && (
					<span
						style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							top: "50%",
							left: "50%",
							zindex: 100,
							color: "white",
							fontSize: "4vh",
							fontWeight: 800,
						}}
					>
						model is loading
					</span>
				)}
			</Box>
		</Box>
	);
};

export const CamView3 = () => {
	// HAND POSES
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	const handshowsimages = {
		shakaLH: shakaGif,
		shakaRH: shakaGif,
		spockLH: spockGif,
		spockRH: spockGif,
		evilLH: evilGif,
		evilRH: evilGif,
	};
	const [handshow, setHandShow] = useState(null);

	const runHandpose = async () => {
		const net = await handpose.load({
			inputResolution: {width: 640, height: 480},
			scale: 0.8,
		});
		//  Loop and detect hands
		setInterval(() => {
			detect(net);
		}, detectionIntervals);
	};
	let videoWidth;
	let videoHeight;
	let ctx;

	const detect = async (net) => {
		if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
			// Get Video
			const video = webcamRef.current.video;

			// Get Video Properties
			videoWidth = webcamRef.current.video.videoWidth;
			videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			// Set canvas width
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;

			// VARIANT

			// Make Detections
			const hand = await net.estimateHands(video);

			// Check hand detection
			// console.log(hand);

			// APPLY CUSTOM GESTURES
			ctx = canvasRef.current.getContext("2d");
			if (hand.length > 0) {
				const GE = new fp.GestureEstimator([shakaLHGesture, shakaRHGesture, spockLHGesture, spockRHGesture, evilLHGesture, evilRHGesture]);
				const gesture = await GE.estimate(hand[0].landmarks, 4);
				if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
					// check gestures detection
					// console.log("gesture", gesture.gestures);

					const confidence = gesture.gestures.map((prediction) => prediction.confidence);
					const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
					// console.log(gesture.gestures[maxConfidence]);

					const minConfidence = 9;
					gesture.gestures[maxConfidence].confidence >= minConfidence && setHandShow(gesture.gestures[maxConfidence].name);
					// Check emoji detection
					// console.log(gesture.gestures[maxConfidence].name);
					// console.log("handshow", handshow);
					requestAnimationFrame(() => {
						drawGesture(gesture, ctx, videoWidth, videoHeight);
					});
				}
			}
		}
	};

	useEffect(() => {
		runHandpose().then(() => {
			console.log("Handpose model loaded.");
			setIsLoading(false);
		});
		handshow &&
			setTimeout(() => {
				setHandShow();
			}, 3000);
	}, [handshow]);

	return (
		<Box>
			<Box mb="4vh">
				<Webcam
					ref={webcamRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						zindex: 9,
						width: 640,
						height: "100%",
					}}
				/>
				<canvas
					ref={canvasRef}
					style={{
						position: "absolute",
						top: 0,
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "center",
						width: 640,
						height: "100%",
						zindex: 9,
					}}
				/>
				{isLoading && (
					<span
						style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							top: "50%",
							left: "50%",
							zindex: 100,
							color: "white",
							fontSize: "4vh",
							fontWeight: 800,
							backgroundColor: "black",
						}}
					>
						model is loading
					</span>
				)}
				{handshow && (
					<img
						src={handshowsimages[handshow]}
						style={{
							position: "absolute",
							top: 0,
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							width: "33%",
							height: "33%",
							zindex: 99,
						}}
						alt={handshow}
					/>
				)}
			</Box>
		</Box>
	);
};
