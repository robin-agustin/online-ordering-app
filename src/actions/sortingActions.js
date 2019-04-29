import { SET_SORT_TYPE } from './types';

export const sortPrices = sortType => {
  console.log(sortType)
  const sortFilter = [];
  sortFilter[0] = 'category';
  sortFilter[1] = '==';
  sortFilter[2] = sortType;

  return {
    type: SET_SORT_TYPE,
    payload: sortFilter
  };
};
