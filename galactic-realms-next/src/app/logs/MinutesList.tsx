import { minutesData } from './LogData';
import { LogLink } from './LogLink';






export function MinutesList() {
  return(
    <ul className='flex flex-col items-center justify-start gap-4 my-4 w-[800px] max-w-[800px]'>
      {minutesData.map(({date, href}) => ( 
        <LogLink key={href} date={date} href={href}/> 
      ))}
    </ul>
  );
}
