// import Styles
import '../css/Render.css'
import { Container } from 'react-bootstrap';

const Render = (props) => {
    return ( 
        <Container className='render-form'>
            <form action="submit">
                {props.form}
            </form>
        </Container>
     );
}
 
export default Render;