import axios from 'axios';

export const getBrewMethods = () => {
  axios
    .get('/api/brewmethods')
    .then(res => setBrewMethods(res.data))
    .catch(err => console.log(err));
};
