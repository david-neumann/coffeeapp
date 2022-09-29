import { Routes, Route } from 'react-router-dom';
import Brew from './pages/Brew';
import CoffeeLog from './pages/CoffeeLog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brew/:methodName' element={<Brew />} />
        <Route path='/coffeelog' element={<CoffeeLog />} />
      </Routes>
    </div>
  );
};

export default App;
