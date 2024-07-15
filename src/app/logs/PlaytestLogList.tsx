import { playtestData } from './LogData';
import { LogLink } from './LogLink';



export function PlaytestLogList() {
  return(
    <ul className='flex flex-col items-center justify-start gap-4 my-4 w-[800px] max-w-[800px]'>
      {playtestData.map(({label, href}) => ( 
        <LogLink key={href} label={label} href={href}/> 
      ))}
    </ul>
  );
}
