import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Signup.css"
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators";
import { renderField } from "../../utils/renderUtils";
import { signupUser } from "../../actions/authActions";
import { Button } from "semantic-ui-react";

class Signup extends Component {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit, error } = this.props;
    console.log(error)
      return (
      <div className="row justify-content-center mx-auto">
        <form className="col col-sm-4 card mt-5 p-2" onSubmit={handleSubmit}>
          <h4 className="text-md-center">Sign Up</h4>
          <hr />

          <fieldset className="form-group">
            <Field
              name="email"
              label="Email"
              component={renderField}
              type="text"
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="username"
              label="Username"
              component={renderField}
              type="text"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password1"
              label="Password"
              component={renderField}
              type="password"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password2"
              label="Confirm Password"
              component={renderField}
              type="password"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          {/* { renderError(error) } */}

          <fieldset className="form-group">
            <Button primary action="submit">
              Sign Up
            </Button>
          </fieldset>
        </form>
      </div>
    );
  }
}

// Sync field level validation for password match
const validateForm = (values) => {
  const errors = {};
  const { password1, password2 } = values;
  if (password1 !== password2) {
    errors.password2 = "Password does not match.";
  }
  return errors;
};

export default reduxForm({
  form: "signup",
  validate: validateForm,
  onSubmit: signupUser,
})(Signup);
