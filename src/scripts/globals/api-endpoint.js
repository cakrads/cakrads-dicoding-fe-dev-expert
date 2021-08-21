import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  LIST: `${BASE_URL}list`,
  DETAIL: (id) => `${BASE_URL}detail/${id}`,
  REVIEW: `${BASE_URL}review`,
  SEARCH: (query) => `${BASE_URL}search?q=${query}`,
};

export default API_ENDPOINT;
