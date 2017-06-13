import axios from 'axios';

export const FETCH_SEARCH_RESULTS = 'fetch_search_results';

const ROOT_URL = 'https://earlybirdsearch.herokuapp.com/?';

export function fetchSearchResults(term, location) {
  const request = axios.get(`${ROOT_URL}business=${term}&location=${location}`);

  return {
    type: FETCH_SEARCH_RESULTS,
    payload: request
  }
}
