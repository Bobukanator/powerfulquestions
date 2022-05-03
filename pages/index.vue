<template>
  <section>
    <NuxtLink to="/">
      <div class="columns is-centered notification is-primary">
        <div class="column is-3" @click="reloadquestion()">
          <b-image
            :src="require('@/assets/Powerful Questions-logos.jpeg')"
            alt="The Powerful Questions logo"
            class="is-small"
          ></b-image>
        </div>
      </div>
    </NuxtLink>
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
  methods: {
    reloadquestion() {
      this.question = getRandomQuestion(questionData.questions).question;
    },
  },
};
</script>
