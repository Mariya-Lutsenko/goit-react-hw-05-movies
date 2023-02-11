import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '3bfeb78ba6df5af22a5c39d335985fa7',
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

// 3bfeb78ba6df5af22a5c39d335985fa7
