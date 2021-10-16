import Nav from './components/Nav';
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Work from './components/Work';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Work/>
          </Route>
          <Route exact path="/auth/signin"><Login/></Route>
          <Route exact path="/auth/signup"><SignUp/></Route>
          <Route exact path="/work"><Work/></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;