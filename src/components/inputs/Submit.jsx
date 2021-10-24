import Col from 'react-bootstrap/Col'
import Input from './Input';

const Submit = (props) => {
    return (<>
        <Col xl={3} lg={3} md={4} sm={3} className="mt-4">
           <input type="submit" value={props.value} />
        </Col>
    </>)
}

export default Submit;