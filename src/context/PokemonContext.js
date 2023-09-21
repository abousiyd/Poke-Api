import React, { createContext, useContext, useState,  useEffect, } from 'react';

import { useNavigate, useSearchParams } from "react-router-dom";

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);



  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


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

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page")) || 1);
  }, [searchParams]);

 
  const contextValue = {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    nextPage, previousPage, backToHome 
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};
