import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import EmployeesList from "./EmployeesList";
import EmployeesAddr from "./EmployeesAddr";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" render={props => <EmployeesList {...props} />} exact />
        <Route
          path="/address/:id"
          render={props => <EmployeesAddr {...props} />}
        />
        } />
      </Switch>
    </>
  );
}
