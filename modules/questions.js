import bodyParser from 'body-parser'
import { getRandomQuestion, randomizeQuestionsByTag } from "../utils/questionUtils";
import QUESTION_DATA from "../utils/questions.json";

export default function () {

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(bodyParser.json());
    app.use('/api/getinterviewquestions', getInterviewQuestions);
    app.use('/api/getrandominterviewquestion', getRandomInterviewQuestion);
    app.use('/api/getrandomquestionsbytag', getRandomInterviewQuestionsByTag);
  })

  async function getInterviewQuestions(req, res) {

    const body = req.body;
    if (!body) {
      return rejectHitBadRequest(res)
    }

    const response = QUESTION_DATA;
    sendJSON(response, res);
  }

  async function getRandomInterviewQuestion(req, res) {

    const body = req.body;
    if (!body) {
      return rejectHitBadRequest(res)
    }

    const response = getRandomQuestion(QUESTION_DATA.questions).question;
    sendJSON(response, res);
  }

  async function getRandomInterviewQuestionsByTag(req, res) {

    const body = req.body;
    if (!body || !body.tag || !body.numberOfQuestions) {
      return rejectHitBadRequest(res)
    }

    const response = randomizeQuestionsByTag(QUESTION_DATA.questions, body.tag);
    sendJSON(response.slice(0, parseInt(body.numberOfQuestions)), res);
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