import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [user, setUser] = useState({
        enrollnum : "",
        password : "",
    });
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user.enrollnum, user.password);
    };
    return ( 
    <Form className='Form' onSubmit={handleFormSubmit}>
      <Form.Group className="formField" controlId="formBasicEmail">
        <Form.Label>Enrollment Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Enrollment Number" name="enrollnum" onChange={(e) => onInputChange(e)}/>
      </Form.Group>
      <Form.Group className="formField" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onInputChange(e)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='submitButton' href="/">
        Proceed to login
      </Button>
      <a href="/signUp" className='signUp'>Not a user? sign up</a>
    </Form>
     );
}
 
export default Login;