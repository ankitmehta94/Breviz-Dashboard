const readFileContent = function(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
const  setNameOfTranscript = function(input) {
    let fakePath = input.value;
    let pathArray = fakePath.split("\\");
    const { setFileName  } = this.props;
    const name = pathArray[2]?pathArray[2].split('.')[0]:false
    const { history } = this.props;
    if(name){
      setFileName(name)
      history.push(`${name}/id:loading`)
    }
    return name
  }
const sendOtterTranscript = async function(event) {
    await this.readFileAndSend(event,'otter')
  }
const  readFileAndSend = async function(event, type){
    const input = event.target;
    if(this.setNameOfTranscript(input)){
      const { sendTranscriptText, history  } = this.props;
      const text =  await this.readFileContent(input.files[0])
      sendTranscriptText(text,type,history);
    }
  }
const  sendZoomTranscript = async function(event) {
    await this.readFileAndSend(event,'zoomOtter')
  }
const Utils = {sendZoomTranscript,readFileContent, sendOtterTranscript, setNameOfTranscript, readFileAndSend}
  export default Utils