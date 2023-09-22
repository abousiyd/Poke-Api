import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ previousPage, currentPage, nextPage, totalPages }) => {
  return (
    <>
      <button
        className="pagination-button"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>
      <span>{currentPage}</span> / <span >{totalPages}</span>
      <button
        className="pagination-button"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </>
  );
};

export default Pagination;
