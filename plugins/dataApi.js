import { unWrap } from '~/utils/fetchUtils'

export default function (context, inject) {

  inject('dataApi', {
    getInterviewQuestions, getRandomInterviewQuestion
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

}
