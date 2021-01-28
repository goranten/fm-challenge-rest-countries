import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import useSearchCountries from "./hooks/useSearchCountries";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState("");

  const { data, status, refetch, error } = useSearchCountries(term);

  console.log(data?.data[0].capital);

  console.log(status);

  return (
    <Container>
      <Header />
      <main>
        <Search search={refetch} term={term} setTerm={setTerm} />
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>{JSON.stringify(error, null, 2)}</div>}
        {status === "success" && (
          <section>
            {data?.data.map((c) => (
              <div>
                {JSON.stringify(
                  {
                    name: c.name,
                    flag: c.flag,
                    capital: c.capital,
                    population: c.population,
                    region: c.region,
                  },
                  null,
                  2
                )}
              </div>
            ))}
          </section>
        )}
      </main>
    </Container>
  );
}

export default App;
