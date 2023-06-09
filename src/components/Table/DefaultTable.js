import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HandleStatus } from '../../Service/DefaultFunctions';

function Table({data}) {
  const navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  
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
            <th>application Id</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Department</th>
            <th>Passing Year</th>
            <th>Enrolment Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          
          {currentItems.map((item) => (
            <tr key={item.id} onClick={() => navigate(`/application/${item.applicationId}`)}>
              {console.log(item.applicationId,"APPLICATION ID")}
              <td>{item.applicationId}</td>
              <td>{item.fullname}</td>
              <td>{item.rollno}</td>
              <td>{item.department}</td>
              <td>{item.passingyear}</td>
              <td>{item.enrolmentno}</td>
              <td>{HandleStatus(item.applicationStatus)}</td>
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
