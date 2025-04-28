import React, { useState, useMemo } from 'react';
import { ArrowUp, ArrowDown, ChevronsUpDown, ChevronLeft, ChevronRight, Edit, Trash2 } from 'lucide-react';

// Sample data
const initialData = [
  { id: 1, name: 'Quantum Networks', status: 'Active', role: 'Infrastructure' },
  { id: 2, name: 'Neural Sync', status: 'Pending', role: 'AI Research' },
  { id: 3, name: 'Cyber Dynamics', status: 'Inactive', role: 'Security' },
  { id: 4, name: 'Nexus Innovations', status: 'Active', role: 'Development' },
  { id: 5, name: 'Stellar Systems', status: 'Pending', role: 'Cloud Computing' },
  { id: 6, name: 'Apex Technologies', status: 'Active', role: 'Research' },
  { id: 7, name: 'Zenith Solutions', status: 'Inactive', role: 'Consulting' },
  { id: 8, name: 'Horizon Dynamics', status: 'Active', role: 'Engineering' },
  { id: 9, name: 'Quantum Leap', status: 'Pending', role: 'Innovations' },
  { id: 10, name: 'Techno Frontier', status: 'Active', role: 'Product Management' },
  { id: 11, name: 'Cyber Realm', status: 'Inactive', role: 'Network Operations' },
  { id: 12, name: 'Stellar Dynamics', status: 'Active', role: 'Strategic Planning' },
  { id: 13, name: 'Apex Innovations', status: 'Pending', role: 'Research & Development' },
  { id: 14, name: 'Horizon Tech', status: 'Active', role: 'Software Engineering' },
  { id: 15, name: 'Neural Horizon', status: 'Inactive', role: 'Machine Learning' },
];

const GlassMorphicTable = () => {
  const [data, setData] = useState(initialData);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleEdit = (id) => {
    console.log(`Editing item with id: ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with id: ${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return sortedData.slice(firstPageIndex, lastPageIndex);
  }, [sortedData, currentPage]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ChevronsUpDown size={16} className="text-gray-400 opacity-50" />;
    }
    return sortConfig.direction === 'ascending' ? (
      <ArrowUp size={16} className="text-blue-400" />
    ) : (
      <ArrowDown size={16} className="text-blue-400" />
    );
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white bg-opacity-60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          <table className="w-full text-gray-800 border-separate border-spacing-0">
            <thead>
              <tr className="bg-white bg-opacity-30">
                <th className="w-12 px-4 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-r border-gray-200/30">
                  #
                </th>
                {[
                  { key: 'name', label: 'Name' },
                  { key: 'status', label: 'Status' },
                  { key: 'role', label: 'Role' },
                ].map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-r border-gray-200/30 last:border-r-0 cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all"
                    onClick={() => requestSort(column.key)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{column.label}</span>
                      <span className="ml-2">{getSortIcon(column.key)}</span>
                    </div>
                  </th>
                ))}
                <th className="w-48 border-b border-gray-200/30"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`relative group transition-all duration-300 ease-in-out transform ${
                    hoveredRow === item.id ? 'bg-blue-100 bg-opacity-40 scale-[1.01]' : 'hover:bg-blue-50 hover:bg-opacity-20'
                  }`}
                  onMouseEnter={() => setHoveredRow(item.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="w-12 px-4 py-4 text-center text-gray-500 border-b border-r border-gray-200/30 first:border-l-0">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-r border-gray-200/30 first:border-l-0 last:border-r-0">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-r border-gray-200/30 last:border-r-0">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-white bg-opacity-50 backdrop-blur-sm ${
                        item.status === 'Active'
                          ? 'text-green-600 border border-green-300/50'
                          : item.status === 'Pending'
                          ? 'text-yellow-600 border border-yellow-300/50'
                          : 'text-red-600 border border-red-300/50'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200/30">{item.role}</td>
                  <td className="px-4 py-4 border-b border-gray-200/30 relative">
                    <div
                      className={`absolute inset-y-0 right-4 flex items-center justify-end space-x-2 transition-all duration-300 ease-in-out ${
                        hoveredRow === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="flex bg-[#2a6f97] items-center text-white space-x-1 px-3 py-1 rounded-md  hover:scale-105 transition-all duration-200 ease-in-out text-xs font-medium"
                      >
                        <Edit size={14} />
                        <span>Modify</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center text-white space-x-1 px-3 py-1 rounded-md bg-[#e63946]  hover:scale-105  transition-all duration-200 ease-in-out text-xs font-medium"
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center px-6 py-4 bg-white bg-opacity-30">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full transition-all duration-200 bg-white bg-opacity-50 backdrop-blur-sm ${
                  currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-100 text-gray-600 hover:text-blue-700'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full transition-all duration-200 bg-white bg-opacity-50 backdrop-blur-sm ${
                  currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-100 text-gray-600 hover:text-blue-700'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMorphicTable;