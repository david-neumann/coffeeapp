import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Brew from './pages/Brew';
import CoffeeLog from './pages/CoffeeLog';
import Home from './pages/Home';

const App = () => {
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

  // State to be used to pass to Brew page once a tile is clicked in order to get brew method details
  const [currentBrewMethodId, setCurrentBrewMethodId] = useState('');

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Home brewMethods={brewMethods} setId={setCurrentBrewMethodId} />
          }
        />
        <Route
          path='/brew/:methodName'
          element={
            <Brew brewMethods={brewMethods} currentId={currentBrewMethodId} />
          }
        />
        <Route
          path='/coffeelog'
          element={<CoffeeLog brewMethods={brewMethods} />}
        />
      </Routes>
    </div>
  );
};

export default App;
