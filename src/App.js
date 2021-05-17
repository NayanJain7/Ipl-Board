import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatchPage } from "../src/pages/MatchPage";
import { TeamPage } from "../src/pages/TeamPage";
import BarChart from "./components/BarChart";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/teams/barchart">
            <BarChart />
          </Route>

          <Route exact path="/teams/:teamName">
            <SearchBar />
            <TeamPage />
          </Route>

          <Route exact path="/teams/:teamName/matches/:year">
            <SearchBar />
            <MatchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
