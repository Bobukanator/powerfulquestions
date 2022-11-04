import { unWrap } from '~/utils/fetchUtils'

export default function (context, inject) {

  inject('dataApi', {
    getInterviewQuestions, getRandomInterviewQuestion, getRandomInterviewQuestionsByTag
  })

  async function getInterviewQuestions() {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/getinterviewquestions", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      }))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }

  async function getRandomInterviewQuestion() {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/getrandominterviewquestion", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      }))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }

  async function getRandomInterviewQuestionsByTag(tag, numberOfQuestions) {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/getrandomquestionsbytag", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          tag,
          numberOfQuestions
        })
      }))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }

}
