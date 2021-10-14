import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input';
import '../App.scss';

const Register = () =>{
return (<>
    <Input label="نام" type="text" inputName="name" placeholder="Setayesh" />
    <Input label="نام خانوادگی" type="text" inputName="lastName" placeholder="Karimi" /> 
</>)
}

export default Register