const Breadcrumb = () => {
  return (
    <div className="bg-[#fdb557] py-2 px-4 mb-4">
      <div className="container mx-auto">
        <ul className="flex space-x-2 text-md ">
          <li>
            <span className="text-neutral-700 hover:underline">Home</span>
          </li>
          <li className="flex items-center font-bold">
            <span className="mx-2 text-neutral-700">
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
            </span>
            <span className="text-neutral-700 hover:underline">All Data</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
