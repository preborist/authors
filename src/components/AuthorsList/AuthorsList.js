import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { AUTHORS_PER_PAGE } from '../../utils/constants';
import Loader from '../Loader';
import Table from '../Table';
import Filter from '../Filter';

function AuthorsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState(null);
  const [topThreeAuthors, setTopThreeAuthors] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const findThreeTopAuthors = array => {
    const clonedData = array.concat();
    const sortedArray = clonedData
      .sort(function (a, b) {
        if (a.pageviews < b.pageviews) {
          return 1;
        }
        if (a.pageviews > b.pageviews) {
          return -1;
        }
        return 0;
      })
      .slice(0, 3);
    setTopThreeAuthors(sortedArray);
  };

  const handleNextPageClick = num => {
    if (num === totalPages) {
      return;
    } else {
      setPage((num += 1));
    }
  };
  const handlePrevPageClick = num => {
    if (num === 1) {
      return;
    } else {
      setPage((num -= 1));
    }
  };

  const handleInputChange = e => {
    setFilter(e.currentTarget.value);
    const normalizedFilter = e.currentTarget.value.toLowerCase();
    console.log(normalizedFilter);
    const filteredAuthors = authors.filter(author =>
      author.name.toLowerCase().includes(normalizedFilter),
    );
    console.log(filteredAuthors);

    setFilteredAuthors(filteredAuthors);
    setTotalPages(Math.ceil(filteredAuthors.length / AUTHORS_PER_PAGE));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('data.json');

      const data = await response.json();
      setIsLoading(false);
      setAuthors(data);
      findThreeTopAuthors(data);
      setTotalPages(Math.ceil(data.length / AUTHORS_PER_PAGE));
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Authors List</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter inputFilterName={filter} changeFilter={handleInputChange} />
          <Table
            data={filteredAuthors ? filteredAuthors : authors}
            page={page}
            totalPages={totalPages}
            topThreeAuthors={topThreeAuthors}
          />
          <Pagination
            totalPages={totalPages}
            itemsPerPage={AUTHORS_PER_PAGE}
            page={page}
            totalItems={
              filteredAuthors ? filteredAuthors.length : authors.length
            }
            handleNextPageClick={handleNextPageClick}
            handlePrevPageClick={handlePrevPageClick}
          />
        </>
      )}
    </>
  );
}
export default AuthorsList;
