import { Row, Container, Col, Form } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Input from './inputs/Input';
import Submit from './inputs/Submit';
import { Link } from 'react-router-dom';
import '../App.scss';
import { useState } from 'react';


const Register = () => {
    const [mode, setMode] = useState(false);

    function setDark() {
        setMode(!mode);
    }
    return (<>
        <div className="App" style={{ backgroundColor: mode ? "#fff" : "#1a1a1a" }}>
            <Container id="RegisterForm">
                <Row>
                    <Col xl={4} lg={6} md={7} sm={12} className="mx-auto">
                        <div className="loginForm">
                            <div class="outBox" style={{ backgroundColor: mode ? "#fff" : "#1a1a1a" }}>
                            <Row className="d-flex justify-content-start">
                                        <Col xl={2} lg={2} md={2} sm={2} className="my-4">
                                            <BootstrapSwitchButton checked={true} onChange={setDark} onstyle="secondary"
                                                onlabel=" " offlabel=" " height="2em"/>
                                        </Col>
                                    </Row>
                                <div className="formBox" style={{ backgroundColor: mode ? "#fff" : "#1a1a1a" }}>
                                    <form name="login">
                                        <div className="title">
                                            <h5 className="text-center">ثبت نام</h5>
                                        </div>
                                        <Row>
                                            <Input label="نام" type="text" inputName="name" color={mode ? "#6b6b6b" : "#a8a8a8"}/>
                                            <Input label="نام خانوادگی" type="text" inputName="lastName" color={mode ? "#6b6b6b" : "#a8a8a8"}/>
                                            <Input label="نام کاربری" type="text" inputName="username" color={mode ? "#6b6b6b" : "#a8a8a8"}/>
                                            <Input label="گذرواژه" type="password" inputName="password" color={mode ? "#6b6b6b" : "#a8a8a8"}/>
                                            <Col xl={10} lg={10} md={12} sm={12} className="mx-auto p-0">
                                                <Form.Check
                                                    label="قوانین سایت را می پذیرم"
                                                    className="mt-3"
                                                    style={{color : mode ? "#6b6b6b" : "#a8a8a8"}}
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