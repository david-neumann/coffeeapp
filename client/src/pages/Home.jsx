import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BrewMethodTile from '../components/BrewMethodTile';

const Home = ({ brewMethods, setId }) => {
  const renderedBrewMethods = brewMethods.map(brewMethod => (
    <BrewMethodTile {...brewMethod} setId={setId} key={brewMethod._id} />
  ));

  return (
    <>
      <Header headerText={'Choose a brew method to get started'} />
      <main className='m-8'>
        <section className='flex flex-wrap justify-between gap-y-3 mb-12'>
          {renderedBrewMethods}
        </section>
        <div className='w-full'>
          <Link to={'/coffeelog'}>
            <button className='bg-emerald-200 py-3 px-12 rounded-2xl font-["Caslon_Doric_Bold"] text-xl text-coffee mx-auto block'>
              View your brew log
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
