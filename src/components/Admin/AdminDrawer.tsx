import { useStore } from "@/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMotorbikeFill } from "react-icons/ri";


const AdminSideBar = () => {
  const translateSideBar = useStore((state) => state.translateSiderbar);
  const pathname = usePathname()

  return (
    <div className={`absolute md:relative z-40`}>
      <aside
        className={`z-40 border-r border-blue-200 transition-transform bg-blue-200 md:bg-transparent min-h-screen ${translateSideBar} md:translate-x-0 `}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium mt-4">
            <li>
              <Link
                href="/admin/dashboard"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.startsWith('/admin/dashboard') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            
            <li>
              <Link
                href="/admin/inbox"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.startsWith('/admin/inbox') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.startsWith('/admin/users') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/bikes"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.startsWith('/admin/bikes') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <RiMotorbikeFill className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Bikes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/featured-bikes"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.startsWith('/admin/featured-bikes') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <RiMotorbikeFill className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Featured Bikes</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSideBar;
