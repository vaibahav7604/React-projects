import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
const Display=()=>{
    const[texttocopy,setText]=useState();
    const [isCopied, setCopied] = useClipboard(texttocopy);

    const startListening=()=>SpeechRecognition.startListening({ continuous: true , language:'en-IN'});
    const stopListening=()=>{
        SpeechRecognition.stopListening()
    }
    const { transcript } = useSpeechRecognition();
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
      }
    
    return<>
        <div className='heading'>
    <h2>Speech TO Text Converter</h2>
  </div>
  <div className='text-container' onClick={()=>setText(transcript)} >
    <br/>
    { transcript }
  </div>

  <div className='btn-style'>
  <button onClick={setCopied}>
      {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
    <button onClick={startListening}>Start-Listning</button>
    <button onClick={stopListening}>Stop-Listing</button>
  </div>
  </>
}
export default Display;