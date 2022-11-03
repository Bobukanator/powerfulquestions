import bodyParser from 'body-parser'
import questionData from "../utils/questions.json";
import { getRandomQuestion } from "../utils/questionUtils";

export default function () {

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(bodyParser.json());
    app.use('/api/getinterviewquestions', getInterviewQuestions);
    app.use('/api/getrandominterviewquestion', getRandomInterviewQuestion);
  })

  async function getInterviewQuestions(req, res) {

    const body = req.body;
    if (!body) {
      return rejectHitBadRequest(res)
    }

    const response = questionData;
    sendJSON(response, res);
  }

  async function getRandomInterviewQuestion(req, res) {

    const body = req.body;
    if (!body) {
      return rejectHitBadRequest(res)
    }

    const response = await getRandomQuestion(questionData.questions).question;
    sendJSON(response, res);
  }

  function sendJSON(data, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }

  function rejectHitBadRequest(res) {
    res.statusCode = 400
    res.end()
  }
}