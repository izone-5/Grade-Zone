import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import "../../mockApi/api";
import { getProfileData } from "../../redux/authSlice";
import banner from "../../assets/user.png";
import { Link } from "react-router-dom";
import { signupSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  occupation: "",
  gender: "",
  password: "",
  cpassword: "",
};
export const Signup = () => {
  const onSubmit = async (values, actions) => {
    const { data } = await axios.post("/signup", values);
    actions.resetForm();
    console.log(values);
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="outer banner">
          <div>
            <img src={banner} />
            <p>
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </div>
        </div>

        <div className="outer form">
          <div className="inner">
            <div className="create-account">
              <h3>Create account</h3>
              <p className="detail">Enter your details below</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={signupSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <ul>
                    <li>
                      <div>
                        <Field
                          autoComplete="off"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                        {errors.name && touched.name && (
                          <p className="form_error">{errors.name}</p>
                        )}
                      </div>
                    </li>
                    <li>
                      <div>
                        <Field
                          autoComplete="off"
                          type="text"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <p className="form_error">{errors.email}</p>
                        )}
                      </div>
                    </li>
                    <li>
                      <div>
                        <Field as="select" name="occupation">
                          <option value=''>--Occupation--</option>
                          <option value="worker">Worker</option>
                          <option value="professional">Professional</option>
                        </Field>
                        {errors.occupation && touched.occupation && (
                          <p className="form_error">{errors.occupation}</p>
                        )}
                      </div>

                      <div>
                        <Field as="select" name="gender">
                          <option value=''>--Gender--</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Field>
                        {errors.gender && touched.gender && (
                          <p className="form_error">{errors.gender}</p>
                        )}
                      </div>
                    </li>
                    <li>
                      <div>
                        <Field
                          autoComplete="off"
                          type="text"
                          name="password"
                          placeholder="Password"
                        />
                        {errors.password && touched.password && (
                          <p className="form_error">{errors.password}</p>
                        )}
                      </div>

                      <div>
                        <Field
                          autoComplete="off"
                          type="text"
                          name="cpassword"
                          placeholder="Confirm Password"
                        />
                        {errors.cpassword && touched.cpassword && (
                          <p className="form_error">{errors.cpassword}</p>
                        )}
                      </div>
                    </li>
                  </ul>
                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
