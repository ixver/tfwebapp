import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";
// Points for fingers
const fingerJoints = {
	thumb: [0, 1, 2, 3, 4],
	indexFinger: [0, 5, 6, 7, 8],
	middleFinger: [0, 9, 10, 11, 12],
	ringFinger: [0, 13, 14, 15, 16],
	pinky: [0, 17, 18, 19, 20],
};

// Drawing function
export const drawGesture = (predictions, ctx, videoWidth, videoHeight) => {
	// Check if we have predictions
	// console.log("predictions", predictions);
	if (predictions) {
		const gesturesData = predictions.gestures;
		const posesData = predictions.poseData;

		const classnames = gesturesData.map((gesture) => gesture.name);
		const confidences = gesturesData.map((gesture) => gesture.confidence);
		const maxConfidenceIndex = confidences.indexOf(Math.max.apply(null, confidences));
		const maxClassname = classnames[maxConfidenceIndex];
		const maxConfidence = confidences[maxConfidenceIndex];

		ctx.fillStyle = "rgba(0,0,0,.48)";
		ctx.fillRect(0, 316, 350, 480);
		ctx.font = "1.6vh Verdana";
		ctx.fillStyle = "white";
		ctx.fillText("top class: " + maxClassname, 28, 340);
		ctx.fillText("top confidence: " + maxConfidence, 28, 360);
		let yCurrent = 380;
		const addYNext = 20;
		posesData.forEach((poseData) => {
			let currentText = poseData[0] + " pose: " + poseData[2];
			ctx.fillText(currentText, 28, yCurrent);
			yCurrent += addYNext;
		});
	}
};

// CUSTOMIZE GESTURES

// SHAKA
export const shakaLHGesture = new GestureDescription("shakaLH");

shakaLHGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
shakaLHGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
shakaLHGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
shakaLHGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
shakaLHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);

shakaLHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
shakaLHGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
shakaLHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
shakaLHGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
shakaLHGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);

export const shakaRHGesture = new GestureDescription("shakaRH");

shakaRHGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
shakaRHGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
shakaRHGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
shakaRHGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
shakaRHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);

shakaRHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
shakaRHGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
shakaRHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
shakaRHGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
shakaRHGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);

// SPOCK
export const spockLHGesture = new GestureDescription("spockLH");

spockLHGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
spockLHGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
spockLHGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
spockLHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

spockLHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
spockLHGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
spockLHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

spockLHGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
spockLHGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

export const spockRHGesture = new GestureDescription("spockRH");

spockRHGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
spockRHGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
spockRHGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
spockRHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

spockRHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
spockRHGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
spockRHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

spockRHGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
spockRHGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

// EVIL
export const evilLHGesture = new GestureDescription("evilLH");

evilLHGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
evilLHGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
evilLHGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
evilLHGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
evilLHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

evilLHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
evilLHGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
evilLHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
evilLHGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
evilLHGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);

export const evilRHGesture = new GestureDescription("evilRH");

evilRHGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
evilRHGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
evilRHGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
evilRHGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
evilRHGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

evilRHGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
evilRHGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
evilRHGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
evilRHGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
evilRHGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.8);
