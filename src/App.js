import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />

        <Route path='/'>
          <Dashboard />
          <Route path='/top250'></Route>
          <Route path='/lists'></Route>
          <Route path='/lists/create'></Route>
          <Route path='/signin'></Route>
          <Route path='/signout'></Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
