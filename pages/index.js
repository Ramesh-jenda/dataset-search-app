import { useState, useEffect } from "react";
import { fetchData } from "../utils/api"; // Function to fetch data from the API
import DatasetCard from "../components/DatasetCard"; // Dataset card component
import SearchFilters from "../components/SearchFilters"; // Search filter component
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import LeftFilters from "@/components/LeftFilters";
import Footer from "@/components/Footer";

export default function Home() {
  const [datasets, setDatasets] = useState([]); // State to store datasets
  const [loading, setLoading] = useState(false); // Loading state to show loading spinner
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
  const [rowsPerPage, setRowsPerPage] = useState(9); // Rows per page (default 9)
  const [viewMode, setViewMode] = useState("card"); // View mode ("card" or "list")
  const [filters, setFilters] = useState({
    query: "", // Search query
  }); // Filters state for query
  const [sortOrder, setSortOrder] = useState("desc"); // Sorting order (desc or asc)
  const [sortBy, setSortBy] = useState("relevant"); // Sorting by "relevant" or "modified" for latest updated

  // Function to handle page changes (pagination)
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid pages
    setCurrentPage(newPage); // Update the current page
  };

  // Function to handle changes in rows per page dropdown
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value)); // Update rows per page
    setCurrentPage(1); // Reset to page 1 when rows per page changes
  };

  // Function to handle switching between card and list view
  const handleViewChange = (mode) => {
    setViewMode(mode); // Update view mode when user selects card/list view
  };

  // Function to handle sorting order changes (ascending/descending)
  const handleSortOrderChange = (newSortOrder) => {
    setSortOrder(newSortOrder); // Set the sort order to asc or desc
  };

  // Function to handle sorting by "relevant" or "latest updated"
  const handleSortByChange = (e) => {
    setSortBy(e.target.value); // Set the sortBy value to "relevant" or "modified"
  };

  // Single useEffect for fetching data
  useEffect(() => {
    const getDatasets = async () => {
      setLoading(true); // Show loader while fetching data
      try {
        // Fetch data with filters, query, pagination, and sorting
        const response = await fetchData({
          ...filters, // Include query filter
          page: currentPage,
          size: rowsPerPage, // Rows per page
          sort: sortBy === "relevant" ? "relevant" : "modified", // Sorting type ("relevant" or "modified" for latest updated)
          order: sortOrder, // Sorting order (asc or desc)
        });

        console.log("API Response:", response); // Log the API response to check results

        if (response && response.results) {
          setDatasets(response.results); // Set the fetched datasets
          setTotalPages(Math.ceil(response.total / rowsPerPage)); // Calculate total pages
        } else {
          console.log("No datasets found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Hide loader when done fetching
      }
    };

    getDatasets(); // Call the function to fetch datasets
  }, [filters, currentPage, rowsPerPage, sortBy, sortOrder]); // Re-fetch when filters, page, sorting changes

  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-[300px] w-full">
            <LeftFilters filters={filters} setFilters={setFilters} />
          </div>
          {/* Right-side Dataset Cards */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex md:flex-row flex-col md:justify-end gap-3 mb-6">
              {/* Search Filters */}
              <SearchFilters filters={filters} setFilters={setFilters} />
              <div className="shrink-0 flex space-x-2 items-center">
              {/* View Mode Toggle */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleViewChange("card")}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-layout-grid-icon lucide-layout-grid ${
                      viewMode === "card"
                        ? "stroke-blue-400"
                        : "stroke-neutral-400"
                    }`}
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-rows2-icon lucide-rows-2 ${
                      viewMode === "list"
                        ? "stroke-blue-400"
                        : "stroke-neutral-400"
                    }`}
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 12h18" />
                  </svg>
                </button>
              </div>
              {/* Toggle Sort Button with Ascending/Descending Icon */}
              <button
                onClick={() =>
                  handleSortOrderChange(sortOrder === "asc" ? "desc" : "asc")
                }
                className="flex items-center cursor-pointer"
              >
                {sortOrder === "asc" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-narrow-wide-icon lucide-arrow-up-narrow-wide stroke-blue-500"
                  >
                    <path d="m3 8 4-4 4 4" />
                    <path d="M7 4v16" />
                    <path d="M11 12h4" />
                    <path d="M11 16h7" />
                    <path d="M11 20h10" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down-wide-narrow-icon lucide-arrow-down-wide-narrow"
                  >
                    <path d="m3 16 4 4 4-4" />
                    <path d="M7 20V4" />
                    <path d="M11 4h10" />
                    <path d="M11 8h7" />
                    <path d="M11 12h4" />
                  </svg>
                )}
              </button>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={handleSortByChange}
                className="px-4 py-2 border border-gray-300 cursor-pointer rounded"
              >
                <option value="relevant">Sort by Relevant</option>
                <option value="modified">Sort by Latest Updated</option>
              </select>
            </div>
            </div>

            {/* Loader UI */}
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              </div>
            ) : datasets.length === 0 ? (
              <p>No datasets found based on the selected filters.</p>
            ) : (
              <>
                {/* Display datasets in a grid layout (responsive) */}
                <div
                  className={`grid ${
                    viewMode === "card"
                      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
                      : "grid-cols-1"
                  }`}
                >
                  {datasets.map((dataset) => (
                    <DatasetCard
                      key={dataset.id}
                      title={dataset.title}
                      description={dataset.description}
                      modified={dataset.modified}
                      download_count={dataset.download_count}
                      metadata={dataset.metadata}
                      tags={dataset.tags}
                      sectors={dataset.sectors}
                      formats={dataset.formats}
                      organization={dataset.organization}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-end gap-6 items-center mt-6 shadow-[0_3px_10px_rgb(0_0_0_/0.2)] rounded-2xl p-4">
                  {/* Rows per Page Dropdown */}
                  <div>
                    <label htmlFor="rowsPerPage" className="mr-2">
                      Rows per page:
                    </label>
                    <select
                      id="rowsPerPage"
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                      className="p-1 border border-gray-300 text-sm cursor-pointer rounded"
                    >
                      {[9, 18, 27, 36].map((rows) => (
                        <option key={rows} value={rows}>
                          {rows}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Page Navigation */}
                  <div className="flex items-center space-x-2">
                    <span className="pr-2">
                      Page <span className="font-bold">{currentPage}</span> of{" "}
                      <span className="font-bold">{totalPages}</span>
                    </span>
                    <button
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevrons-left-icon lucide-chevrons-left"
                      >
                        <path d="m11 17-5-5 5-5" />
                        <path d="m18 17-5-5 5-5" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-left-icon lucide-chevron-left"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right-icon lucide-chevron-right"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      className="text-gray-600 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevrons-right-icon lucide-chevrons-right"
                      >
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
