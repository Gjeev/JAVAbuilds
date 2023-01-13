import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("")
    const handleChangeUserName=(event)=>{
        setUserName(event.target.value);
    }
    const handleChangePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userName);
        console.log(password);
    };
    return ( 
    <Form className='Form' onSubmit={handleSubmit}>
      <Form.Group className="formField" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={handleChangeUserName}/>
      </Form.Group>
      <Form.Group className="formField" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handleChangePassword}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='submitButton'>
        Submit
      </Button>
      <a href=""className='signUp'>Not a user? sign up</a>
    </Form>
     );
}
 
export default Login;