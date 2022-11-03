<template>
  <section>
    <NuxtLink to="/">
      <div class="columns is-centered notification is-primary">
        <div class="column is-3" @click="getRandomInterviewQuestion()">
          <b-image
            :src="require('@/static/images/Powerful Questions-logos.jpeg')"
            alt="The Powerful Questions logo"
            class="is-small"
          ></b-image>
        </div>
      </div>
    </NuxtLink>
    <div v-if="question != ''">
      <thequestion :question="question"></thequestion>
    </div>
  </section>
</template>

<script>
import thequestion from "~/components/thequestion";

export default {
  name: "MainPage",
  components: {
    thequestion,
  },
  data() {
    return {
      question: "",
    };
  },
  mounted() {
    this.getRandomInterviewQuestion();
  },
  methods: {
    async getRandomInterviewQuestion() {
      this.question = await this.$dataApi.getRandomInterviewQuestion();
    },
  },
};
</script>
