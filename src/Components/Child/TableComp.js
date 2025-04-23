import React, { useEffect, useState, useMemo } from 'react';
import Titles from './Titles';
import Data from '../../data.json';
import { Link } from 'react-router-dom';

const TableComp = () => {
    const title = Data.filter((item) => item.id === 10);

    const [formData, setFormData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const recordsPerPage = 4;





    // Fetch data from local storage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        setFormData(storedData);
    }, []);



    // Delete Function
    const handleDelete = (index) => {
        if (!window.confirm('Are you sure you want to delete this entry?')) {
            return;
        }




        // Remove the specific row using splice
        const updatedData = [...formData];
        updatedData.splice(index, 1);



        // Update state and localStorage
        setFormData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };




    // Search filter
    const matchesSearch = (item) => {
        return Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    };



    // Sorting function (only for the current page)
    const handleSortByName = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };




    // Get filtered data
    const filteredData = useMemo(() => {
        return formData.filter(matchesSearch);
    }, [formData, searchTerm]);

  
  
  
    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;



    // Get only the data for the current page
    const currentRecords = useMemo(() => {
        const pageData = filteredData.slice(startIndex, endIndex);

        // Sort only the data on the current page
        return [...pageData].sort((a, b) =>
            sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
    }, [filteredData, startIndex, endIndex, sortOrder]);

  
  
  
    // Pagination handlers
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="table-container">
            <Titles data={title} />

            {formData.length > 0 ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={handleSortByName} style={{ cursor: 'pointer' }}>
                                    Name {sortOrder === 'asc' ? '🔼' : '🔽'}
                                </th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className='search-bar'
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    />
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentRecords.length > 0 ? (
                                currentRecords.map((row, index) => {
                                    return (
                                        <tr key={startIndex + index}>
                                            <td>{row.name}</td>
                                            <td>{row.number}</td>
                                            <td>{row.email}</td>
                                            <td>{row.message}</td>
                                            <td>
                                                <button onClick={() => handleDelete(startIndex + index)} className="delete-btn">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5">No matching records found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {filteredData.length > 0 && (
                        <div className="pagination">
                            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                                ⬅️ Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Next ➡️
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p>No Submissions Yet!</p>
            )}

            <Link to="/">
                <button>Go Back to Form</button>
            </Link>
        </div>
    );
};

export default TableComp;
