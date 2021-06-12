import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { MatchPage } from "../src/pages/MatchPage";
import { TeamPage } from "../src/pages/TeamPage";
import SearchBar from "./components/SearchBar";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import TeamPerformPage from "./pages/TeamPerformPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/teams/:teamName">
            <SearchBar />
            <TeamPage />
          </Route>

          <Route exact path="/teams/:teamName/matches/:year">
            <SearchBar />
            <MatchPage />
          </Route>

          <Route exact path="/teams/performance/:teamName">
            <TeamPerformPage />
          </Route>

          <Route>
            <Error />
          </Route>
          
        </Switch>
        <Footer />
      </Router>

    
    </div>
  );
}

export default App;
