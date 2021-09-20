import s from './Pagination.module.scss';

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
    <>
      {totalPages > 1 ? (
        <div className={s.container}>
          {page > 1 ? (
            <button
              onClick={() => handlePrevPageClick(page)}
              className={s.button}
            >
              &#10094;
            </button>
          ) : (
            <div className={s.emptyArrow}></div>
          )}
          <div className={s.authorsNumbers}>{`${firstItem} - ${lastItem}`}</div>
          {page < totalPages ? (
            <button
              onClick={() => handleNextPageClick(page)}
              className={s.button}
            >
              &#10095;
            </button>
          ) : (
            <div className={s.emptyArrow}></div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Pagination;
