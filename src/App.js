import { Col, Container, Row } from "react-bootstrap";

import SplashScreen from "./components/SplashScreen";
import Title from "./components/Title";
import { BtnPlay, BtnOptions, BtnLogin, BtnQuit, BtnMusic} from "./components/Buttons";

import './style/App.css';

const App = () => {


	return (
		<>
			<SplashScreen />
			<Container fluid>
				<Row className='p-3 mb-3 mt-3'>
					<Title />
				</Row>
				<Row className="p-3 ms-5 mb-5" xxl={3} xl={3} lg={2}>
					<Col>

					</Col>
						<Col>
						<Row className="my-5">
							<BtnPlay />
						</Row>
						<Row className="my-5">
							<BtnOptions />
						</Row>
						<Row className="my-5">
							<Col className="p-0 me-1">
								<BtnLogin />
							</Col>
							<Col className="p-0 ms-1">
								<BtnQuit />
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className="mt-5">
						<p className="text-center text-white fs-1 txt-pixel">
							The Lost Key Team
						</p>
					</Col>
					<Col className="mt-5">
						<p className="text-center text-white fs-1 txt-pixel">
							Pre-Alpha 0.1.0
						</p>
					</Col>
				</Row>
				<Row className="position-absolute top-75">
					<Col>
						<BtnMusic />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;