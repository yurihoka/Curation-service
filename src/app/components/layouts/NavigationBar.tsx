import search from "../../public/search.png";

const NavigationBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
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
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-black hover:bg-black hover:text-white"
                  aria-current="page"
                >
                  Top
                </a>
              </li>
              <li>
                <a
                  href="/ask"
                  className="text-black hover:bg-black hover:text-white"
                >
                  Ask
                </a>
              </li>
              <li>
                <a
                  href="/show"
                  className="text-black hover:bg-black hover:text-white"
                >
                  Show
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="text-black hover:bg-black hover:text-white"
                >
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
