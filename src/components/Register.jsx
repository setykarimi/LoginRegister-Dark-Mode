import { Row, Container, Col, Form } from 'react-bootstrap'
import Input from './inputs/Input';
import Submit from './inputs/Submit';
import { Link } from 'react-router-dom';
import '../App.scss';

const Register = () => {
    return (<>
        <div className="App">
            <Container id="RegisterForm">
                <Row>
                    <Col xl={4} lg={6} md={7} sm={12} className="mx-auto">
                        <div className="loginForm">
                            <div class="outBox">
                                <div className="formBox">
                                    <form name="login">
                                        <div className="title">
                                            <h5 className="text-center">ثبت نام</h5>
                                        </div>
                                        <Row>
                                            <Input label="نام" type="text" inputName="name" />
                                            <Input label="نام خانوادگی" type="text" inputName="lastName" />
                                            <Input label="نام کاربری" type="text" inputName="username" />
                                            <Input label="گذرواژه" type="password" inputName="password" />
                                            <Col xl={10} lg={10} md={12} sm={12} className="mx-auto p-0">
                                                <Form.Check
                                                    label="قوانین سایت را می پذیرم"
                                                    className="mt-3"
                                                />
                                            </Col>
                                            <Col xl={12} lg={12} md={12} sm={12} className="mt-5 text-center">
                                                <Link to='/'>ورود به حساب کاربری</Link>
                                            </Col>
                                            <Submit value="ثبت نام" />
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>)
}

export default Register