import { PageTitle } from "@/components/layout/PageTitle";
import { MinutesList } from './MinutesList';
import { PlaytestLogList } from './PlaytestLogList';

export default function LogsPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start py-24"
    >
     

      <PageTitle>Meeting Minutes</PageTitle>

        <div className='w-[800px] flex-col flex items-start justify-start gap-4'>
          <p>
            Each meeting minutes contains information about the time,
            location, and participants for each meeting. It also contains
            details about what our team discussed during the meeting.
          </p>
    
          <p>
            Click the following buttons to view the PDF of the minutes for each meeting.{" "}
          </p>

          <div className='flex-col flex items-center justify-start w-full'>
            <MinutesList />
          </div>
        </div>


      {/* divider */}
      <div className="mt-10"></div>

      <PageTitle>Play testing Logs</PageTitle>
      <div className='w-[800px] flex-col flex items-start justify-start gap-4'>
          <p>
            Our team did two playtests. Each playtest log contains the
            challenges or difficulties that our team faced (as players) during
            each round. It also contains adjustments of the game mechanics that
            our team made after each playtesting.
          </p>
          <p>
            Click the following buttons to view the PDF file for each play test
            logs.{" "}
          </p>

          <div className='flex-col flex items-center justify-start w-full'>
            <PlaytestLogList />
          </div>
        </div>
       

    </main>
  );
}
