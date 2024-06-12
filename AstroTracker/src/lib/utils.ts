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
}