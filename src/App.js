import ContactUs from "./pages/ContactUs/ContactUs";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router";
import LoginForm from "./pages/LoginForm/LoginForm";
import SignupForm from "./pages/signup/SignupForm";
import Quiz from "./pages/Quiz/Quiz";
import Table from "./pages/Table/Table";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/signup-form">
          <SignupForm />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
