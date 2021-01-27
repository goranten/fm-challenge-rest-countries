import { FC, ReactElement } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./search-form.module.css";

const SearchForm: FC = (): ReactElement => {
  return (
    <form className={styles.form}>
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
  );
};

export default SearchForm;
