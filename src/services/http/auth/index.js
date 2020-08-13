import {http} from '../index';
import * as formatters from './formatters';

export const getProfile = () => {
  return http.get('/profile').then(formatters.addFullName);
};
