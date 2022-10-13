import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import LogEntry from '../components/LogEntry';
import { Link } from 'react-router-dom';

const CoffeeLog = ({ brewMethods }) => {
  const [logEntries, setLogEntries] = useState([]);

  const getLogEntries = () => {
    axios
      .get('/api/log')
      .then(res => setLogEntries(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => getLogEntries(), []);

  console.log(logEntries);

  const renderedLogEntries = logEntries.map((log, index) => (
    <LogEntry {...log} brewMethods={brewMethods} key={index} />
  ));

  return (
    <>
      <Header headerText={'Your coffee log'} />
      <main className='mx-8 mt-12'>
        {renderedLogEntries}
        <Link to={'/'}>
          <button className='block mx-auto mt-12 bg-emerald-200 py-3 px-12 rounded-2xl font-["Caslon_Doric_Bold"] text-xl text-coffee'>
            Return to Home
          </button>
        </Link>
      </main>
    </>
  );
};

export default CoffeeLog;
