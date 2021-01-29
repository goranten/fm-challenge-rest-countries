import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SearchResponse } from "../types";

function useLoadCountries() {
  return useQuery<AxiosResponse<SearchResponse[]>>("allCountries", () =>
    axios.get("https://restcountries.eu/rest/v2/all")
  );
}

export default useLoadCountries;
