import { wordBank } from "./bankOfWords";

export const boardDefault = [
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','','']
]

console.log(wordBank)
export const generatelistWordsSet = async () => {

  let setOfWords;
  let dailyWord;


    dailyWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    setOfWords = new Set(wordBank)
  

  // return {listWordsSet, todaysWord}
  return {setOfWords, dailyWord }


}