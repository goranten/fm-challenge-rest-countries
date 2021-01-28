import { AxiosResponse } from "axios";
import { ChangeEvent, FC, FormEvent, ReactElement } from "react";
import { QueryObserverResult, RefetchOptions } from "react-query";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Dropdown from "../dropdown/Dropdown";
import styles from "./search.module.css";
import { SearchResponse } from "../../hooks/useSearchCountries";

const options = [
  {
    value: "africa",
  },
  {
    value: "america",
  },
  {
    value: "asia",
  },
  {
    value: "europe",
  },
  {
    value: "oceania",
  },
];

interface SearchProps {
  search: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<AxiosResponse<SearchResponse[]>, unknown>>;
  term: string;
  setTerm: (term: string) => void;
}

const Search: FC<SearchProps> = ({ search, term, setTerm }): ReactElement => {
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    search();
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
      <div className={styles.select}>
        <Dropdown options={options} />
      </div>
    </section>
  );
};

export default Search;
