import {SlimNeoEntity} from "../components/common/AstroCard.vue";
import {NeoEntity} from "../types/decoders/NeoWs";

/**
 * formatDate
 * Format passed Date into 'YYYY-MM-DD'.
 * @param {Date} date - The Date to transform.
 * @returns {string} A promise that resolves to the fetched Neo data.
 * @example 
 * const data = await formatDate(new Date());
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const monthNamesLong = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * formatTextualDate
 * Format a date string 'YYYY-MM-DD' into 'DD Month YYYY'.
 * @param {string} dateStr - The date string to transform.
 * @param {boolean} [long=false] - Flag to determine if extended month names should be used.
 * @returns {string} Formatted date string.
 * @example 
 * const formattedDate = formatTextualDate('2024-06-14', true); // '14 June 2024'
 * const formattedDateShort = formatTextualDate('2024-06-14'); // '14 Jun 2024'
 */
export function formatTextualDate(dateStr: string, long: boolean = false): string {
  try {
    const subDate = dateStr.split('-');
    const year = subDate[0];
    const monthIndex = parseInt(subDate[1]) - 1;
    const month = long ? monthNamesLong[monthIndex] : monthNames[monthIndex];
    const day = subDate[2];
  
    return `${day} ${month} ${year}`;
  } catch (error) {
    console.error('Invalid date format:', error);
    return 'Invalid Date';
  }
};

/**
 * formatNumberWithCommas
 * Formats a number to a string with commas as thousands separators.
 * @param {number|string} num - The number to format.
 * @returns {string} The formatted number string.
 * @example 
 * const formattedNumber = formatNumberWithCommas(49570324.806696868); // '49,570,324'
 */
export function formatNumberWithCommas(num: number | string): string {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(number)) {
    console.error('Invalid number format');
    return 'Invalid Number';
  }
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(number);
};

/**
 * formatAsteroidName
 * Formats an asteroid name to remove parentheses and spaces.
 * @param {string} name - The asteroid name to format.
 * @returns {string} The formatted asteroid name.
 * @example 
 * const formattedName1 = formatAsteroidName("393569 (2003 JC13)"); // '2003JC13'
 * const formattedName2 = formatAsteroidName("(2015 BN311)"); // '2015BN311'
 */
export function formatAsteroidName(name: string): string {
  const regex = /\(([^)]+)\)/;
  const match = name.match(regex);
  
  if (match && match[1]) {
    return match[1].replace(/\s+/g, '');
  } else {
    console.error('Invalid asteroid name format');
    return 'Invalid Name';
  }
};

/**
 * getRandomInt
 * Return a random integer form 0 to max;
 * @param {number} max - The Max integer.
 * @returns {number} A number.
 * @example 
 * const data = getRandomInt(2);
 */
export const getRandomInt = (max: number): number =>  Math.floor(Math.random() * max);

/**
 * parseAstros
 * Return a parsed response for astro data;
 * @param {NeoEntity[]} collection - An array of NeoEntity.
 * @returns {SlimNeoEntity[]} A lighter version of the response data for visualization.
 * @example 
 * const data = parseAstros(neoEntities);
 */
export const parseAstros = (collection: NeoEntity[]) : SlimNeoEntity[] => {
  const parsedAstro = collection.map(c => ({
    id: c.neo_reference_id,
    name: c.name,
    dangerous: c.is_potentially_hazardous_asteroid,
    diameter: {
      min: c.estimated_diameter.meters.estimated_diameter_min,
      max: c.estimated_diameter.meters.estimated_diameter_max
    },
    closeApproac: {
      date: {
        normal: c.close_approach_data[0].close_approach_date,
        full: c.close_approach_data[0].close_approach_date_full
      },
      velocity: c.close_approach_data[0].relative_velocity.kilometers_per_second,
      distance: c.close_approach_data[0].miss_distance.kilometers
    }
  }));
  return parsedAstro;
};

/**
 * hoursSince
 * Return a time since the passed data have come;
 * @param {string} dateString - The starting point.
 * @returns {number} a number signaling how much time have passed in hours.
 * @example 
 * const hours = hoursSince('2024-Jun-14 10:57');
 */
export const hoursSince = (dateString: string): number => {
  const date = new Date(dateString);
  const now = new Date();

  const diffInMs = now.getTime() - date.getTime();

  const hoursPassed = Math.floor(diffInMs / (1000 * 60 * 60));

  return hoursPassed;
}
