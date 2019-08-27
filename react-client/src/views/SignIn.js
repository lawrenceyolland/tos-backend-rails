import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputchange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleSubmit = () => this.props.submitSignIn(this.state);

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: "100vw" }}>
          <Header as="h2" color="purple" textAlign="center">
            Sign in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="enter your username ..."
                name="username"
                onChange={this.handleInputchange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="enter your password ..."
                type="password"
                name="password"
                onChange={this.handleInputchange}
              />
              <Button color="purple" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Not already a member?{" "}
            <Link className="link-to-button" to="/signup">
              Sign Up
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignIn;
