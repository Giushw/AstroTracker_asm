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
  // getMonth() is zero-based
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
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
