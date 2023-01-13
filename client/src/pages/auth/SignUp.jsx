import { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

const SignUp = () => {
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cPassword,setCPassword]=useState("");
    const [error,setError]=useState("");
    const handleChangeUserName=(event)=>{
        setUserName(event.target.value);
    }
    const handleChangePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleChangeEmail=(event)=>{
        setEmail(event.target.value);
    }
    const handleChangeCPassword=(event)=>{
        setCPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password!==cPassword)setError("the password and confirm password should be same");
        else{
            console.log(userName);
            console.log(email);
            console.log(password);
            console.log(cPassword);
        }
    };
    return ( 
        <Form className="Form" onSubmit={handleSubmit}>
            <Form.Group className="formField">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={handleChangeUserName}></Form.Control>
            </Form.Group>
            <Form.Group className="formField">
                <Form.Label>Email id:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={handleChangeEmail}/>
            </Form.Group>
            <Form.Group className="formField">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handleChangePassword}></Form.Control>
            </Form.Group>
            <Form.Group className="formField">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Confirm Password" value={cPassword} onChange={handleChangeCPassword}/>
                <Form.Text className="errorMessage">{error}</Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary" className="submitButton">
                Submit
            </Button>
        </Form>
     );
}
 
export default SignUp;