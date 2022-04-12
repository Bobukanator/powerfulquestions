import { mount } from '@vue/test-utils'
import Question from '@/components/thequestion.vue'

describe('Question', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Question)
    expect(wrapper.vm).toBeTruthy()
  })
})
