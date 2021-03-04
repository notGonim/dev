import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup,";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Switch >
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
