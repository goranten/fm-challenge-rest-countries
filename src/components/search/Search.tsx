import { useContext } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { SearchContext } from "../../context/searchContext";
import styles from "./search.module.css";

const Search = () => {
  const ctx = useContext(SearchContext);

  return (
    <section className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const searchTerm = formData.get("country");
          if (typeof searchTerm === "string") {
            // setSearchTerm(searchTerm);
            ctx?.setSearchFor(searchTerm);
          }
        }}
        className={styles.form}
      >
        <label className="sr-only" htmlFor="country">
          Country
        </label>
        <input
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
