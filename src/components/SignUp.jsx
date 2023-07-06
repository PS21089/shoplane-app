import { useFormik } from "formik";
import { FaRegAddressCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SignUp() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const navigate = useNavigate();

  const signupSchema = Yup.object({
    firstname: Yup.string()
      .required("First name cannot be empty")
      .min(3, "Minimum 3 characters required")
      .max(15, "First name cannot be more than 15 characters long"),
  
    lastname: Yup.string()
      .required("Last name cannot be empty")
      .min(3, "Minimum 3 characters required")
      .max(15, "Last name cannot be more than 15 characters long"),
  
    email: Yup.string().email().required("Please enter your email"),
  
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Minimum 6 characters required")
      .max(15, "Password cannot be more than 15 characters long"),
  
    confirm_password: Yup.string()
      .required("Please re-enter your password")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        alert("SignUp Successful");
        navigate("/");
      },
    });

  return (
    <>
      <div className="formDivContainer">
        <div className="card formContainer">
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <h2>Sign Up</h2>
              <div className="form-input">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  values={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname ? (
                  <p style={{ color: "red" }}>{errors.firstname}</p>
                ) : null}
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  values={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <p style={{ color: "red" }}>{errors.lastname}</p>
                ) : null}
              </div>
              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  values={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p style={{ color: "red" }}>{errors.confirm_password}</p>
                ) : null}
              </div>
              <div>
                <button type="submit" className="btn blueBtn signupPageBtn">
                  <FaRegAddressCard size={"18px"} />
                  Sign Up
                </button>
              </div>
              <p>
                Already have an account? Login <Link to={"/login"}>here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
