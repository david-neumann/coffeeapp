import { useState, useEffect } from 'react';
import axios from 'axios';
import BrewMethodTile from '../components/BrewMethodTile';

const Home = () => {
  const [brewMethods, setBrewMethods] = useState([]);

  const getBrewMethods = () => {
    axios
      .get('/api/brewmethods')
      .then(res => setBrewMethods(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBrewMethods();
  }, []);

  const renderedBrewMethods = brewMethods.map(brewMethod => (
    <BrewMethodTile {...brewMethod} key={brewMethod._id} />
  ));

  return (
    <main className='m-8'>
      <h1 className='text-3xl font-extrabold text-coffee mb-6'>
        Choose a brew method to get started
      </h1>
      <section className='flex flex-wrap justify-between gap-y-3'>
        {renderedBrewMethods}
      </section>
    </main>
  );
};

export default Home;
