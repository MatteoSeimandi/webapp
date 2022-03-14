// Bottoni

import { Button } from "react-bootstrap";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";

import { useAudio } from "../utils/useAudio";
import rainSound from "../assets/sounds/Rain-sound.mp3";

export const BtnPlay = () => {

	return(
		<Button variant="outline-dark" className="pt-2">
			<p className="fs-1 fw-bold mb-2 txt-pixel">
				Play
			</p>
		</Button>
	)
}

export const BtnOptions = () => {

	return(
		<Button variant="outline-dark" className="pt-2">
			<p className="fs-1 fw-bold mb-2 txt-pixel">
				Options
			</p>
		</Button>
	)
}

export const BtnLogin = () => {

	return(
		<Button variant="outline-success" className="px-1 pt-2 w-100">
			<p className="fs-1 fw-bold mb-2 txt-pixel">
				Login
			</p>
		</Button>
	)
}

export const BtnQuit = () => {

	return(
		<Button onClick={() => window.close()}  variant="outline-danger" className="pt-2 w-100">
			<p className="fs-1 fw-bold mb-2 txt-pixel">
				Quit
			</p>
		</Button>
	)
}

export const BtnMusic = () => {
	const [playing, toggle] = useAudio(rainSound);

	return(
		<Button variant="secondary" onClick={toggle}>
			{playing ? <BiMicrophone /> : <BiMicrophoneOff />}
		</Button>
	)
}