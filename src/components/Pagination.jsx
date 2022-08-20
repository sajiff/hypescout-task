import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <>
            Next
            <FontAwesomeIcon
              size="l"
              className="nav-icons pagination-icon-right"
              icon={faArrowRight}
            />
          </>
        }
        pageRangeDisplayed={3}
        pageCount={10}
        initialPage={0}
        previousLabel={
          <>
            <FontAwesomeIcon
              size="l"
              className="nav-icons pagination-icon-left"
              icon={faArrowLeft}
            />
            Previous
          </>
        }
        containerClassName="pagination-container-classname"
        previousClassName="pagination-container-classname-previous"
        nextClassName="pagination-container-classname-next"
        pageClassName="pagination-container-classname-pages"
        pageLinkClassName="pagination-container-classname-pages-link"
        breakClassName="pagination-container-classname-break"
        breakLinkClassName="pagination-container-classname-break-link"
        activeClassName="pagination-container-classname-active-page"
      />
    </div>
  );
};

export default Pagination;
