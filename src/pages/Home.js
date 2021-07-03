// import Styles
import { Container, Row, Col, Button } from "react-bootstrap";
import '../css/Home.css';

// import Components
import Tools from "../components/Tools";
import DropBox from '../components/Dropbox'

const Home = () => {
    return ( 
        <div className='home-page'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <DropBox></DropBox>
                    </Col>
                    <Col lg={3}>
                        <Tools></Tools>
                    </Col>
                </Row>
            </Container>

            <Button variant='dark'>Render</Button>
        </div>
     );
}
 
export default Home;