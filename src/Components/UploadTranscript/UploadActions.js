import {ADD_SUMMARY} from '../../Constants/actionConstants';
//   import {disableLocationActiveState} from './hotelHelperFunctions';
  
  const actionCreator = (key, hasPayload = false) => {
    if (hasPayload) return payload => ({ type: key, payload: payload });
    return () => ({ type: key });
  };
  const sendAndSetTranscriptJSON = (jsonArray) => async(dispatch, getState, {api}) => {
    console.log(jsonArray,'<-----------------jsonArray')
    await api.post('upload',{jsonArray})
  }
  const sendTranscriptText = (transcriptText, transcriptionType) => async(dispatch, getState, {api}) => {
    const summaryType = 0;
    const response = await api.post('upload',{transcriptText, transcriptionType, summaryType});
    console.log(response);
    const {summaryObject } = response
    const {SummaryListReducer} = getState();
    const {SummaryListObject} = SummaryListReducer;
    SummaryListObject[summaryObject['name']] = {summaries : summaryObject['summaries'], transcript: response['transcriptText']}
    dispatch({
      type : ADD_SUMMARY,
      payload : {summaryList: SummaryListObject, clickedText: summaryObject['name'],SummaryKey:summaryObject['name']}
  });
    return response

  }

const Actions = { sendAndSetTranscriptJSON, sendTranscriptText }
export default Actions
