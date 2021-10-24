import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Input = (props) => {
    return (<>
        <Col xl={12} lg={12} md={12} sm={12} className="mt-4">
            <Row className="d-flex justify-content-center">
                <Col xl={10} lg={10} md={10} sm={12} className="p-0">
                    <label for="input" style={{color: props.color}}>{props.label}</label>
                </Col>
                <Col xl={10} lg={10} md={10} sm={12}
                    className="p-0 mt-2">
                    <input class="w-100" name={props.inputName} type={props.type}
                        placeholder={props.placeholder} />
                </Col>
            </Row>
        </Col>
    </>)
}

export default Input;