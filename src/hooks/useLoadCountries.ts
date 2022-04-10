import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SearchResponse } from "../types";

function useLoadCountries() {
  return useQuery<AxiosResponse<SearchResponse[]>>("allCountries", () =>
    axios.get("https://restcountries.com/v2/all")
  );
}

export default useLoadCountries;
