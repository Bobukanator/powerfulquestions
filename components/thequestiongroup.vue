<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is 8 has-text-centered">
        <p class="content is-large">{{ question }}</p>
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
