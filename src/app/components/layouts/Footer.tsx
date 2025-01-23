export default function Footer() {
  return (
    <footer className="w-full p-4 bg-white border-t border-black shadow bottom-0 left-0 z-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row justify-between md:items-start w-full md:w-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-start mt-3 text-sm font-medium text-gray-500 items-center">
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Manage Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-start w-full md:w-auto md:mt-3 mt-0">
          <ul className="flex flex-col md:flex-row justify-center md:justify-start md:mt-3 mt-0 text-sm font-medium text-gray-500 items-center">
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mb-2 md:mb-0 me-4 md:me-6">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-start w-full md:w-auto mt-3 md:mt-0">
        <span className="text-gray-500 text-sm md:text-base">
          © 2022 bajji, Inc. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
