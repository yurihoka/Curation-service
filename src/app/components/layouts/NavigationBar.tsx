"use client";

import search from "../../public/search.png";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const currentLocation = usePathname();

  return (
    <div className="pt-10 md:pt-7">
      <nav className="bg-white border-gray-200">
        <div className="flex items-center justify-between p-4 space-x-4">
          <span className="text-2xl font-bold  whitespace-nowrap">
            Hacker News
          </span>
          <div className="flex items-center space-x-2">
            <button className="h-6 px-2 text-xs font-bold md:text-sm border border-black rounded hover:bg-gray-100">
              Subscribe
            </button>
            <button className="h-6 px-1 md:px-2s border border-black rounded hover:bg-gray-100 flex items-center">
              <img
                width="14"
                height="14"
                src={search.src}
                alt="search"
                className="inline"
              />
            </button>
          </div>
        </div>
      </nav>
      <nav>
        <div className="py-3 border-t border-b border-black">
          <ul className="flex flex-row font-medium text-sm ml-5 md:ml-0">
            <li>
              <a
                href="/"
                className={`px-4 py-3 cursor-pointer ${
                  currentLocation === "/"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                Top
              </a>
            </li>
            <li>
              <a
                href="/ask"
                className={`px-4 py-3 cursor-pointer ${
                  currentLocation === "/ask"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                Ask
              </a>
            </li>
            <li>
              <a
                href="/show"
                className={`px-4 py-3 cursor-pointer ${
                  currentLocation === "/show"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                Show
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className={`px-4 py-3 cursor-pointer ${
                  currentLocation === "/jobs"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
