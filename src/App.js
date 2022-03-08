import { Col, Container, Row, Button} from "react-bootstrap";
import { BsPlayFill, BsPersonPlusFill, BsFillGearFill, BsXLg } from "react-icons/bs";
import './App.css';


function App() {

	return (
		<Container fluid>
			<Row className='p-3 mb-3'>
				<p className='text-body display-1 fw-bold text-center'>
					The Lost Keys
				</p>
			</Row>
			<Row className="p-3 ms-5" xxl={4}>
				<Col>
					<Row className="my-5">
						<Button variant="outline-secondary" className="p-0">
							<p className="fs-1 fw-bold mb-2">
								<BsPlayFill size={60} /> Play
							</p>
						</Button>
					</Row>
					<Row className="my-5">
						<Button variant="outline-secondary" className="p-0">
							<p className="fs-1 fw-bold mb-2">
								<BsFillGearFill size={45} /> Options
							</p>
						</Button>
					</Row>
					<Row className="my-5">
						<Col className="p-0 me-1">
							<Button variant="outline-success" className="p-0 w-100">
								<p className="fs-1 fw-bold mb-2">
									<BsPersonPlusFill size={45} /> login
								</p>
							</Button>
						</Col>
						<Col className="p-0 ms-1">
							<Button variant="outline-danger" className="p-0 w-100">
								<p className="fs-1 fw-bold mb-2">
									<BsXLg size={30} /> Quit
								</p>
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
