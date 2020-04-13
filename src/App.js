import React from 'react';
import Chart from './components/charts';
import VerticalTree from './components/verticalChildShow';
import TargetDetails from './components/targetDetails';
import Footer from './headerFooter/footer';
import Header from './headerFooter/header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Chart} />
          <Route exact path="/contactlessTarget" component={VerticalTree} />
          <Route exact path="/targetDetails" component={TargetDetails} />
          <Redirect to='/home' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
