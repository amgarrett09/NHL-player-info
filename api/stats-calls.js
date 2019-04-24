import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://statsapi.web.nhl.com/api/v1/people',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getBasicInfo(id) {
    return apiClient.get(`/${id}`);
  },
  getSeasonStats(id) {
    return apiClient.get(`/${id}/stats?stats=yearByYear,careerRegularSeason`);
  },
  getPlayoffStats(id) {
    return apiClient.get(`/${id}/stats?stats=yearByYearPlayoffs,careerPlayoffs`);
  },
  getGameLog(id) {
    return apiClient.get(`/${id}/stats?stats=gameLog`);
  },
  getCombinedStats(id) {
    return apiClient.get(`/${id}/stats?stats=yearByYear,careerRegularSeason,yearByYearPlayoffs,careerPlayoffs,gameLog`);
  },
};
