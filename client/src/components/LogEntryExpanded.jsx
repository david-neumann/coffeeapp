import { ThumbsDown, ThumbsUp } from 'react-feather';

const LogEntryExpanded = ({
  liked,
  setIsExpanded,
  methodName,
  iconUrlPath,
  ratio,
  waterAmount,
  coffeeDose,
  grinderName,
  grindSize,
}) => {
  return (
    <div
      className='bg-stone-100 w-full p-4 rounded items-center font-["Caslon_Doric_Semibold"] shadow mb-3 cursor-pointer'
      onClick={() => setIsExpanded(false)}
    >
      <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center'>
          <img
            src={`/coffee_icons/${iconUrlPath}`}
            alt={methodName}
            className='w-12 aspect-square p-2 bg-stone-50 rounded-xl shadow'
          />
          <h3 className='font-["Caslon_Doric_Bold"] text-coffee text-xl ml-2'>
            {methodName}
          </h3>
        </div>
        <div>
          {liked ? (
            <ThumbsUp
              size={28}
              color='#10b981'
              strokeWidth={2}
              className='mb-1'
            />
          ) : (
            <ThumbsDown
              size={28}
              color='#e11d48'
              strokeWidth={2}
              className='mb-1'
            />
          )}
        </div>
      </div>
      <hr className='mb-3' />
      <div>
        <div className='flex gap-x-12 mb-4'>
          <div>
            <p className='font-["Caslon_Doric_Light"] text-coffee text-xs uppercase'>
              Ratio
            </p>
            <p className='font-["Caslon_Doric_Bold"] text-coffee text-lg'>
              {ratio}g/L
            </p>
          </div>
          <div>
            <p className='font-["Caslon_Doric_Light"] text-coffee text-xs uppercase'>
              Water
            </p>
            <p className='font-["Caslon_Doric_Bold"] text-coffee text-lg'>
              {waterAmount}ml
            </p>
          </div>
          <div>
            <p className='font-["Caslon_Doric_Light"] text-coffee text-xs uppercase'>
              Coffee
            </p>
            <p className='font-["Caslon_Doric_Bold"] text-coffee text-lg'>
              {coffeeDose}g
            </p>
          </div>
        </div>

        <div className='flex gap-x-12'>
          <div>
            <p className='font-["Caslon_Doric_Light"] text-coffee text-xs uppercase'>
              Grinder
            </p>
            <p className='font-["Caslon_Doric_Bold"] text-coffee text-lg'>
              {grinderName}
            </p>
          </div>
          <div>
            <p className='font-["Caslon_Doric_Light"] text-coffee text-xs uppercase'>
              Grind Size
            </p>
            <p className='font-["Caslon_Doric_Bold"] text-coffee text-lg'>
              {grindSize}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogEntryExpanded;
