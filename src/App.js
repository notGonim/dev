import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup,";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
