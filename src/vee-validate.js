import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This field must be a valid email"
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match"
});

extend("length", {
  ...length,
  message: "This field must have 2 options"
});

extend("numUser", value => {
  if (value.length < 3 || value.length > 30){
    return 'Your password should be 3-30 characters long.';
  }
  else {
    return true
  }
});

extend("numPass", value => {
  if (value.length < 5 || value.length > 30){
    return 'Your password should be 5-30 characters long.';
  }
  else {
    return true
  }
});