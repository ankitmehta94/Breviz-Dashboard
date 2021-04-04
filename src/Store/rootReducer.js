import { combineReducers } from "redux";
import SummaryListReducer from '../Content/Components/SummaryList/SummaryListReducer';

export default function createReducer() {
    return combineReducers({
        SummaryListReducer:SummaryListReducer,
    });
}
