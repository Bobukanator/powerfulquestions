export function randomizeQuestions(questionsArray) {
  var count = questionsArray.length;
  var arrayCopy = questionsArray.slice();
  var returnArray = [];
  while (count > 0) {
    if (arrayCopy.length) {
      var index = Math.floor(Math.random() * arrayCopy.length);
      returnArray.push(arrayCopy[index]);
      arrayCopy.splice(index, 1);
    }
    count--;
  }
  return returnArray;
}

export function getRandomQuestion(questionArray) {
  return questionArray[Math.floor(Math.random() * questionArray.length)];
}

export function randomizeQuestionsByTag(questionsArray, tag) {
  const arrayByTag = questionsArray.filter(question => question.tags.includes(tag))
  return randomizeQuestions(arrayByTag)
}