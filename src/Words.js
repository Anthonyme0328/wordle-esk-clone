import bankOfWords from './bankOfWords.txt'

export const boardDefault = [
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','','']
]

export const generatelistWordsSet = async () => {
  let setOfWords;
  let dailyWord;


  await fetch(bankOfWords).then((response) => response.text())
  .then((result) => {
    const wordBankList = result.split('\r\n')
    dailyWord = wordBankList[Math.floor(Math.random() * wordBankList.length)]
    setOfWords = new Set(wordBankList)
  })

  // return {listWordsSet, todaysWord}
  return {setOfWords, dailyWord }


}