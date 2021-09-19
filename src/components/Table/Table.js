import { useState, useEffect } from 'react';

import { AUTHORS_PER_PAGE } from '../../utils/constants';
import s from './Table.module.scss';

function Table({ data, page, topThreeAuthors }) {
  const [displayedData, setDisplayedData] = useState([]);
  const [orderedData, setOrderedData] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);
  const [sortField, setSortField] = useState('pageviews');

  const startIndex = (page - 1) * AUTHORS_PER_PAGE;

  const handleOnSort = sortField => {
    setSortField(sortField);

    const selectedUsers = orderedData.slice(
      startIndex,
      startIndex + AUTHORS_PER_PAGE,
    );
    setDisplayedData(selectedUsers);
    sortOrder === 1 ? setSortOrder(-1) : setSortOrder(1);
  };

  useEffect(() => {
    const clonedData = data.concat();

    const orderedData = clonedData.sort(function (a, b) {
      let result =
        a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
      return result * sortOrder;
    });

    setOrderedData(orderedData);

    const selectedUsers = orderedData.slice(
      startIndex,
      startIndex + AUTHORS_PER_PAGE,
    );
    setDisplayedData(selectedUsers);
  }, [data, startIndex, page, sortField, sortOrder]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Letter</th>
            <th onClick={() => handleOnSort('name')}>
              Name{sortField === 'name' ? <small>sort</small> : null}
            </th>
            <th>awards</th>
            <th onClick={() => handleOnSort('pageviews')}>
              pageviews{sortField === 'pageviews' ? <small>sort</small> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData
            ? displayedData.map((item, index) => (
                <tr key={item.Name + Date() + item.pageviews.toString()}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.name.charAt(0)}</td>
                  <td>
                    {item.name} <span>{item.count_pub} публ.</span>
                  </td>
                  <td
                    className={
                      item.pageviews === topThreeAuthors[0].pageviews
                        ? s.first
                        : item.pageviews === topThreeAuthors[1].pageviews
                        ? s.second
                        : item.pageviews === topThreeAuthors[2].pageviews
                        ? s.third
                        : 'empty'
                    }
                  ></td>
                  <td>{item.pageviews.toLocaleString()}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
