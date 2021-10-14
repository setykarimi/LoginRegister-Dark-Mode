import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input';
import Register from './Register';
import '../App.scss';

const Form = (props) => {
    return (
        <>
            <div className="App">
                <Container id="loginForm">
                    <Row>
                        <Col xl={4} lg={6} md={7} sm={12} className="mx-auto">
                            <div className="loginForm">
                                <div class="outBox">
                                    <div className="formBox">
                                        <form name="login">
                                            <div className="title">
                                                <h5 className="text-center">{props.title ? "ورود" : "ثبت نام"}</h5>
                                            </div>
                                            <Row>
                                            {!props.isLoginForm && <Register />}
                                                <Input label="نام کاربری" type="text" inputName="username" placeholder="SetayeshKarimi" />
                                                <Input label="گذرواژه" type="password" inputName="password" />
                                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-3 mt-4">
                                                    <input type="submit" value={props.isLogin ? "ورود" : "ثبت نام"} />
                                                </div>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Form;
