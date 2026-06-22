import React from 'react';

// Reusable Admin Table component with clean styling
// Props:
// - columns: Array of { key, header, render? }
// - data: Array of data objects
// - loading: Boolean to show loading state
const AdminTable = ({ columns, data, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-md text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-marigold mx-auto"></div>
        <p className="font-inter text-brand-charcoal/60 mt-4">Loading...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-md text-center">
        <p className="font-inter text-brand-charcoal/60">No data found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-brand-ivory">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 text-left font-inter font-semibold text-brand-charcoal border-b border-gray-100"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={row._id || rowIndex}
                className={`border-b border-gray-50 hover:bg-brand-ivory/50 transition-colors ${
                  rowIndex % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                }`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 font-inter text-brand-charcoal/80">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
