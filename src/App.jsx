import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './components/landing';
import Team from './components/team';
import Study from './components/study';
import Contact from './components/contact';

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
            <Route path="/team" component={Team} />
            <Route path="/study" component={Study} />
            <Route path="/contact" component={Contact} />
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
