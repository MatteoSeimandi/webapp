import { Col, Container, Row, Button} from "react-bootstrap";
import { BsPlayFill, BsPersonPlusFill, BsFillGearFill, BsXLg } from "react-icons/bs";
import './style/App.css';

const App = () => {

	return (
		<Container fluid>
			<Row className='p-3 mb-3'>
				<p className='text-black display-1 fw-bold text-center txt-pixel'>
					The Lost Keys
				</p>
			</Row>
			<Row className="p-3 ms-5 mb-5" xxl={3} xl={3} lg={2}>
				<Col>
					<Row className="my-5">
						<Button variant="outline-dark" className="pt-2">
							<p className="fs-1 fw-bold mb-2 txt-pixel">
								<BsPlayFill size={60} /> Play
							</p>
						</Button>
					</Row>
					<Row className="my-5">
						<Button variant="outline-dark" className="pt-2">
							<p className="fs-1 fw-bold mb-2 txt-pixel">
								<BsFillGearFill size={45} /> Options
							</p>
						</Button>
					</Row>
					<Row className="my-5">
						<Col className="p-0 me-1">
							<Button variant="outline-success" className="px-1 pt-2 w-100">
								<p className="fs-1 fw-bold mb-2 txt-pixel">
									<BsPersonPlusFill size={45} /> Login
								</p>
							</Button>
						</Col>
						<Col className="p-0 ms-1">
							<Button variant="outline-danger" className="pt-2 w-100">
								<p className="fs-1 fw-bold mb-2 txt-pixel">
									<BsXLg size={30} /> Quit
								</p>
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col className="mt-5">
					<p className="text-center text-body fs-1 txt-pixel">
						The Lost Key Team
					</p>
				</Col>
				<Col className="mt-5">
					<p className="text-center text-body fs-1 txt-pixel">
						Pre-Alpha 0.1.0
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
