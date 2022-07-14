import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import history from "./../history";
import theme from "./ui/Theme";
import Dashboard from "./Dashboard/Dashboard";
import Preferences from "./Preferences/Preferences";
import useToken from "../custom-hooks/useToken";
import useUserId from "../custom-hooks/useUserId";
import UserLogin from "./users/UserLogin";
import Header from "./ui/Header";
import IndexDashboard from "./IndexDashboard";
import Marketplace from "./../components/Marketplace";
import OrderLayout from "./OrderLayout";
import PaymentLayout from "./PaymentLayout";
import ProfileLayout from "./ProfileLayout";

function App() {
  const { token, setToken } = useToken();
  const { userId, setUserId } = useUserId();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  console.log("app js token value:", token);
  console.log("app js user id value:", userId);

  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            token={token}
            userId={userId}
            setToken={setToken ? setToken : {}}
            setUserId={setUserId ? setUserId : {}}
          />

          <Switch>
            <Route exact path="/">
              <Marketplace
                token={token}
                userId={userId}
                setToken={setToken ? setToken : {}}
                setUserId={setUserId ? setUserId : {}}
              />
            </Route>
            <Route path="/orders">
              <OrderLayout token={token} />
            </Route>
            <Route path="/payments">
              <PaymentLayout token={token} />
            </Route>
            <Route path="/profile">
              <ProfileLayout token={token} setToken={setToken} />
            </Route>
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
