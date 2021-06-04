import './App.css';
import Header from './Header'
import Home from './Home';
import Footer from './Footer'
import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    //BAM
    <div className="app">
      <Router>
        <Header />
         <Switch >
            {/* Header */}
           <Route exact path="/">
              {/* Home */}
              <Home />
           </Route>
           <Route path = "/search">
            <SearchPage />
           </Route>
        </Switch>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
