import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Table() {
  const navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'johndoe@example.com' ,phone:"1212343454654"},
    { id: 2, name: 'Jane Smith', age: 30, email: 'janesmith@example.com' ,phone:"1212343454654"},
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bobjohnson@example.com' ,phone:"1212343454654"},
    { id: 4, name: 'Mary Brown', age: 35, email: 'marybrown@example.com',phone:"1212343454654" },{ id: 1, name: 'John Doe', age: 25, email: 'johndoe@example.com' ,phone:"1212343454654"},
    { id: 2, name: 'Jane Smith', age: 30, email: 'janesmith@example.com' ,phone:"1212343454654"},
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bobjohnson@example.com' ,phone:"1212343454654"},
    { id: 4, name: 'Mary Brown', age: 35, email: 'marybrown@example.com',phone:"1212343454654" },
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} onClick={() => navigate(`/admin/${item.id}`)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${
                currentPage === number ? 'active' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Table;
