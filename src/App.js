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



function App() {
  return ( 
    <Router>
    <Switch>
    <Route path="/about">
      
    </Route>
    <Route path="/dashboard">
      <Dashboard></Dashboard>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/">
      <Home/>
    </Route>
  </Switch>

</Router>
  );
}

export default App;
