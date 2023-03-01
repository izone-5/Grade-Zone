import * as Yup from 'yup';

const signupSchema = Yup.object({
    name: Yup.string().min(3).required(),
    email: Yup.string().email("Please enter valid email").required("Please enter your email."),
    password: Yup.string().matches
})