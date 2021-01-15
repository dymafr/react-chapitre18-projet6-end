import * as axios from 'axios';

export const apiFirebase = axios.create({
  baseURL: 'https://films-d7fa0.firebaseio.com/',
});

export const apiHelpers = {
  fetchFavoris: () =>
    apiFirebase
      .get('favoris.json')
      .then((response) => (response.data ? response.data : [])),
  saveFavoris: (favoris) => apiFirebase.put('favoris.json', favoris),
};

export default apiHelpers;
