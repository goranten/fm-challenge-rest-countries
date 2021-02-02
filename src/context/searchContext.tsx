import { createContext, ReactNode, useState } from "react";

interface SearchContextInterface {
  searchFor: string;
  setSearchFor: (searchFor: string) => void;
  setFilterBy: (filterBy: string) => void;
  filterBy: string;
}

type SearchContextProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext<SearchContextInterface | null>(null);

function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [searchFor, setSearchFor] = useState("");
  const [filterBy, setFilterBy] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchFor,
        setSearchFor,
        filterBy,
        setFilterBy,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchContextProvider };
