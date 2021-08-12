import * as yup from "yup";

const TODO_SCHEMA = yup.object().shape({
  body: yup
    .string()
    .matches(
      /^(?=.*[A-z].*).{1,200}$/,
      "The task must contain at least 1 letter."
    )
    .min(1)
    .max(200)
    .required(),
});
export default TODO_SCHEMA;
