import React, { Component } from "react";
// import PropTypes from "prop-types";
import { reduxForm, Field, propTypes } from "redux-form";
import { Link } from "react-router-dom";
import { required } from "redux-form-validators";

import { renderField, renderError } from "../../utils/renderUtils";
import { loginUser } from "../../actions/authActions";
import { Button } from "semantic-ui-react";
class Login extends Component {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <div className="row justify-content-center mx-auto">
        <form className="col col-sm-4 card mt-5 p-2" onSubmit={handleSubmit}>
          <h4 className="text-md-center">Please Log In</h4>
          

          <fieldset className="form-group">
            <Field
              name="email"
              label="Email"
              component={renderField}
              type="text"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password"
              label="Password"
              component={renderField}
              type="password"
              validate={[required({ message: "This field is required." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            {renderError(error)}

            <Button primary action="submit">
              Login
            </Button>
          </fieldset>

          <p>
            Not registered? <Link to="/signup">Signup Here!</Link>
          </p>
          <Link to="/reset_password">Forgot password?</Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmit: loginUser,
})(Login);
