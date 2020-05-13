import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }
    try {
      // the below method returs userAuth object with the name of user.
      // const {user}=await auth.createUserWithEmailAndPassword(email,password);
      // await createUserProfileDocument(user,{displayName});
      // to make fileds blank
      await signUpStart({ email, password, displayName });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emailPasswordAndName) =>
    dispatch(signUpStart(emailPasswordAndName)),
});
export default connect(null, mapDispatchToProps)(SignUp);
