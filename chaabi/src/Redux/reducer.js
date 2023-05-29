import * as types from "./actionTypes";
const initialState = {
 scope:"",
 generator:{
   combination:0,
   repetition:0,
 }, 
 threshold:{
  wpm:0,
  accuracy:0,
 },

 version: 2.0,
 source: 'bigrams',
 soundCorrectLetterEnabled: true,
 soundIncorrectLetterEnabled: true,
 soundPassedThresholdEnabled: true,
 soundFailedThresholdEnabled: true,
 bigrams: {
   scope: 50,
   combination: 2,
   repetition: 3,
   minimumWPM: 40,
   minimumAccuracy: 100,
   WPMs: [],
   phrases: {},
   phrasesCurrentIndex: 0,
 },
 trigrams: {
   scope: 50,
   combination: 2,
   repetition: 3,
   minimumWPM: 40,
   minimumAccuracy: 100,
   WPMs: [],
   phrases: {},
   phrasesCurrentIndex: 0,
 },
 tetragrams: {
   scope: 50,
   combination: 2,
   repetition: 3,
   minimumWPM: 40,
   minimumAccuracy: 100,
   WPMs: [],
   phrases: {},
   phrasesCurrentIndex: 0,
 },
 words: {
   scope: 50,
   combination: 2,
   repetition: 3,
   minimumWPM: 40,
   minimumAccuracy: 100,
   WPMs: [],
   phrases: {},
   phrasesCurrentIndex: 0,
 },
 custom_words: {
   scope: null,
   combination: 2,
   repetition: 3,
   minimumWPM: 40,
   minimumAccuracy: 100,
   WPMs: [],
   phrases: {},
   phrasesCurrentIndex: 0,
 },
 phrases: [],
 expectedPhrase: '',
 typedPhrase: '',
 startTime: '',
 hitsCorrect: 0,
 hitsWrong: 0,
 isInputCorrect: true,
 rawWPM: 0,
 accuracy: 0,

  hour:0,
   min:0,
   sec:0,
   isLoading:false,
   isError:false,
}

const reducer = (state = initialState, action) => {
   const { type, payload } = action;
     switch (type) {
    case types.source_update:
        return {
            ...state,
            source:payload,
        }    

    case types.hour:
        return {
            ...state,
            hour:payload
        }
    case types.sec:
        return {
            ...state,
            sec:payload
        }
    case types.min:
        return {
            ...state,
            min:payload,
        }
    default:
        return state
    }
}

export { reducer}