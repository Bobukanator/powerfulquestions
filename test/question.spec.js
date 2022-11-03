import { mount } from '@vue/test-utils'
import TheQuestion from '@/components/thequestion.vue'
import { randomizeQuestions, getRandomQuestion, randomizeQuestionsByTag } from '../utils/questionUtils'
import questionData from "../utils/questions.json";

describe('Question', () => {
  test('is a Vue instance', () => {

    const wrapper = mount(TheQuestion, {
      propsData: {
        question: "A question?"
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})


describe('Question randomizer', () => {
  test('works correctly!', () => {

    const testArray = questionData.questions
    const actual = randomizeQuestions(testArray)
    expect(actual.length).toEqual(testArray.length)
    expect(actual).not.toStrictEqual(testArray)

  })
})

describe('Question getRandomQuestion', () => {
  test('works correctly!', () => {

    const testArray = questionData.questions
    const actual = getRandomQuestion(testArray)
    expect(actual).toHaveProperty('question')
    expect(actual).toHaveProperty('tags')

  })
})

describe('Question randomizeQuestionsByTag', () => {
  /* NOTE - The number variables will need to be updated
  as new questions are added to questions.json*/
  test('works correctly with goal!', () => {

    const numberOfGoalQuestions = 11;
    const testArray = questionData.questions
    const actual = randomizeQuestionsByTag(testArray, "goal")
    expect(actual[0]).toHaveProperty('question')
    expect(actual[0]).toHaveProperty('tags')
    expect(actual.length).toEqual(numberOfGoalQuestions)
    expect(actual).not.toStrictEqual(testArray)

  })
  test('works correctly with reality!', () => {

    const numberOfRealityQuestions = 22;
    const testArray = questionData.questions
    const actual = randomizeQuestionsByTag(testArray, "reality")
    expect(actual[0]).toHaveProperty('question')
    expect(actual[0]).toHaveProperty('tags')
    expect(actual.length).toEqual(numberOfRealityQuestions)
    expect(actual).not.toStrictEqual(testArray)

  })
  test('works correctly with options!', () => {

    const numberOfOptionQuestions = 31;
    const testArray = questionData.questions
    const actual = randomizeQuestionsByTag(testArray, "option")
    expect(actual[0]).toHaveProperty('question')
    expect(actual[0]).toHaveProperty('tags')
    expect(actual.length).toEqual(numberOfOptionQuestions)
    expect(actual).not.toStrictEqual(testArray)

  })
  test('works correctly with action!', () => {

    const numberOfActionQuestions = 11;
    const testArray = questionData.questions
    const actual = randomizeQuestionsByTag(testArray, "action")
    expect(actual[0]).toHaveProperty('question')
    expect(actual[0]).toHaveProperty('tags')
    expect(actual.length).toEqual(numberOfActionQuestions)
    expect(actual).not.toStrictEqual(testArray)

  })
})