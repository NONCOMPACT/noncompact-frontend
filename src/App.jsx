import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landing';
import AboutUs from './components/about';
import Patients from './components/patients';
import Physicians from './components/physicians';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <Header />
        </header>
        <section className="main">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={AboutUs} />
            <Route path="/patients" component={Patients} />
            <Route path="/physicians" component={Physicians} />
          </Switch>
        </section>
        <footer className="footer mt-auto">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
