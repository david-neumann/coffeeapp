import { ThumbsDown, ThumbsUp } from 'react-feather';

const LikedBrewIcon = ({ likedBrew, setLikedBrew }) => {
  if (likedBrew === '') {
    return (
      <div className='flex justify-center gap-x-8 mb-12 transition-all'>
        <div
          className='hover:cursor-pointer'
          onClick={() => setLikedBrew(false)}
        >
          <ThumbsDown size={48} color='#e11d48' strokeWidth={2.5} />
        </div>
        <div
          className='hover:cursor-pointer'
          onClick={() => setLikedBrew(true)}
        >
          <ThumbsUp size={48} color='#10b981' strokeWidth={2.5} />
        </div>
      </div>
    );
  } else if (likedBrew) {
    return (
      <div className='mb-12 w-full transition-all'>
        <ThumbsUp
          size={60}
          color='#10b981'
          strokeWidth={3}
          className='mx-auto'
        />
      </div>
    );
  }
  return (
    <div className='mb-12 w-full transition-all'>
      <ThumbsDown
        size={60}
        color='#e11d48'
        strokeWidth={3}
        className='mx-auto'
      />
    </div>
  );
};

export default LikedBrewIcon;
