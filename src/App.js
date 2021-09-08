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
import Contact from './Components/HomePage/Contact/Contact';



export const UserContext  = createContext();
export const serviceContext  = createContext();

function App() {
  const  [loggedInUser , setLoggedInUser] = useState({});
  const  [selectedService , setSelectedService] = useState(null);
  return ( 
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <serviceContext.Provider value={[selectedService, setSelectedService]}>
      
    <Router>
    <Switch>
    
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
</serviceContext.Provider>
</UserContext.Provider>
  );
}

export default App;
