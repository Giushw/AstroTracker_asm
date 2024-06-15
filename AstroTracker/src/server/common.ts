import {formatDate} from "../lib/utils";

export const COMMON_PARAMS = {
  api_key: 'j85fmvxO9XshEdr33x43LaGCeAduOtcNquFJUe93',
};

const today = new Date();
export const formattedToday = formatDate(today);

// 7 days prior
const priorDate = new Date();
priorDate.setDate(today.getDate() - 7);
export const formattedPriorDate = formatDate(priorDate);