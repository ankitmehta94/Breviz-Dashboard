import Summaries from '../../../Constants/dummySummaries';
import {UPDATE_SUMMARY, SELECT_SUMMARY} from '../../../Constants/actionConstants';

const initialState = {
    SummaryListObject: Summaries,
    SummaryKey:Object.keys(Summaries)[0]
};

const SummaryListReducer =  (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUMMARY: {
      return {
        ...state,    
        SummaryListObject: action.payload,
      };
    }
    case SELECT_SUMMARY: {
      return {
        ...state,    
        SummaryKey: action.payload,
      };
    }
    default:
      return state;
  }
};
export default SummaryListReducer