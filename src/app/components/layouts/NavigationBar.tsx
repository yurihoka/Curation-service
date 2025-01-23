import search from "../../public/search.png";

const NavigationBar = () => {
  return (
    <div className="text-black">
      <nav className="bg-white border-gray-200">
        <div className="flex items-center justify-between p-4 space-x-4">
          <span className="text-2xl font-bold text-black whitespace-nowrap">
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
      <nav className="border-t border-b border-black">
        <div className="px-4 py-3">
          <ul className="flex flex-row font-medium space-x-8 text-sm ml-5 md:ml-0">
            <li>
              <a
                href="/"
                className="hover:bg-black hover:text-white"
                aria-current="page"
              >
                Top
              </a>
            </li>
            <li>
              <a href="/ask" className="hover:bg-black hover:text-white">
                Ask
              </a>
            </li>
            <li>
              <a href="/show" className="hover:bg-black hover:text-white">
                Show
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:bg-black hover:text-white">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
