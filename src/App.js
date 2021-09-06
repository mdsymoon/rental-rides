import Home from './Components/HomePage/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/DashboardPage/Dashboard/Dashboard';
import Login from './Components/LoginPage/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext  = createContext();

function App() {
  const  [loggedInUser , setLoggedInUser] = useState({});
  return ( 
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
    <Switch>
    <Route path="/about">
      
    </Route>
    <PrivateRoute path="/dashboard">
      <Dashboard></Dashboard>
    </PrivateRoute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/">
      <Home/>
    </Route>
  </Switch>

</Router>
</UserContext.Provider>
  );
}

export default App;
