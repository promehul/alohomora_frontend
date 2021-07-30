import React from "react";
import {Label, Input} from "semantic-ui-react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <Input className="form-control" {...input} type={type} placeholder={label}></Input>    
    {touched && error && (
      <Label pointing color="red" basic>{error}</Label>
    )}
  </div>
);

export const renderTextAreaField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea className="form-control" {...input} type={type} />
    </div>
    {touched && error && (
      <Label pointing color="red" basic>{error}</Label>
    )}
  </div>
);

export const renderError = (errorMessages) => {
  if (errorMessages) {
    return <Label pointing color="red" basic>{errorMessages}</Label>;
  }
};
