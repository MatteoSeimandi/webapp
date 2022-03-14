import { Col, Container, Row } from "react-bootstrap";

import SplashScreen from "./components/SplashScreen";
import Title from "./components/Title";
import { BtnPlay, BtnOptions, BtnLogin, BtnMusic} from "./components/Buttons";

import './style/App.css';

const App = () => {


	return (
		<>
			<Container fluid>
				<Row className='w-100 mt-5 position-absolute top-0 start-50 translate-middle-x'>
					<Title />
				</Row>
				<Row className="p-3 w-75 position-absolute top-50 start-50 translate-middle">
					<Col className="d-flex justify-content-start" xxl={4}>
						<BtnOptions />
					</Col>
					<Col className="d-flex justify-content-center" xxl={4}>
						<BtnPlay />
					</Col>
					<Col className="d-flex justify-content-end" xxl={4}>
						<BtnLogin />
					</Col>
				</Row>
				<Row className="mb-5 w-100 position-absolute bottom-0 start-50 translate-middle-x ">
					<Col className="mt-5">
						<p className="text-center text-white fs-1 txt-pixel">
							The Lost Key Team
						</p>
					</Col>
					<Col className="mt-5" >
						<p className="text-center text-white fs-1 txt-pixel">
							Pre-Alpha 0.1.0
						</p>
					</Col>
				</Row>
				<Row className="mb-3 position-absolute bottom-0 start-50 translate-middle">
					<Col>
						<BtnMusic />
					</Col>
				</Row>
			</Container>
			<SplashScreen />
		</>
	);
}

export default App;