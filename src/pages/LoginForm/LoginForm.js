import Card from "../../ui/Card/Card";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";

const LoginForm = () => {
  return (
    <Card>
      <Heading>Login form</Heading>
      <form>
        <Input placeholder="User Name" type="text" />
        <Input placeholder="Password" type="text" />
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
