import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./search.module.css";

type SearchProps = {
  setSearchTerm: (term: string) => void;
};

const Search = ({ setSearchTerm }: SearchProps) => {
  return (
    <section className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const searchTerm = formData.get("country");
          if (typeof searchTerm === "string") {
            setSearchTerm(searchTerm);
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
