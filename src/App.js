import { useContext } from "react";

import ContactUs from "./pages/ContactUs/ContactUs";
import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router";
import LoginForm from "./pages/LoginForm/LoginForm";
import Quiz from "./pages/Quiz/Quiz";
import Table from "./pages/Table/Table";
// import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Game from "./pages/Tic-tac-toe/Game";
import AuthContext from "./Store/context/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <LoginForm />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Switch>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            {/* <Route path="/leaderboard">
              <Leaderboard />
            </Route> */}
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/game">
            <Game />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
