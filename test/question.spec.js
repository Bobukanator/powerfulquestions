import { mount } from '@vue/test-utils'
import Question from '@/components/thequestion.vue'
import { randomizeQuestions, getRandomQuestion } from '../utils/questionUtils'
import questionData from "~/static/questions.json";

describe('Question', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Question)
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