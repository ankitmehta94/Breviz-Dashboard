import { combineReducers } from "redux";
import SummaryListReducer from '../Content/Components/SummaryList/SummaryListReducer';


export default function createReducer(asyncReducers) {
    return combineReducers({
        SummaryListReducer:SummaryListReducer
    });
}
