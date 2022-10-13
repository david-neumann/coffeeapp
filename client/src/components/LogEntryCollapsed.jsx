import { ThumbsDown, ThumbsUp } from 'react-feather';

const LogEntryCollapsed = ({
  brewMethod,
  ratio,
  grindSize,
  liked,
  brewMethods,
}) => {
  const entryBrewMethod = brewMethods.find(method => method._id === brewMethod);
  const { methodName, iconUrlPath } = entryBrewMethod;

  return (
    <div className='bg-stone-100 w-full h-12 px-4 rounded flex justify-between items-center font-["Caslon_Doric_Semibold"] shadow mb-3'>
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

export default LogEntryCollapsed;
