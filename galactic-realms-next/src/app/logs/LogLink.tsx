import { LogData } from './LogData';

export function LogLink({date, href}: LogData) {
  return(
    <li>
      <a
            type="button"
            target="blank"
            href={`minutes/${href}`}
            style={{ fontSize: "24px" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60 min-w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="#1D4ED8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
              <path d="M13 3v6h6" />
            </svg>
            {date}
          </a>
    </li>
  );
}
