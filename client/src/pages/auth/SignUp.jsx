import { useState } from "react";
import { Button, Form } from "react-bootstrap";
// <<<<<<< HEAD
// import axios from "axios";

// const SignUp = () => {
//   const baseURL = "http://localhost:3000/user";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false);
  // const baseURL = "http://localhost:3000/user";
// >>>>>>> 27f5e2d41048da6f8f6d1aff21420a5dde1d57b2
  const [user, setUser] = useState({
    enrollnum: "",
    userEmail: "",
    password: "",
  });
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlePasswordsNotMatching = () => {
    setPasswordsNotMatching(true);
  };
  const handleUsernameAlreadyExists = () => {
    setUsernameAlreadyExists(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
// <<<<<<< HEAD
//     if (user.password !== cPassword)
//       setError("the password and confirm password should be same");
//     else {
//         axios
//         .post(`${baseURL}/signUp`, user)
//         .then((res) => {
//           if (res.data.message === "User Signed Up") {
//             window.location.href = "/login";
//           } else {
//             setError(res.data.message);
//           }
//         })
//         .catch((err) => console.log(err));
// =======
    console.log(user);
    setPasswordsNotMatching(false);
    setUsernameAlreadyExists(false);
    if (user.password != cPassword) {
      handlePasswordsNotMatching();
    } else {
      dispatch(signup(user, history));
      dispatch(signup(user, history, handleUsernameAlreadyExists));
//>>>>>>> 27f5e2d41048da6f8f6d1aff21420a5dde1d57b2
    }
  };
  return (
    <Form className="Form" onSubmit={handleSubmit} method="POST">
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
          name="userEmail"
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
      <Button type="submit" variant="primary" className="submitButton">
        continue
      </Button>
    </Form>
  );
};

export default SignUp;
