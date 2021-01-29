import { FC, FormEvent, ReactElement, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./search.module.css";

// interface SearchProps {}

const Search: FC = (): ReactElement => {
  const [term, setTerm] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className={styles.search}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className="sr-only" htmlFor="country">
          Country
        </label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className={styles.input}
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
        />
        <span className={styles.icon}>
          <SearchIcon />
        </span>
      </form>
    </section>
  );
};

export default Search;
