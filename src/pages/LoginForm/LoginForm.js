import { useState, useContext, useRef } from "react";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Card from "../../ui/Card/Card";
import styles from "./LoginForm.module.css";
import LoginSvg from "../../Store/SVG/loginSvg.svg";
import SvgImage from "../../ui/SvgImage/SvgImage";
import AuthContext from "../../Store/context/auth-context";
import { useHistory } from "react-router";

const LoginForm = () => {
  const [passwordError, setPasswordError] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [signUpForm, setSignUpForm] = useState(true);

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    if (signUpForm) {
      let firstName = firstNameRef.current.value;
      let lastName = lastNameRef.current.value;
      let confirmPassword = confirmPasswordRef.current.value;

      if (password !== confirmPassword) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDh3Z87p8nZV61b8kW-LQfJxtwK2uXqZO0",
          {
            method: "POST",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
              firstName,
              lastName,
              confirmPassword,
              returnSecureToken: true,
            }),
          }
        );
        // .then((res) => {
        //   if (res.ok) {
        //     // ...
        //   } else {
        //     return res.json().then((data) => {
        //       // show an error modal
        //       let errorMessage = "Authentication failed!";
        //       if (data && data.error && data.error.message) {
        //         errorMessage = data.error.message;
        //       }
        //       alert(errorMessage);
        //     });
        //   }
        // });

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
      }
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDh3Z87p8nZV61b8kW-LQfJxtwK2uXqZO0",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              // show an error modal
              let errorMessage = "Authentication failed!";
              // if (data && data.error && data.error.message) {
              //   errorMessage = data.error.message;
              // }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          // console.log(data);
          authCtx.login(data.idToken);
          history.replace("/quiz");
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    // console.log(`User Name ${userNameInput} Password ${passowordInput}`);
  };

  let formHeading = !signUpForm ? "Login Form" : "Sing Up Form";
  let formButton = !signUpForm
    ? "Create a new account"
    : "Login with existing account";

  return (
    <>
      {/* <Heading>Login form</Heading> */}
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <SvgImage src={LoginSvg} alt="login_image" />
        </div>
        <div className={styles.flexChild}>
          <Card>
            <form onSubmit={submitHandler}>
              <Heading>{formHeading}</Heading>

              {signUpForm && (
                <div className={styles.nameContainer}>
                  <Input
                    className={styles.input}
                    placeholder="First Name"
                    type="text"
                    innerRef={firstNameRef}
                  />
                  <Input
                    className={styles.input}
                    placeholder="Last Name"
                    type="text"
                    innerRef={lastNameRef}
                  />
                </div>
              )}
              <Input placeholder="Email" type="email" innerRef={emailRef} />
              <Input
                placeholder="Password"
                type="text"
                innerRef={passwordRef}
              />
              {signUpForm && (
                <>
                  <Input
                    placeholder="Confirm Password"
                    type="text"
                    innerRef={confirmPasswordRef}
                  />
                  {passwordError && <p>Confirm Password does not match</p>}
                </>
              )}
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </form>
            <Button onClick={() => setSignUpForm((prevState) => !prevState)}>
              {formButton}
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
