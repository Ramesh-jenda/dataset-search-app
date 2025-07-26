import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1f5f8d] text-white py-12">
      <div className="max-w-7xl mx-auto flex md:flex-row justify-between items-center">
        <div className="flex-shrink-0">
          <div className="flex items-center space-x-2 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-git-fork-icon lucide-git-fork stroke-[#fdb557]"
            >
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
              <path d="M12 12v3" />
            </svg>
            <h1 className="text-2xl font-semibold">CivicDataSpace</h1>
          </div>
          <ul className="flex gap-4">
            <li>
              <a
                href="#"
                className="text-sm font-semibold opacity-70 hover:opacity-100"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold opacity-70 hover:opacity-100"
              >
                SITEMAP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold opacity-70 hover:opacity-100"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold text-[#fdb557]">Follow Us</h2>
          <ul className="flex gap-2 justify-end mt-4">
            <li>
              <a
                href="#"
                className="text-sm font-semibold bg-[#84dccf] block p-2 rounded-full"
              >
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
                  className="lucide lucide-github-icon lucide-github stroke-neutral-800"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold bg-[#84dccf] block p-2 rounded-full"
              >
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
                  className="lucide lucide-linkedin-icon lucide-linkedin stroke-neutral-800"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold bg-[#84dccf] block p-2 rounded-full"
              >
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
                  className="lucide lucide-twitter-icon lucide-twitter stroke-neutral-800"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold bg-[#84dccf] block p-2 rounded-full"
              >
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
                  className="lucide lucide-facebook-icon lucide-facebook stroke-neutral-800"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
          </ul>
          <p className="mt-4"><span className="opacity-70">Made by :</span> <a href="#">CivicDataSpace</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
