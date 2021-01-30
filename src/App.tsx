import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import { Card } from "./types";
import useLoadCountries from "./hooks/useLoadCountries";
import { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";

const options: string[] = ["africa", "americas", "asia", "europe", "oceania"];

function App() {
  const { status, error, data } = useLoadCountries();
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const results =
    data?.data.map<Card>((c) => ({
      name: c.name,
      capital: c.capital,
      flag: c.flag,
      population: c.population,
      region: c.region,
    })) || [];

  return (
    <Container>
      <Header />
      <Router>
        <main>
          <Switch>
            <Route path="/" exact>
              <Search setSearchTerm={setSearchTerm} />

              <Dropdown
                options={options}
                label="Filter by Region..."
                id="regions"
                setFilter={setFilter}
              />
              {status === "loading" && <div>Loading...</div>}
              {status === "error" && (
                <div>{JSON.stringify(error, null, 2)}</div>
              )}
              {status === "success" && (
                <Results
                  searchTerm={searchTerm}
                  filter={filter}
                  results={results}
                />
              )}
            </Route>
            <Route path="/:name">
              <section>
                <Detail />
              </section>
            </Route>
          </Switch>
        </main>
      </Router>
    </Container>
  );
}

export default App;
