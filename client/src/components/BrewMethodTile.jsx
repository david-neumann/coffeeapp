import { Link } from 'react-router-dom';

const BrewMethodTile = ({ methodName, iconUrlPath }) => {
  const methodUrlName = methodName.replace(/\s/g, '').toLowerCase();

  return (
    <Link to={`/brew/${methodUrlName}`}>
      <div className='flex flex-col items-center w-28 border border-coffee hover:border-2 hover:border-coffee rounded-5xl'>
        <img
          src={`/coffee_icons/${iconUrlPath}`}
          alt={methodName}
          className='px-3 pt-3 pb-2 mb-1 w-28 aspect-square'
        />
        <p className='mb-3 text-sm font-medium text-coffee'>{methodName}</p>
      </div>
    </Link>
  );
};

export default BrewMethodTile;
