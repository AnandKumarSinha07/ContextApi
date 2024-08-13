import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className=" border-2 w-full mt-6 flex justify-center items-center space-x-4">
      
      {page > 1 && (
        <button
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6  shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
      )}

      <span className="text-lg font-medium text-gray-800">
        Page {page} of {totalPages}
      </span>

      {page < totalPages && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
