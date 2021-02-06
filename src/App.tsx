import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import { Card } from "./types";
import useLoadCountries from "./hooks/useLoadCountries";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/themeContext";

function App() {
  const { status, error, data } = useLoadCountries();
  const themCtx = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove("dark");
    if (themCtx?.isDark) {
      document.body.classList.add("dark");
    }
  }, [themCtx?.isDark]);

  const results =
    data?.data.map<Card>((c) => ({
      name: c.name,
      capital: c.capital,
      flag: c.flag,
      population: c.population,
      region: c.region,
    })) || [];

  return (
    <>
      <Header />
      <Container>
        <Router>
          <main>
            <Switch>
              <Route path="/" exact>
                <Search />

                {status === "loading" && <div>Loading...</div>}
                {status === "error" && (
                  <div>{JSON.stringify(error, null, 2)}</div>
                )}
                {status === "success" && <Results results={results} />}
              </Route>
              <Route path="/:name">
                <Detail />
              </Route>
            </Switch>
          </main>
        </Router>
      </Container>
    </>
  );
}

export default App;
