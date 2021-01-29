/* eslint-disable jsx-a11y/no-redundant-roles */
import { ReactElement, FC } from "react";
import styles from "./results.module.css";
import { Card } from "../../types";

interface ResultsProps {
  results: Card[];
  filter: string;
}

const Results: FC<ResultsProps> = ({ results, filter }): ReactElement => {
  const numberFormatter = new Intl.NumberFormat("nl-NL");
  if (filter.length > 0) {
    results = results.filter(
      (c) => c.region.toLowerCase() === filter.toLowerCase()
    );
  }
  return (
    <section className={styles.header}>
      <ul className={styles.list} role="list">
        {results.map((c) => (
          <li key={c.name}>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Results;
