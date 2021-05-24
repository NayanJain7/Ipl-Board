import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatchPage } from "../src/pages/MatchPage";
import { TeamPage } from "../src/pages/TeamPage";
import BarChart from "./components/BarChart";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import TeamPerformPage from "./pages/TeamPerformPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <HomePage />
            <Footer/>
          </Route>
          <Route exact path="/barchart">
            <BarChart />
          </Route>

          <Route exact path="/teams/:teamName">
            <NavBar />
            <SearchBar />
            <TeamPage />
            <Footer/>
          </Route>

          <Route exact path="/teams/:teamName/matches/:year">
            <NavBar />
            <SearchBar />
            <MatchPage />
            <Footer/>
          </Route>
          <Route exact path="/teams/performance/:teamName">
            <NavBar />
            <TeamPerformPage />
            <Footer/>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
