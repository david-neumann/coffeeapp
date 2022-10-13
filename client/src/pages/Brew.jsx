import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import LikedBrewIcon from '../components/LikedBrewIcon';
import { useNavigate } from 'react-router-dom';

const Brew = ({ brewMethods, currentId }) => {
  // Get brew method name and url path for header
  const brewMethodObj = brewMethods.find(method => method._id === currentId);
  const { methodName, iconUrlPath } = brewMethodObj;

  // Set up initial inputs and state for the brew form
  const initialInputs = {
    waterAmount: 250,
    ratio: 60,
    grinderName: '',
    grindSize: 'Medium-Fine',
  };

  const [brewInputs, setBrewInputs] = useState(initialInputs);

  const handleChange = e => {
    const { name, value } = e.target;
    setBrewInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // State for .liked property in log entry
  const [likedBrew, setLikedBrew] = useState('');

  // Automatically calculate the coffee dose based on inputs for water and ratio
  const calcCoffeeDose = (waterAmount, ratio) => {
    const denominator = 1000 / waterAmount;
    const coffeeDose = ratio / denominator;
    return coffeeDose;
  };

  const coffeeDose = calcCoffeeDose(brewInputs.waterAmount, brewInputs.ratio);

  // Handle POST request for form submit
  const addLogEntry = newLogEntry => {
    axios
      .post('/api/log', newLogEntry)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const logObj = {
      ...brewInputs,
      coffeeDose,
      liked: likedBrew,
      brewMethod: currentId,
    };
    addLogEntry(logObj);
    setLikedBrew('');
    navigate('/');
  };

  return (
    <>
      <Header methodName={methodName} iconUrlPath={iconUrlPath} />

      <main className='mx-8 pb-12'>
        <h2 className='font-["Caslon_Doric_Semibold"] text-xl mb-12 w-full text-center'>
          <span className='before:block before:absolute before:h-5/6 before:w-11/12 before:left-4 before:top-[2px] before:-inset-1 before:-skew-y-2 before:bg-gradient-to-tr from-purple-200 to-purple-50 relative inline-block'>
            <span className='relative text-coffee'>
              Let's gather the details for your brew...
            </span>
          </span>
        </h2>
        <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/mug.svg'
              alt='coffee mug'
              className='px-3 w-[90px] aspect-square bg-purple-50 rounded-3xl shadow-md'
            />
            <div>
              <label className='mb-2 text-coffee'>
                How much coffee would you like to brew (ml)?
              </label>
              <input
                type='number'
                placeholder='250ml'
                name='waterAmount'
                value={brewInputs.waterAmount}
                onChange={handleChange}
                onFocus={e => e.target.select()}
                className='block p-2 w-28 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              />
            </div>
          </div>
          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/carafe.svg'
              alt='carafe'
              className='px-3 w-[90px] aspect-square bg-amber-50 rounded-3xl shadow-md'
            />
            <div>
              <label className='mb-2 text-coffee'>
                What ratio would you like to use?
              </label>
              <select
                name='ratio'
                value={brewInputs.ratio}
                onChange={handleChange}
                className='block p-2 w-28 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              >
                <option value='50'>50g/liter</option>
                <option value='55'>55g/liter</option>
                <option value='60'>60g/liter</option>
                <option value='65'>65g/liter</option>
                <option value='70'>70g/liter</option>
                <option value='75'>75g/liter</option>
              </select>
            </div>
          </div>
          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/scale.svg'
              alt='coffee scale'
              className='px-3 w-[90px] aspect-square bg-cyan-50 rounded-3xl shadow-md'
            />
            <div>
              <p className='mb-2 text-coffee'>
                Based on your preferred ratio, grind this amount of coffee (g):
              </p>
              <p className='p-2 w-28 text-coffee font-["Caslon_Doric_Semibold"] rounded border'>
                {Number.parseFloat(coffeeDose).toFixed(1)}
              </p>
            </div>
          </div>

          <hr className='mb-6' />

          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/grinder.svg'
              alt='coffee grinder'
              className='px-3 py-2 w-[90px] aspect-square bg-rose-50 rounded-3xl shadow-md'
            />
            <div>
              <label className='mb-2 text-coffee'>
                What grinder are you using?
              </label>
              <input
                type='text'
                placeholder='e.g., Fellow Ode'
                name='grinderName'
                value={brewInputs.grinderName}
                onChange={handleChange}
                className='block p-2 w-full text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              />
            </div>
          </div>
          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/grinder.svg'
              alt='coffee grinder'
              className='px-3 py-2 w-[90px] aspect-square bg-teal-50 rounded-3xl shadow-md'
            />
            <div>
              <label className='mb-2 text-coffee'>Select a grind size:</label>
              <select
                name='grindSize'
                value={brewInputs.grindSize}
                onChange={handleChange}
                className='block p-2 w-44 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              >
                <option value='Fine'>Fine</option>
                <option value='Medium-Fine'>Medium-Fine</option>
                <option value='Medium'>Medium</option>
                <option value='Medium-Coarse'>Medium-Coarse</option>
                <option value='Coarse'>Coarse</option>
              </select>
            </div>
          </div>
          <h2 className='font-["Caslon_Doric_Semibold"] text-xl mt-16 mb-12 w-full text-center'>
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gradient-to-tr from-cyan-200 to-cyan-50 relative inline-block'>
              <span className='relative text-coffee'>
                Time to brew your coffee!
              </span>
            </span>
          </h2>
          <p className='text-center mb-8'>Did you like it?</p>
          <LikedBrewIcon likedBrew={likedBrew} setLikedBrew={setLikedBrew} />
          <button className='bg-emerald-200 py-3 px-12 rounded-2xl font-["Caslon_Doric_Bold"] text-xl text-coffee place-self-center'>
            Save your brew!
          </button>
        </form>
      </main>
    </>
  );
};

export default Brew;
