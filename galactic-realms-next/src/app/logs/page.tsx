import { PageTitle } from "@/components/layout/PageTitle";

export default function LogsPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Play testing Logs</PageTitle>
      <div className="grid grid-flow-col grid-cols-6 mb-10">
        <div className="col-span-4 col-start-2">
          <p>
            Our team did two playtestings. Each playtesting log contains the
            challenges or difficulties that our team faced (as players) during
            each round. It also contains adjustments of the game mechanics that
            our team made after each playtesting.
          </p>
        </div>
        <div className="col-span-4 mt-5 mb-5 row-start-2 col-start-2">
          <p>
            Click the following buttons to view the PDF file for each meeting
            minutes.{" "}
          </p>
        </div>
        <div className="row-start-3 col-start-2">
          <button
            type="button"
            style={{ fontSize: "24px" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            Play test 1
          </button>
        </div>
        <div className="row-start-3 col-start-5">
          <button
            type="button"
            style={{ fontSize: "24px", marginLeft: "auto" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
              <path d="M13 3v6h6" />
            </svg>
            Play test 2
          </button>
        </div>
      </div>

      {/* divider */}
      <div className="mt-10"></div>

      <PageTitle>Group meet Logs</PageTitle>
      <div className="grid grid-flow-col grid-cols-6">
        <div className="col-span-4 col-start-2">
          <p>
            Each meeting minutes contains information about the timing,
            location, and participants for each meeting. It also contains
            details about what our team discussed during the meeting.
          </p>
        </div>
        <div className="col-span-4 col-start-2 mt-5 mb-5 row-start-2">
          <p>
            Click the following buttons to view the PDF file for each meeting
            minutes.{" "}
          </p>
        </div>
        <div className="col-start-2 row-start-3">
          <button
            type="button"
            style={{ fontSize: "24px" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            Group meet 1
          </button>
        </div>
        <div className="col-start-5 row-start-3">
          <button
            type="button"
            style={{ fontSize: "24px" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
              <path d="M13 3v6h6" />
            </svg>
            Group meet 2
          </button>
        </div>
      </div>
    </main>
  );
}
