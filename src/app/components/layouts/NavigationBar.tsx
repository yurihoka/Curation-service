import search from "../../public/search.png";

const NavigationBar = () => {
  return (
    <div className="text-black">
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center p-6">
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-black">
            Hacker News
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button className="relative h-10 overflow-hidden rounded-md border border-black bg-transparent px-4 text-neutral-950 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:-translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0">
              <span className="relative">Subscribe</span>
            </button>
            <button className="relative h-10 overflow-hidden rounded-md border border-black bg-transparent px-4 text-neutral-950 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:-translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0">
              <img
                width="16"
                height="16"
                src={search.src}
                alt="search"
                className="display: inline relative"
              />
            </button>
          </div>
        </div>
      </nav>
      <nav className="border-t border-b border-black">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
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
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
