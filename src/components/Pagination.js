const Pagination = ({previousPage, currentPage, nextPage, totalPages}) => {
  return (
    <div className="pokeList__pagination">
    <button
      className="pokeList__pagination-button"
      onClick={previousPage}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="pokeList__pagination-currentPage">{currentPage}</span> of{' '}
    <span className="pokeList__pagination-totalPages">{totalPages}</span>
    <button
      className="pokeList__pagination-button"
      onClick={nextPage}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
  );
};

export default Pagination;
