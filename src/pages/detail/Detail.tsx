/* eslint-disable jsx-a11y/no-redundant-roles */
import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { AxiosResponse } from "axios";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import styles from "./detail.module.css";
import { SearchResponse } from "../../types";
import { slugify } from "../../utils";
import { Map } from "../../components/map/Map";

interface CountryDetails extends SearchResponse {
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Record<string, string>[];
  languages: Record<string, string>[];
  borders: string[];
  alpha3Code: string;
  latlng: [number, number];
}

const Detail = () => {
  const params = useParams<{ name: string }>();
  const queryClient = useQueryClient();
  const name = params.name.replace(/-/g, " ").toLowerCase();
  const numberFormatter = new Intl.NumberFormat("nl-NL");

  const data = queryClient.getQueryData<AxiosResponse<CountryDetails[]>>(
    "allCountries"
  );

  const country = data?.data.find((c) => c.name.toLowerCase() === name);

  console.log(country)

  return (
    <>
      <section className={styles.detail}>
        <Link to="/" className={styles.back}>
          <ArrowLeftIcon />
          Back
        </Link>
        {country && (
          <article className={styles.country}>
            <div className={styles.imageContainer}>
              <img src={country.flag} alt={`flag of ${country?.name}`} />
            </div>
            <div className={styles.textContainer}>
              <h1>{country.name}</h1>
              <div>
                <p>
                  <span className={styles.bold}>Native Name:</span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className={styles.bold}>Population:</span>{" "}
                  {numberFormatter.format(country.population)}
                </p>
                <p>
                  <span className={styles.bold}>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className={styles.bold}>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className={styles.bold}>Capital: </span>
                  {country.capital}
                </p>
              </div>

              <div>
                <p>
                  <span className={styles.bold}>Top Level Domain: </span>
                  {country.topLevelDomain[0]}
                </p>
                <p>
                  <span className={styles.bold}>Currencies: </span>
                  {country.currencies.map((c) => (
                    <span key={c.code}>{c.code}</span>
                  ))}
                </p>
                <p>
                  <span className={styles.bold}>Languages: </span>
                  {country.languages.map((l) => (
                    <span className={styles.language} key={l.name}>
                      {l.name}
                    </span>
                  ))}
                </p>
              </div>

              {country.borders?.length > 0 && (
                <div className={styles.borderContainer}>
                  <p className={`${styles.bold} ${styles.border}`}>
                    Border Countries:{" "}
                  </p>
                  <ul className={styles.borders} role="list">
                    {country.borders.map((c) => {
                      let fullName = data?.data.find(
                        (country) => country.alpha3Code === c
                      )?.name;
                      if (fullName) {
                        fullName = slugify(fullName);
                      }
                      return (
                        <li key={c}>
                          <Link to={`/${fullName}`}>{c}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </article>
        )}
      </section>

      {/* Default to netherlands */}
      <Map
        latitude={country?.latlng[0] || 52.37021}
        longitude={country?.latlng[1] || 4.895168}
      />
    </>
  );
};

export default Detail;
