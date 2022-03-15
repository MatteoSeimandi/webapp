// Bottoni
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";

import { useAudio } from "../utils/useAudio";
import rainSound from "../assets/sounds/Rain-sound.mp3";
import penPlay from "../assets/img/penPlay.png";
import penOptions from "../assets/img/penOptions.png";
import penLogin from "../assets/img/penLogin.png";
import penPlayWhite from "../assets/img/penPlayWhite.png";
import penOptionsWhite from "../assets/img/penOptionsWhite.png";
import penLoginWhite from "../assets/img/penLoginWhite.png";

export const BtnPlay = () => {
	const [state, setState] = useState(false);	// stato per la transizione

	const enter = () => setState(true);
	const leave = () => setState(false);

	return(
		<Image
			src={state ? penPlayWhite: penPlay}
			onMouseEnter={enter}
			onMouseLeave={leave}
			height={175}
			width={325}
			onClick={() => alert('Il gioco inizierà da qui')}
			fluid
		/>
	)
}

export const BtnOptions = () => {
	const [state, setState] = useState(false);

	const enter = () => setState(true);
	const leave = () => setState(false);

	return(
		<Image
			src={state ? penOptionsWhite : penOptions}
			onMouseEnter={enter}
			onMouseLeave={leave}
			height={175}
			width={325}
			onClick={() => alert('Opzioni')}
			fluid
		/>
	)
}

export const BtnLogin = () => {
	const [state, setState] = useState(false);

	const enter = () => setState(true);
	const leave = () => setState(false);


	return(
		<Image
			src={state ? penLoginWhite : penLogin}
			onMouseEnter={enter}
			onMouseLeave={leave}
			height={175}
			width={325}
			onClick={() => alert('Login')}
			fluid
		/>
	)
}

export const BtnMusic = () => {
	const [playing, toggle] = useAudio(rainSound);


	return(
		<Button variant="secondary" onClick={toggle}>
			{ playing ? <BiMicrophone size={55} /> : <BiMicrophoneOff size={55} />}
		</Button>
	)
}