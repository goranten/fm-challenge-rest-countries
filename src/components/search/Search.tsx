import { useContext, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { SearchContext } from "../../context/searchContext";
import Dropdown from "../dropdown/Dropdown";
import styles from "./search.module.css";

const options: string[] = [
  "all",
  "africa",
  "americas",
  "asia",
  "europe",
  "oceania",
];

const Search = () => {
  const ctx = useContext(SearchContext);
  const [input, setInput] = useState(ctx?.searchFor || "");

  return (
    <section className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ctx?.setSearchFor(input);
        }}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label className="sr-only" htmlFor="country">
            Country
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
          />
          <span className={styles.icon}>
            <SearchIcon />
          </span>
        </div>
        <button
          onClick={(e) => {
            ctx?.setSearchFor("");
            ctx?.setFilterBy("all");
            setInput("");
          }}
          className={styles.resetButton}
          type="button"
        >
          Reset Search
        </button>
      </form>
      <Dropdown options={options} label="Filter by Region..." id="regions" />
    </section>
  );
};

export default Search;
