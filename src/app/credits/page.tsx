import { PageTitle } from "@/components/layout/PageTitle";

// import contribImg from '/public/contribution'

export default function CreditsPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Credits</PageTitle>

      <div className='w-[60rem] flex flex-col items-center justify-start'>
        <iframe 
          src='contributions/iat-210_group-contributions.pdf#view=fit'
          className='object-scale-down w-full h-[34rem] object-center'
        />
      </div>
    </main>
  );
}
