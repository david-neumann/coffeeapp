const BrewMethodTile = ({ methodName, iconUrlPath }) => {
  return (
    <div className='flex flex-col items-center w-28'>
      <img
        src={`/coffee_icons/${iconUrlPath}`}
        alt={methodName}
        className='p-3 mb-1 w-28 aspect-square bg-white border-2 border-coffee rounded'
      />
      <p className='text-sm font-light text-coffee'>{methodName}</p>
    </div>
  );
};

export default BrewMethodTile;
