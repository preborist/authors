function Pagination({
  totalPages,
  page,
  itemsPerPage,
  totalItems,
  handleNextPageClick,
  handlePrevPageClick,
}) {
  let firstItem = (page - 1) * itemsPerPage + 1;
  let lastItem;

  if (itemsPerPage * page > totalItems) {
    lastItem = totalItems;
  } else {
    lastItem = firstItem + itemsPerPage - 1;
  }

  return (
    <div>
      {totalPages > 1 ? (
        <div>
          {page > 1 ? (
            <button onClick={() => handlePrevPageClick(page)}>prev</button>
          ) : null}
          <div>{`${firstItem} - ${lastItem}`}</div>

          {page < totalPages ? (
            <button onClick={() => handleNextPageClick(page)}>next</button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Pagination;
