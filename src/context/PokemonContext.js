import { createContext, useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page"));
  const [currentPage, setCurrentPage] = useState(page || 1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    navigate(`/?page=${currentPage + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    navigate(`/?page=${currentPage - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    setCurrentPage(1);
    navigate("/");
  };

  const contextValue = {
    setCurrentPage,
    setTotalPages,
    previousPage,
    currentPage,
    totalPages,
    backToHome,
    nextPage
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};
