import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import Heading from "../../ui/Heading/Heading";
import Input from "../../ui/Input/Input";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <Card>
      <Heading>
        Sign Up form
        <span className={styles.span}>
          Please fill this form to create an account!
        </span>
      </Heading>
      <div className={styles.nameContainer}>
        <Input className={styles.input} placeholder="First Name" type="text" />
        <Input className={styles.input} placeholder="Last Name" type="text" />
      </div>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="text" />
      <Input placeholder="Confirm Password" type="text" />
      <div>
        <Button>Sign Up</Button>
      </div>
    </Card>
  );
};

export default SignupForm;
