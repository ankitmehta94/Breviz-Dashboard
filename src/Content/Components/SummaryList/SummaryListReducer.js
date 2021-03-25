import Summaries from '../../../Constants/dummySummaries';
import {UPDATE_SUMMARY} from '../../../Constants/actionConstants';

const initialState = {
    SummaryListObject: Summaries
};

const SummaryListReducer =  (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUMMARY: {
      return {
        ...state,    
        SummaryListObject: action.payload,
      };
    }
    default:
      return state;
  }
};
export default SummaryListReducer