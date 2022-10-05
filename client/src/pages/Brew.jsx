import { useState } from 'react';
import { ThumbsDown, ThumbsUp } from 'react-feather';

const Brew = () => {
  const initialInputs = {};

  return (
    <>
      <header className='flex items-center gap-x-2 bg-emerald-200 rounded-b-[40px] pt-10 pb-6 px-6 mb-8'>
        <img
          src='/coffee_icons/v60.svg'
          alt='Hario V60'
          className='mx-2 p-2 w-16 aspect-square bg-stone-50 rounded-3xl'
        />
        <h1 className='text-4xl font-["Caslon_Doric_Bold"] text-coffee underline decoration-4 underline-offset-4 decoration-yellow-100'>
          Hario V60
        </h1>
      </header>
      <main className='mx-8 pb-12'>
        <h2 className='font-["Caslon_Doric_Semibold"] text-xl mb-12 w-full text-center'>
          <span className='before:block before:absolute before:h-5/6 before:w-11/12 before:left-4 before:top-[2px] before:-inset-1 before:-skew-y-2 before:bg-gradient-to-tr from-purple-200 to-purple-50 relative inline-block'>
            <span className='relative text-coffee'>
              Let's gather the details for your brew...
            </span>
          </span>
        </h2>
        <form className='flex flex-col justify-center'>
          <div className='w-full flex gap-x-4 items-center mb-6'>
            <img
              src='/coffee_icons/mug.svg'
              alt='coffee mug'
              className='px-3 w-[90px] aspect-square bg-purple-50 rounded-3xl shadow-md'
            />
            <div>
              <label className='mb-2 text-coffee'>
                How much coffee would you like to brew?
              </label>
              <input
                type='number'
                placeholder='250ml'
                name='waterAmount'
                // value={}
                // onChange={}
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
                // value={}
                // onChange={}
                className='block p-2 w-28 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              >
                <option value='50'>50g/liter</option>
                <option value='55'>55g/liter</option>
                <option value='60' selected>
                  60g/liter
                </option>
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
              <label className='mb-2 text-coffee'>
                Based on your preferred ratio, grind this amount of coffee (g):
              </label>
              <input
                type='number'
                disabled
                name='coffeeDose'
                value={15}
                // onChange={}
                className='block p-2 w-28 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              />
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
                placeholder='Fellow Ode'
                name='grinderName'
                // value={}
                // onChange={}
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
                // value={}
                // onChange={}
                className='block p-2 w-44 text-coffee font-["Caslon_Doric_Semibold"] rounded border focus:outline-none focus:border focus:border-emerald-400 focus:ring-1 focus:ring-emerald-300'
              >
                <option value='fine'>Fine</option>
                <option value='medium-fine' selected>
                  Medium-Fine
                </option>
                <option value='medium'>Medium</option>
                <option value='medium-coarse'>Medium-Coarse</option>
                <option value='coarse'>Coarse</option>
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
          <div className='flex justify-center gap-x-8 mb-12'>
            <div className='hover:cursor-pointer'>
              <ThumbsDown size={48} color='#e11d48' strokeWidth={2.5} />
            </div>
            <div className='hover:cursor-pointer'>
              <ThumbsUp size={48} color='#10b981' strokeWidth={2.5} />
            </div>
          </div>
          <button className='bg-emerald-200 py-3 px-12 rounded-2xl font-["Caslon_Doric_Bold"] text-xl text-coffee place-self-center'>
            Save your brew!
          </button>
        </form>
      </main>
    </>
  );
};

export default Brew;
