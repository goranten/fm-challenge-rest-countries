import { FC, FormEvent, ReactElement } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./search.module.css";

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

const Search: FC<SearchProps> = ({ setSearchTerm }): ReactElement => {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("country");
    if (typeof searchTerm === "string") {
      setSearchTerm(searchTerm);
    }
  }

  return (
    <section className={styles.search}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
