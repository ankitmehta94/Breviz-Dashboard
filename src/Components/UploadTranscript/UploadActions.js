import {ADD_SUMMARY, SET_CREATION_LOADER, SET_FILENAME, DUMMY_RESPONSE} from '../../Constants/actionConstants';
//   import {disableLocationActiveState} from './hotelHelperFunctions';
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   
  const actionCreator = (key, hasPayload = false) => {
    if (hasPayload) return payload => ({ type: key, payload: payload });
    return () => ({ type: key });
  };
  const sendAndSetTranscriptJSON = (jsonArray) => async(dispatch, getState, {api}) => {
    console.log(jsonArray,'<-----------------jsonArray')
    await api.post('upload',{jsonArray})
  }
  const setFileName = (fileName) => async(dispatch, getState, {api}) => {
    dispatch({
      type : SET_FILENAME,
      payload : fileName
    });
  }
  const sendTranscriptText = (transcriptText, transcriptionType, history) => async(dispatch, getState, {api}) => {
    dispatch({
      type : SET_CREATION_LOADER,
      payload : true
    });
    const summaryType = 0;
    const response = await api.post('upload',{transcriptText, transcriptionType, summaryType});
    // await sleep(2000)
    // const response = DUMMY_RESPONSE
    console.log(response);
    const {summaryObject } = response
    const {SummaryListReducer} = getState();
    const {SummaryListObject, meetingName} = SummaryListReducer;
    SummaryListObject[meetingName] = {summaries : summaryObject['summaries'], transcript: response['transcriptText']}
    delete SummaryListObject['Loading']
    dispatch({
      type : ADD_SUMMARY,
      payload : {summaryList: SummaryListObject, clickedText: summaryObject['name'],SummaryKey:meetingName}
  });
  dispatch({
    type : SET_CREATION_LOADER,
    payload : false
  });
  if(response.success)
    history.push(`/${meetingName}/id:${response.id}`)
  return response
    // return {}

  }

const Actions = { sendAndSetTranscriptJSON, sendTranscriptText, setFileName }
export default Actions
