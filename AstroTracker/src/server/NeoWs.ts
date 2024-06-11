import axios from 'axios';
import {COMMON_PARAMS} from './common';

const apiClient = axios.create({
  baseURL: 'https://api.nasa.gov/neo/rest/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Neo - Feed
 * Fetches NEO data based on the provided timelapse.
 * Start and End date should be formatted as YYYY-MM-DD (e.g., 2015-09-08).
 * @param {string} startDate - The starting date of the timelapse.
 * @param {string} endDate - The ending date of the timelapse.
 * @returns {Promise<Object>} A promise that resolves to the fetched Neo data.
 * @example 
 * const data = await getFeed('2023-06-01', '2023-06-07');
 */
export const getFeed = async (startDate: string, endDate: string): Promise<object> => {
  try {
    const response = await apiClient.get('/feed', {
      params: {
        ...COMMON_PARAMS,
        start_date: startDate,
        end_date: endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Neo - Lookup
 * Fetches detailed information about a specific NEO.
 * @param {string} id - The ID of the NEO to lookup.
 * @returns {Promise<Object>} A promise that resolves to the fetched Neo data.
 * @example
 * const data = await getLookup('3542519');
 */
export const getLookup = async (id: string): Promise<object> => {
  try {
    const response = await apiClient.get(`/neo/${id}`, {
      params: {
        ...COMMON_PARAMS,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Neo - Browse
 * Fetches a paginated list of NEOs.
 * @returns {Promise<Object>} A promise that resolves to the fetched Neo data.
 * @example
 * const data = await getBrowse();
 */
export const getBrowse = async (): Promise<object> => {
  try {
    const response = await apiClient.get('/neo/browse', {
      params: {
        ...COMMON_PARAMS,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
