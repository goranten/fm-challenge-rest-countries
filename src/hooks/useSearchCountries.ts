import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

export interface SearchResponse {
  flag: string;
  population: number;
  region: string;
  capital: string;
  name: string;
}

function useSearchCountries(term: string) {
  const URL = `https://restcountries.eu/rest/v2/name/${term}`;
  return useQuery<AxiosResponse<SearchResponse[]>>(
    "countries",
    () => axios.get(URL),
    { enabled: false }
  );
}

export default useSearchCountries;
