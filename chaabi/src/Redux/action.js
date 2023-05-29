import * as types from "./actionTypes";

const hours =(payload)=>{
    return {
        type:types.hour,
        payload,
    }
}
const minute = (payload)=>{
    return {
        type:types.min,
        payload,
    }
}
const sec = (payload)=>{
    return {
        type:types.sec,
        payload,
    }
}
const sourceupdate = (payload)=>{
    return {
        type:types.source_update,
        payload,
    }
}

export const setSource = (source) => ({
    type: types.SET_SOURCE,
    payload: source,
  });
  
  export const toggleSoundCorrectLetter = (isEnabled) => ({
    type:types.TOGGLE_SOUND_CORRECT_LETTER,
    payload: isEnabled,
  });
  
  export const toggleSoundIncorrectLetter = (isEnabled) => ({
    type: types.TOGGLE_SOUND_INCORRECT_LETTER,
    payload: isEnabled,
  });
  
  export const toggleSoundPassedThreshold = (isEnabled) => ({
    type: types.TOGGLE_SOUND_PASSED_THRESHOLD,
    payload: isEnabled,
  });
  
  export const toggleSoundFailedThreshold = (isEnabled) => ({
    type: types.TOGGLE_SOUND_FAILED_THRESHOLD,
    payload: isEnabled,
  });
  
  export const setCustomWords = (customWords) => ({
    type:types.SET_CUSTOM_WORDS,
    payload: customWords,
  });
  
  export const updatePhrases = (phrases) => ({
    type: types.UPDATE_PHRASES,
    payload: phrases,
  });
  
  export const updateMetrics = (metrics) => ({
    type:types.UPDATE_METRICS,
    payload: metrics,
  });
export {
    hours,
    minute,
    sec,
    sourceupdate
}