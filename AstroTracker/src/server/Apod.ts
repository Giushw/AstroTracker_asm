import axios from 'axios';
import {COMMON_PARAMS} from './common';
import {formatDate} from '../lib/utils';
import type {Apods} from '../types/decoders/Apods';

const apiClient = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  headers: {
    'Content-Type': 'application/json',
  },
});

const today = new Date();
const formattedToday = formatDate(today);

// 7 days prior
const priorDate = new Date();
priorDate.setDate(today.getDate() - 7);
const formattedPriorDate = formatDate(priorDate);

/**
 * Apod
 * Fetches APOD data based on the provided timelapse.
 * Start and End year should be formatted as YYYY-MM-DD (e.g., 2015-09-08).
 * @param {string} yearStart - The starting year of the timelapse.
 * @param {string} yearEnd - The ending year of the timelapse.
 * @returns {Promise<Apods>} A promise that resolves to the fetched Neo data.
 * @example 
 * const data = await getApod('2023-06-01', '2023-06-07');
 */
export const getApod = async (
  yearStart?: string,
  yearEnd?: string,
): Promise<Apods> => {
  try {
    const response = await apiClient.get('/apod', {
      params: {
        ...COMMON_PARAMS,
        start_date: yearStart ?? formattedPriorDate,
        end_date: yearEnd ?? formattedToday,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
