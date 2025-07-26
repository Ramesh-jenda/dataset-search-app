const DatasetCard = ({
  title,
  description,
  modified,
  download_count,
  metadata,
  tags,
  sectors,
  formats,
  organization,
  viewMode,
}) => {
  // Extract metadata values for "Geography" and other metadata
  const geography =
    metadata?.find((item) => item.metadata_item.label === "Geography")?.value ||
    "Not available";
  const lastUpdated = modified
    ? new Date(modified).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not available";

  return (
    <div
      className={`card ${
        viewMode === "list" ? "list-view mb-4" : "grid-view"
      } bg-white shadow-[0_3px_10px_rgb(0_0_0_/0.2)] rounded-2xl p-6`}
    >
      {/* Title */}
      <h3 className="font-bold text-lg mb-2 text-[#326081] line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-800 mb-4 line-clamp-3">{description}</p>

      <div className="flex flex-col md:flex-row md:gap-4 mb-4">
        {/* Last Updated */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-gray-600 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-days-icon lucide-calendar-days stroke-orange-500"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>{" "}
            {viewMode === "list" ? "Last Updated :" : ""}
          </p>
          <span className="text-neutral-800 font-medium">{lastUpdated}</span>
        </div>

        {/* Downloads */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-gray-600 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download-icon lucide-download stroke-orange-500"
            >
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
            {viewMode === "list" ? "Downloads :" : ""}{" "}
          </p>
          <span className="text-neutral-800 font-medium">{download_count}</span>
        </div>

        {/* Geography */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-gray-600 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe-icon lucide-globe stroke-orange-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>{" "}
            {viewMode === "list" ? "Geography :" : ""}
          </p>
          <span className="text-neutral-800 font-medium">{geography}</span>
        </div>
      </div>

      <div
        className={`flex justify-between flex-col md:flex-row md:gap-12 mb-4 ${
          viewMode === "list" ? "md:max-w-[60%]" : ""
        }`}
      >
        {/* Sectors */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-gray-600 flex items-center gap-1 shrink-0 text-sm">Sectors :</p>
          <div className="flex flex-wrap gap-2">
            {sectors?.map((sector, index) => (
              <span key={index} className="text-neutral-800 font-medium">
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Published By */}
        <div className="mb-2 flex items-center gap-2">
          <p className="text-gray-600 shrink-0 text-sm">Published By: </p>
          <img
            src={`https://api.datakeep.civicdays.in/${
              organization?.logo || "Unknown"
            }`}
            alt={organization?.name || "Unknown"}
            className="h-5"
          />
        </div>
      </div>

      {viewMode === "list" && (
        <div
          className={`flex justify-between flex-col md:flex-row md:gap-12 ${
            viewMode === "list" ? "md:max-w-[60%]" : ""
          }`}
        >
          {/* Tags */}
          <div className="mb-2 flex items-center gap-2">
            <p className="text-gray-600">Tags : </p>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#84dccf] text-neutral-800 font-medium px-2 py-1 border border-[#00a78f] rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div className="mb-2 flex items-center gap-2">
            <p className="text-gray-600">Formats: </p>
            <div className="flex flex-wrap gap-2">
              {formats?.map((format, index) => (
                <span key={index} className="text-gray-800 font-medium text-sm">
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatasetCard;
