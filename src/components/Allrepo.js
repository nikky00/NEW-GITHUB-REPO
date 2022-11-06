import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import "./Allrepo.css"

export default function Allrepo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0)
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/nikky00/repos`
        );
        setPageCount(Math.ceil(response.data.length / perPage));
        setPageData(response.data.slice(offset, offset + perPage));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, );
  // [offset]

  const gotoPrevious = () => {
    setPage((prev) => prev - 1);
    handlePageClick(page);
  }

  const gotoNext = () => {
    setPage((prev) => prev + 1);
    handlePageClick(page);
  }

  const handlePageClick = (selectedPage) => {
    setOffset((selectedPage) * perPage);
  }

  return (
    <div className='Repo'>
      <h1 className='h1'>Repositories</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul className='ul'>
        {pageData &&
          pageData.map(({ id, title, name, url, language, i }) => (
            <li key={id} className='li'>
              <h3>{title}</h3>
              <h1>{name}</h1>
              <h3 className='url'>{url}</h3>
              <h3>{language}</h3>
            </li>
          ))}
      </ul>
      {
        <button
          disabled={page <= 1}
          onClick={() => gotoPrevious()}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pageCount}
      </p>
      {
        <button
          disabled={page >= pageCount}
          aria-disabled={page >= pageCount}
          onClick={() => gotoNext()}
        >
          next
        </button>
      }
    </div>
  )
}