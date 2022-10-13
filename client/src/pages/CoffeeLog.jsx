import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import LogEntryCollapsed from '../components/LogEntryCollapsed';

const CoffeeLog = ({ brewMethods }) => {
  const [logEntries, setLogEntries] = useState([]);

  const getLogEntries = () => {
    axios
      .get('/api/log')
      .then(res => setLogEntries(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => getLogEntries(), []);

  const renderedLogEntries = logEntries.map((log, index) => (
    <LogEntryCollapsed {...log} brewMethods={brewMethods} key={index} />
  ));

  return (
    <>
      <Header headerText={'Your coffee log'} />
      <main className='mx-8 mt-12'>{renderedLogEntries}</main>
    </>
  );
};

export default CoffeeLog;
