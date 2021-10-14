import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.scss';

const Input = (props) => {
    return (<>
        <Col xl={12} lg={12} md={12} sm={12} className="mt-3">
            <Row className="d-flex justify-content-center">
                <Col xl={9} lg={9} md={10} sm={12} className="p-0">
                    <label for="input">{props.label}</label>
                </Col>
                <Col xl={9} lg={9} md={10} sm={12}
                    className="p-0 mt-2">
                    <input class="w-100" name={props.inputName} type={props.type}
                        placeholder={props.placeholder} />
                </Col>
            </Row>
        </Col>
    </>)
}

export default Input;