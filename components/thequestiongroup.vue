<template>
  <section class="section">
    <div class="columns is-centered">
      <div
        class="column is-one-third-fullhd is-half-desktop is-two-thirds-tablet"
      >
        <div v-for="question in questions">
          <p class="content is-large">{{ question.question }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheQuestionGroup",
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
};
</script>
