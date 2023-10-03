import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Login.css' ;

const Login = () => {
    return (
        // <Form>
        //     <FormGroup>
        //         <Label
        //             for="exampleEmail"
        //             hidden
        //         >
        //             Email
        //         </Label>
        //         <Input
        //             id="exampleEmail"
        //             name="email"
        //             placeholder="Email"
        //             type="email"
        //         />
        //     </FormGroup>
        //     {' '}
        //     <FormGroup>
        //         <Label
        //             for="examplePassword"
        //             hidden
        //         >
        //             Password
        //         </Label>
        //         <Input
        //             id="examplePassword"
        //             name="password"
        //             placeholder="Password"
        //             type="password"
        //         />
        //     </FormGroup>
        //     {' '}
        //     <Button>
        //         Submit
        //     </Button>
        // </Form>
        <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="email-ID"/>
          <input type="password" placeholder="password"/>
          <button><a href="About.js"> login</a></button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
    )
}

export default Login;