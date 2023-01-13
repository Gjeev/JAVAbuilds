import { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

const SignUp = () => {
  const [user, setUser] = useState({
    enrollnum: "",
    email: "",
    password: "",
  });
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== cPassword)
      setError("the password and confirm password should be same");
    else {
      console.log(user);
    }
  };
  return (
    <Form className="Form" onSubmit={handleSubmit}>
      <Form.Group className="formField">
        <Form.Label>Enter Enrollment Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Enrollment Number"
          name="enrollnum"
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="formField">
        <Form.Label>Email id:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="formField">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="formField">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Confirm Password"
          onChange={(event) => setCPassword(event.target.value)}
        />
        <Form.Text className="errorMessage">{error}</Form.Text>
      </Form.Group>
      <Button type="submit" variant="primary" className="submitButton" href="/login">
        onto login page
      </Button>
    </Form>
  );
};

export default SignUp;
