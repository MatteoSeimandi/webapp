// Bottoni

import { Button, Image } from "react-bootstrap";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";

import { useAudio } from "../utils/useAudio";
import rainSound from "../assets/sounds/Rain-sound.mp3";
import penPlay from "../assets/img/penPlay.png";
import penOptions from "../assets/img/penOptions.png";
import penLogin from "../assets/img/penLogin.png";

export const BtnPlay = () => {

	return(
		<Image
			src={penPlay}
			height={175}
			width={325}
			onClick={() => alert('Il gioco inizierà da qui')}
			fluid
		/>
	)
}

export const BtnOptions = () => {

	return(
		<Image
			src={penOptions}
			height={175}
			width={325}
			onClick={() => alert('Opzioni')}
			fluid
		/>
	)
}

export const BtnLogin = () => {

	return(
		<Image
			src={penLogin}
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
			{playing ? <BiMicrophone size={55} /> : <BiMicrophoneOff size={55} />}
		</Button>
	)
}