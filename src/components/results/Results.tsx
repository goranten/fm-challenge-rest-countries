/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import styles from "./results.module.css";
import { Card } from "../../types";
import { slugify } from "../../utils";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

type ResultsProps = {
  results: Card[];
};

const Results = ({ results }: ResultsProps) => {
  const ctx = useContext(SearchContext);

  const numberFormatter = new Intl.NumberFormat("nl-NL");

  if (ctx!.filterBy.length > 0 && ctx?.filterBy !== "all") {
    results = results.filter(
      (c) => c.region.toLowerCase() === ctx?.filterBy.toLowerCase()
    );
  }

  if (ctx!.searchFor.length > 0) {
    results = results.filter((c) => {
      if (c.name.toLowerCase().includes(ctx!.searchFor.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  return (
    <section className={styles.header}>
      <ul className={styles.list} role="list">
        {results.map((c) => (
          <li key={c.name}>
            <Link to={`/${slugify(c.name)}`}>
              <article className={styles.card}>
                <img src={c.flag} alt={`flag of ${c.name}`} />
                <div className={styles.text}>
                  <h3>{c.name}</h3>
                  <p>
                    <span className={styles.bold}>Population:</span>{" "}
                    {numberFormatter.format(c.population)}
                  </p>
                  <p>
                    <span className={styles.bold}>Region:</span> {c.region}
                  </p>
                  <p>
                    <span className={styles.bold}>Capital:</span> {c.capital}
                  </p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Results;
