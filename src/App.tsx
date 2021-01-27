import Container from "./components/container/Container";
import Header from "./components/header/Header";
import SearchForm from "./components/search-form/SearchForm";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <SearchForm />
        </section>
      </main>
    </Container>
  );
}

export default App;
