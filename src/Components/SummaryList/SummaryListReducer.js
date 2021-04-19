import Summaries from '../../Constants/dummySummaries';
import {UPDATE_SUMMARY, SELECT_SUMMARY, CLICKED_TEXT} from '../../Constants/actionConstants';

const initialState = {
    SummaryListObject: Summaries,
    SummaryKey:Object.keys(Summaries)[0],
    clickedText: ''
};

const SummaryListReducer =  (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUMMARY: {
      return {
        ...state,    
        SummaryListObject: action.payload,
        clickedText: '',
      };
    }
    case SELECT_SUMMARY: {
      return {
        ...state,    
        SummaryKey: action.payload,
      };
    }
    case CLICKED_TEXT: {
      return {
        ...state,    
        clickedText: action.payload,
      };
    }
    default:
      return state;
  }
};
export default SummaryListReducer