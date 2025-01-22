export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="flex flex-col">
        <ul className="flex flex-wrap items-left mt-3 text-sm font-medium text-gray-500">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Manage Cookies
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-left">
          © 2022 bajji, Inc. All Rights Reserved.
        </span>
      </div>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Company
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Help
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Contact us
          </a>
        </li>
      </ul>
    </footer>
  );
}
