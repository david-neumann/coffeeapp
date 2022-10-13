import { useState } from 'react';
import LogEntryExpanded from './LogEntryExpanded';
import { ThumbsDown, ThumbsUp } from 'react-feather';

const LogEntry = ({
  brewMethod,
  ratio,
  waterAmount,
  coffeeDose,
  grinderName,
  grindSize,
  liked,
  brewMethods,
}) => {
  const entryBrewMethod = brewMethods.find(method => method._id === brewMethod);
  const { methodName, iconUrlPath } = entryBrewMethod;

  const [isExpanded, setIsExpanded] = useState(false);

  return isExpanded ? (
    <LogEntryExpanded
      liked={liked}
      setIsExpanded={setIsExpanded}
      methodName={methodName}
      iconUrlPath={iconUrlPath}
      ratio={ratio}
      waterAmount={waterAmount}
      coffeeDose={coffeeDose}
      grinderName={grinderName}
      grindSize={grindSize}
    />
  ) : (
    <div
      className='bg-stone-100 w-full h-12 px-4 rounded flex justify-between items-center font-["Caslon_Doric_Semibold"] shadow mb-3 cursor-pointer'
      onClick={() => setIsExpanded(true)}
    >
      <img
        src={`/coffee_icons/${iconUrlPath}`}
        alt={methodName}
        className='w-10 aspect-square p-2 bg-stone-50 rounded-xl shadow'
      />
      <span className='h-8 border-l border-stone-300'></span>
      <p className='-mb-[2px] text-coffee text-sm'>{ratio}g/L</p>
      <span className='h-8 border-l border-stone-300'></span>
      <p className='-mb-[2px] text-coffee text-sm uppercase'>{grindSize}</p>
      <span className='h-8 border-l border-stone-300'></span>
      {liked ? (
        <ThumbsUp size={20} color='#10b981' strokeWidth={2} className='mb-1' />
      ) : (
        <ThumbsDown
          size={20}
          color='#e11d48'
          strokeWidth={2}
          className='mb-1'
        />
      )}
    </div>
  );
};

export default LogEntry;
