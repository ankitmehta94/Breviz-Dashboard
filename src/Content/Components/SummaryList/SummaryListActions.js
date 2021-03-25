import {UPDATE_SUMMARY} from '../../../Constants/actionConstants';
  
//   import {disableLocationActiveState} from './hotelHelperFunctions';
  
  const actionCreator = (key, hasPayload = false) => {
    if (hasPayload) return payload => ({ type: key, payload: payload });
    return () => ({ type: key });
  };
  const updateSummaryList = (newSummaryObject) => (dispatch, getState) => {
    const { summaryId, newSummaryText } = newSummaryObject;
    const {SummaryListObject} = getState();
    SummaryListObject[summaryId] = newSummaryText;
    dispatch({
                type : UPDATE_SUMMARY,
                payload : SummaryListObject
            });
  }
export default { updateSummaryList }
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