<template>
  <section class="section">
    <thequestion :question="questions[0].question"></thequestion>
  </section>
</template>

<script>
import thequestion from "~/components/thequestion";
import questionData from "~/static/questions.json";

export default {
  name: "MainPage",
  components: {
    thequestion,
  },
  data() {
    return {
      questions: questionData.questions,
    };
  },
};
</script>
