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
            Our team did two playtests. Each playtest log contains the
            challenges or difficulties that our team faced (as players) during
            each round. It also contains adjustments of the game mechanics that
            our team made after each playtesting.
          </p>
        </div>
        <div className="col-span-4 mt-5 mb-5 row-start-2 col-start-2">
          <p>
            Click the following buttons to view the PDF file for each play test
            logs.{" "}
          </p>
        </div>
        <div className="row-start-3 col-start-2">
          <a
            type="button"
            target="blank"
            href="https://docs.google.com/document/d/1F99065wgKU0aB1ptlso5hC0aZHRO7kbmLagaGRE_XZU/edit"
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
          </a>
        </div>
        <div className="row-start-3 col-start-5">
          <a
            href="https://docs.google.com/document/d/1REpbTSg4ofy3Ug02IiUXoxOZlTNaudHdGWQijnISG4A/edit"
            type="button"
            target="blank"
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
          </a>
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
        
        {/* Meeting Minutes #1 */}
        <div className="col-start-2 row-start-3">
          <a
            target="blank"
            href="minutes/iat-210_minutes_may-23.pdf"
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
          </a>
        </div>

        {/* Meeting Minutes #2 */}
        <div className="col-start-5 row-start-3">
          <a
            target="blank"
            href="minutes/iat-210_minutes_june-5.pdf"
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
          </a>
        </div>
      </div>
    </main>
  );
}
