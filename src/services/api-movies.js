import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    API_KEY: '3bfeb78ba6df5af22a5c39d335985fa7',
  },
});

export const fetchTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};
