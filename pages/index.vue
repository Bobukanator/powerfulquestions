<template>
  <section class="section">
    <thequestion :question="question"></thequestion>
  </section>
</template>

<script>
import thequestion from "~/components/thequestion";
import questionData from "~/static/questions.json";
import { getRandomQuestion } from "../utils/questionUtils";

export default {
  name: "MainPage",
  components: {
    thequestion,
  },
  async asyncData() {
    const question = await getRandomQuestion(questionData.questions).question;
    return { question };
  },
};
</script>
