import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup,";
import { auth } from "./firebase";
import { Dashboard } from "./pages/Dashboard";
import { Main } from "./pages/Main";
import { LogInAction, LogOutAction } from "./reducers/user/userAction";

function App() {

  const { ...user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [logged,setLogged]=useState(false)
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(LogInAction({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
        setLogged(true)

      } else {
        dispatch(LogOutAction())
        setLogged(false)

      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!logged ?
        <>
          <Switch >
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </>
        :
        <>
          <Route path="/" exact component={Dashboard} />
        </>
      }
    </BrowserRouter>
  );
}

export default App;
