// import { useState, useEffect } from 'react';
// import axios from 'axios';
import BrewMethodTile from '../components/BrewMethodTile';

const Home = ({ brewMethods, setId }) => {
  const renderedBrewMethods = brewMethods.map(brewMethod => (
    <BrewMethodTile {...brewMethod} setId={setId} key={brewMethod._id} />
  ));

  return (
    <>
      <header className='bg-emerald-200 rounded-b-[40px] pt-10 pb-2 px-8'>
        <h1 className='text-3xl font-["Caslon_Doric_Bold"] text-coffee mb-10 underline decoration-4 underline-offset-4 decoration-yellow-100'>
          Choose a brew method to get started
        </h1>
      </header>
      <main className='m-8'>
        <section className='flex flex-wrap justify-between gap-y-3'>
          {renderedBrewMethods}
        </section>
      </main>
    </>
  );
};

export default Home;
