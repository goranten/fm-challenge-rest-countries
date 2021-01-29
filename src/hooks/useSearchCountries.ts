import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SearchResponse } from "../types";

function useSearchCountries(term: string, query: string = "name") {
  const URL = `https://restcountries.eu/rest/v2/${query}/${term}`;
  return useQuery<AxiosResponse<SearchResponse[]>>(
    "countries",
    () => axios.get(URL),
    { enabled: false }
  );
}

export default useSearchCountries;
