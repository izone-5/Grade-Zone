import * as Yup from 'yup';

const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const notEmpty = new RegExp(
    "^.+$"
)

export const signupSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Please Enter your name"),
    email: Yup.string().email("Please enter valid email").required("Please enter your email."),
    occupation: Yup.string().matches(notEmpty, "Select an option").required('Select an option'),
    gender: Yup.string().matches(notEmpty, "Select an option").required('Select an option'),
    password: Yup.string().matches(passwordRegex, "Please Enter Valid Password").required("Please Enter your Password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")], "Password do Not match").required("Please Enter Confirm Password"),
})