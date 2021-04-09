import {UPDATE_SUMMARY, CLICKED_TEXT, UPDATE_AGENDA} from '../../../Constants/actionConstants';
  
//   import {disableLocationActiveState} from './hotelHelperFunctions';
  
  const actionCreator = (key, hasPayload = false) => {
    if (hasPayload) return payload => ({ type: key, payload: payload });
    return () => ({ type: key });
  };
  const updateSummaryList = (newSummaryObject) => (dispatch, getState) => {
    const { summaryId, newSummaryText } = newSummaryObject;
    const {SummaryListReducer} = getState();
    const {SummaryListObject, SummaryKey} = SummaryListReducer
    console.log(SummaryListObject,'<-----------------SummaryListObject');
    SummaryListObject[SummaryKey].summaries[summaryId] = {summary: newSummaryText};
    dispatch({
                type : UPDATE_SUMMARY,
                payload : SummaryListObject
            });
  }
  const updateClickedText = (clickedText) => (dispatch, getState) => {
    dispatch({
                type : CLICKED_TEXT,
                payload : clickedText
            });
  }
  const updateAgenda = (AgendaText) => (dispatch, getState) => {
       const {SummaryListReducer} = getState();
    const {SummaryListObject, SummaryKey} = SummaryListReducer
    SummaryListObject[SummaryKey].agenda = AgendaText
    dispatch({
                type : UPDATE_AGENDA,
                payload : AgendaText
            });
  }

const Actions = { updateClickedText, updateSummaryList, updateAgenda }
export default Actions
//   export const setLocationTitleActive = (locationTitle, isExpanded = false, locationsMap) => (dispatch) => {
//     try{
//       let updatedLocationsMap = disableLocationActiveState(locationsMap);
//       if(typeof locationTitle !== "string" || !updatedLocationsMap || !updatedLocationsMap[locationTitle]){
//         return false;
//       }
//       updatedLocationsMap[locationTitle].isActive = true;
//       updatedLocationsMap[locationTitle].isExpanded = isExpanded;
//       dispatch({
//         type : SET_LOCATION_TITLE_ACTIVE,
//         payload : updatedLocationsMap
//       });
//     }catch(err){
//       console.error("Err. HotelPage.actions.setLocationTitleActive : %s",err);
//     }
//   }
  
  
  
//   export const setLoading = () =>{
//     return ({type:SET_LOADING_STATE})} //actionCreator(SET_LOADING_STATE);
//     export const unsetLoading = () =>{
//       return ({type:UNSET_LOADING_STATE})} //actionCreator(SET_LOADING_STATE);
//     //export const unsetLoading = actionCreator(UNSET_LOADING_STATE);
//     export const setOccupancyState = (payload) => (dispatch) => {
//       setTimeout(() => {
//        dispatch({
//             type: REMOVE_NOTIFICATION,
//         })
//     }, 4000);
//     dispatch({
//       type: SET_OCCUPANCY_STATE,
//       payload
//   })
//     }